require('dotenv').config();

module.exports = {
  schema: "./utils/schema.jsx",  // Path to your schema definition
  dialect: 'postgresql',         // Specify the database dialect
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,  // Database URL from environment variables
  }
};
