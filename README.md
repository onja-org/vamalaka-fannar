# Vamalaka - E-commerce international trading platform that helps people in Madagascar sell their products globally. It follows "Direct to Consumer" bussiness model 

As a implementation technology we have chosen: TypeScript, React, Redux, Redux Tool Kit, Cypress for integration testing. Containerized backend that exposes GraphQL interface, MongoDB, NodeJS

# Development setup

## Backend

### Requirements

docker and docker-compose installed on your machine

### Installation

```
cd server
```

- build the project using

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

### yarn cypress:ci

To run ui integration tests

### yarn storybook

Run storybook 
