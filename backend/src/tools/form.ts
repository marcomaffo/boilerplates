import koa from 'koa';
import multiparty from 'multiparty';

export type formData = {
  fields?: {[key: string]: any},
  file?: {
    path: string,
  },
}

export function getFormData(ctx: koa.Context): Promise<formData> {
  const form = new multiparty.Form();
  return new Promise<formData>((resolve, reject) => {
    form.parse(ctx.req, (err, fields, files) => {
      let data: formData = {};
      if (err) {
        reject(err);
        return;
      }
      if (fields) {
        data.fields = {};
        for (const propName in fields) {
          // We always take the first entry of the values
          const propValue = fields[propName][0];
          data.fields[propName] = propValue;
        }
      }
      if (files.file && files.file.length) {
        const filePath = files.file[0].path as string;
        data.file = {
          path: filePath,
        };
      }
      resolve(data);
    });
  });
}