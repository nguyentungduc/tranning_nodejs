import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'test',
  entities: ['../**/*.entity.ts'],
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*.factory{.ts,.js}'],
};

export const dataSource = new DataSource(options);
