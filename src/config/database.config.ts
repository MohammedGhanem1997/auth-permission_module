import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });
console.log( process.env.DB_TYPE);
console.log( __dirname); 



  console.log("POSTGRES_HOST", process.env.POSTGRES_HOST);
 
  const config= {
    type: 'postgres', 
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT),

    database: process.env.POSTGRES_DATABASE || '',
    synchronize: process.env.TYPE_ORM_SYNC === 'ON', //process.env.NODE_ENV === 'development',
    logger: 'advanced-console',
    migrationsTableName: 'migrations_typeorm', 
    migrationsRun: false,
     entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/**/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    logging: false, 
  
  };

export default registerAs('database', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
 

