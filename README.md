# Atlantis-Cache v1.0.2

## Installation

### 1. Redis
If Redis is not installed in your local machine:
  - Redis on Mac with HomeBrew:
    - At the terminal, `brew install redis`
    - start redis sever with `redis-server`
    - test if redis server is running with `redis-cli ping`

  

### 2. Atlantis-Cache 
using npm:
```
npm i atlantis-cache
```

In Node.js:

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
app.use('/graphql', 
  atlantis(redisClient, schema), 
  async (req, res) => {
    return res
            .status(202)
            .json({ data: res.locals.graphQLResponse });
});
```

Note:

if you want to use graphiQL, you can use a different endpoint for atlantis requests in devlopment. ie. app.use('/atlantis', atlants ..)

### Contributors:
Atlantis-cache is an open source npm package in collaboration with OSlabs-beta


