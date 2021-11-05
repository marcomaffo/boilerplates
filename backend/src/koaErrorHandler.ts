import KoaError from './errors/koaError';
import Koa from 'koa';
import {debug} from './tools/logger';

export default async function(ctx: Koa.Context, next: Koa.Next) {
  try {
    await next();
  } catch (err: any) {
    const error = err as KoaError;
    debug('Error: ' + error.name);

    // We didn't throw the error, since we always add a status, it seems like an internal error
    if (error.status === undefined) {
      ctx.status = 500;
      debug(error.message);
    } else {
      ctx.status = error.status;
    }

    ctx.body = {
      name: error.name,
      message: error.message,
    };
  }
}