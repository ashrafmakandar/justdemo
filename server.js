const express = require('express');
require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const connect= require("./config/db");
const route= require('./route/ItemRoute');
const authRoute= require('./route/AuthRoute');
const app = express();
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API with MongoDB',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
    servers: [
      {
        url: 'http://localhost:8185/',
      },
    ],
  },
  apis: ['./route/*.js'], // path to your route files with Swagger comments
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/",route);
app.use("/main",authRoute);
const PORT= process.env.PORT||8009;
connect();
app.get("/api",(req,res)=>{
    res.json({
        "status":"connected"
    })
})

app.listen(PORT,(req,res)=>{
    console.log("app is connected"+PORT);
})
