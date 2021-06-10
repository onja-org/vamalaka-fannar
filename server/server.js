const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { mergeSchemas } = require("@graphql-tools/merge");

const adSchema = require("./graphql/AdSchema").AdSchema;
const userSchema = require("./graphql/UserSchema").UserSchema;
const categorySchema = require("./graphql/CategorySchema").CategorySchema;

const mergedSchema = mergeSchemas({
  schemas: [categorySchema, adSchema, userSchema],
});

const cors = require("cors");

app.use(cors());
app.options("*", cors());

mongoose.connect(
  "mongodb://mongo/myappdb",
  { useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("connected to mo1223m");
  }
);

app.set("port", process.env.port || 4000);
app.listen(app.get("port"), () => {
  console.log("Node app is running at localhost:" + app.get("port"));
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
