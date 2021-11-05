import Koa from 'koa';
import koaBodyparser  from 'koa-bodyparser';
import koaErrorHandler from './koaErrorHandler';
import {debug} from './tools/logger';

const koa = new Koa();

(global as any).koa = koa;

// Use a key for cookie signing
koa.keys = ['12345678-90ab-4cde-f012-34567890abcd'];

const bodyparserConfig = {
  jsonLimit: '3mb',
};
koa.use(koaBodyparser(bodyparserConfig));

koa.use(koaErrorHandler);

import './routes';

koa.listen(3000);
debug('Server running on port 3000');

export default koa;