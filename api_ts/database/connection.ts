
import * as mongoose from 'mongoose'
const dotenv = require('dotenv').config();
    const dbUrl = dotenv.parsed.DB_URL,
      dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false
      }// Set DB from mongoose connection
    mongoose.connect(dbUrl, dbOptions)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
export {db, mongoose};