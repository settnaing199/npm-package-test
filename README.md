# Atlantis-Cache v1.0.2

## Installation
using npm:

```
npm i atlantis-cache
```

## In Node.js:

```
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
app.use('/graphql', atlantis(redisClient, schema), async (req, res) => {
  return res.status(202).json({ data: res.locals.graphQLResponse });
});
```

##

