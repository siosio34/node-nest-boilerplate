import * as path from 'path';

export default {
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'postgres',
  database: process.env.TYPEORM_DATABASE || 'postgres',
  port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
  entities: [path.join(__dirname, '../api/**/*.entity{.ts,.js}')],
  synchronize: true,
};
