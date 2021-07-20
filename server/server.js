const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const multer = require("multer");
const fs = require("fs");
const stream = require("stream");
const path = require("path");
const { mergeSchemas } = require("@graphql-tools/merge");

const adSchema = require("./graphql/AdSchema").AdSchema;
const userSchema = require("./graphql/UserSchema").UserSchema;
const categorySchema = require("./graphql/CategorySchema").CategorySchema;

const {
  resize,
  dummySVG,
  generatePlaceholderImageWithText,
} = require("./utils/image-manipulation");

const mergedSchema = mergeSchemas({
  schemas: [categorySchema, adSchema, userSchema],
});

const cors = require("cors");

const USER_UPLOAD_DIR = `.${process.env.USER_UPLOAD_DIR}`;
const USER_UPLOADED_DIR = process.env.USER_UPLOADED_DIR;
const DUMMY_IMG = process.env.DUMMY_IMG;

const DUMMY_IMG_PATH = `${USER_UPLOADED_DIR}/${DUMMY_IMG}`;

console.log("process.env.USER_UPLOAD_DIR", USER_UPLOAD_DIR);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, USER_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const justName = path.basename(file.originalname, extension);
    const fileNameGiven =
      file.fieldname + "-" + justName + "-" + uniqueSuffix + extension;
    cb(null, fileNameGiven);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;

    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
  limits: { fileSize: 1 * 1024 * 1024 }, //1MB
});

app.use(cors());
app.options("*", cors());

mongoose.connect(
  "mongodb://mongo/myappdb",
  { useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("connected to Auuuuuummmooooooo");
  }
);

app.set("port", process.env.port || 4000);
app.listen(app.get("port"), () => {
  console.log("Node app is running at localhost:" + app.get("port"));
});

const AVATAR = "avatar";
const OFFER = "offer";

app.post(
  "/upload",
  upload.fields([
    { name: AVATAR, maxCount: 1 },
    { name: OFFER, maxCount: 1 },
  ]),
  function (req, res) {
    if (!req.files) {
      console.log("No files received");
    } else {
      const avatarFile = req.files[AVATAR];
      const offerFile = req.files[OFFER];

      const filenames = [
        ...(avatarFile ? [avatarFile[0].filename] : []),
        ...(offerFile ? [offerFile[0].filename] : []),
      ];
      console.log("Got a files to process:", req.files);
      return res.json({ success: true, filenames });
    }
  }
);

// TODO:

// cleanup dummy img

app.get("/uploads/:file", async function (req, res) {
  let filepath = path.resolve(USER_UPLOADED_DIR, req.params.file);
  const widthString = req.query.width;
  const heightString = req.query.height;
  const format = req.query.format;
  const message = req.query.message;
  console.log("WiDTH", widthString);
  console.log("filepathfilepath:", filepath);
  console.log("message:", message);

  let width, height;
  if (widthString) {
    width = parseInt(widthString);
  }
  if (heightString) {
    height = parseInt(heightString);
  }
  if (filepath === DUMMY_IMG_PATH) {
    const dumImgBuffer = await generatePlaceholderImageWithText(
      width || 222,
      height || 222,
      message || "DUMMY IMAGE",
      DUMMY_IMG_PATH
    );
    const readStream = fs.createReadStream(DUMMY_IMG_PATH);
    readStream.on("error", (err) => {
      console.log("Read stream Error " + err);
      res.status(500).send(err);
    });
    const transform = resize(format, width, height);

    readStream.pipe(transform).pipe(res);
  } else {
    try {
      const readStream = fs.createReadStream(filepath);
      readStream.on("error", (err) => {
        console.log("Read stream Error " + err);
        res.status(500).send(err);
      });

      const transform = resize(format, width, height);

      readStream.pipe(transform).pipe(res);
    } catch (err) {
      res.status(500).send("Something broke!");
    }
  }
});

app.use(
  "/graphql",
  graphqlHTTP((req, res, graphQLParams) => {
    return {
      schema: mergedSchema,
      rootValue: global,
      graphiql: true,
      context: { req },
    };
  })
);

app.get("/", (req, res) => {
  res.send("hello wood ! ");
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
