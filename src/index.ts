import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { createConnection } from 'typeorm'
import Twig  from 'twig';

import userRoutes from './routes/user.routes'
import propertyRoutes from './routes/property.routes'

const app = express();
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes);
app.use(propertyRoutes);

app.listen(3000);
console.log('Server on port', 3000);
