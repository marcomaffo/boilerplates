import Koa from 'koa';
import {Knex} from 'knex';

type Config = {
  sessionValidSeconds: number,
  appUrl: string,
};

declare global {
  const knex: Knex;
  const koa: Koa;

  namespace NodeJS {
    interface Global {
      koa: Koa,
      knex: Knex,
      config: Config,
    } 
  }
}