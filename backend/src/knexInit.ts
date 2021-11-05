import Knex from 'knex';

import knexSettings from '../knexfile';

const mode = process.env['NODE_ENV'] || 'development';

const config = {
  client: 'pg',
  connection: {
    host: knexSettings[mode].connection.host || '192.168.2.119',
    user: knexSettings[mode].connection.user || 'postgres',
    password: knexSettings[mode].connection.password || 'password',
    database: knexSettings[mode].connection.database || 'my_db',
    charset: 'utf8',
    port: knexSettings[mode].connection.port || 5432,
  },
  pool: {
    min: knexSettings[mode].pool?.min || 2,
    max: knexSettings[mode].pool?.max || 10,
  },
};

const knex = Knex(config);

(global as any).knex = knex;

export default knex;