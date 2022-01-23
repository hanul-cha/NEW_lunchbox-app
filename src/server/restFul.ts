import { config } from './config';
import { Client } from "pg"

export const client = new Client({
    user: config.DB_USER,
    host: config.DB_HOST,
    database: config.DB_DATABASE,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
});

