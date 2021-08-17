# Vamalaka-foundation

# Server setup

## Requirements

you should have docker and docker-compose installed on your machine

## Installation

```
cd server
```

- build your project using

```
$ sudo docker-compose build
```

```
$ sudo docker-compose up
```

Or both

```
sudo docker-compose up --build
```

your GraphQL project will run on http://localhost:4000/graphql

- admin-mongo interface will be displayed on http://localhost:8082/

- add a random name to your connection and in the field connection string put the following connection string
  (mongodb://mongo/myappdb)

### DB data achiving and restoring

After launching docker containers

To archive:

```
docker exec graphqlmongo sh -c 'exec mongodump -d myappdb --archive' > ./server/migrate/all-collections.archive
```

To restore:

```
docker exec -i graphqlmongo sh -c "mongorestore --archive" < ./server/migrate/all-collections.archive
```

# Frontend

## Available Scripts

In the project directory, you can run:

### `yarn`

To install all required packages

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
