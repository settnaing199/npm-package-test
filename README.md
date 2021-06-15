# Atlantis-Cache v1.0.2

### About
Atlantis-Cache is an easy-to-use and lightweight library . GraphQL leverages redis t


### Getting Started

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

### 2. Installing Atlantis-Cache Package

`npm i atlantis-cache`

In Node.js:

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

Note:

if you want to use graphQL, you can use a different endpoint for atlantis requests in devlopment. ie. app.use('/atlantis', atlants ..)

### Contributors:
Atlantis-cache is an open source npm package in collaboration with OSlabs-beta


