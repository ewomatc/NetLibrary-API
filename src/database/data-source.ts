import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
import { Author } from '../entities/Author';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST || '127.0.0.1',
	port: Number(process.env.DB_PORT) || 3306,
	username: process.env.DB_USERNAME || 'root',
	password: process.env.DB_PASSWORD || 'Admin123',
	database: process.env.DB_DATABASE || 'NetLibrary',
	logging: true,
	synchronize: false, //use migrations instead
	entities: [Author],
	subscribers: [],
	migrations: ['src/database/migrations/*.ts'],
});
