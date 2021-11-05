import Router from 'koa-router';

const router = new Router();
router.prefix('/example')
  .get('/info', async ctx => {
    ctx.body = {
      version: 0.5,
    };
  });
(global as any).koa.use(router.routes());