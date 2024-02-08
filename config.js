import { Sequelize } from "sequelize"; // named import
// const sequelize = new Sequelize("postgres://postgres:pass@example.com:5432/dbname"); // Connection string

import "dotenv/config";
export const sequelize = new Sequelize(process.env.SQL_URL);
