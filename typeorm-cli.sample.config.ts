import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Malekhamed@22',
  database: 'Nestjs-blog',
  entities: ['**/*.entity.js'],
  migrations: ['migrations/*.js'],
});
