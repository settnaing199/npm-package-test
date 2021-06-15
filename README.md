# Atlantis-Cache v1.0.2

## About
Atlantis is a light-weight library that leverages Redis key-value store to dynamically cache GraphQL queries as responses. Atlantis is able to dynamically store deeply-nested queries and maintain the most recent and relevant data as mutations are made to the database. Queries that are more shallow and within the scope of previous queries are pulled directly from the cache, offering further flexibility and precision, without additional database requests or overriding previous key-values.

## Getting Started

### 1. Installing and Connecting to a Redis Server
This package is meant to work in conjunction with redis. To install redis:
  - Mac-HomeBrew:
    - At the terminal, `brew install redis`
    - Start redis server with `redis-server`
    - Ping your redis server to verify if it's running: `redis-cli ping`
    - Keep note of the redis port. Default port is `6379`

  - Linux or non-Homebrew:
    - Download appropriate version of Redis from redis.io/download
    - Follow the instructions
    - Once installation is completed, start redis server with `redis-server`
    - Keep note of the redis port. Default port is `6379`

### 2. Installing Atlantis-Cache
Install Atlantis-Cache as an npm module and save it to your package.json as a dependency.

`npm i atlantis-cache`

## How to Use Atlantis-Cache

```js
const express = require('express');
const redis = require('redis');
const { graphql } = require('graphql');
const schema = require('./schema/schema');
const { atlantis } = require('atlantis-cache');

const app = express();

// Configure your redis client
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

// Define your endpoint for graphQL queries and pass in your redis, and schema
app.use('/graphql', 
  atlantis(redisClient, schema), 
  async (req, res) => {
    return res
            .status(202)
            .json({ data: res.locals.graphQLResponse });
});
```

#### Note:

if you want to use graphQL, you can use a different endpoint for atlantis requests in devlopment. ie. app.use('/atlantis', atlants ..)

## Contributors:
Atlantis-cache is an open source npm package in collaboration with OSlabs-beta


