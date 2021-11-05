import fs from 'fs';

export function createResponseFile(filePath: string): Promise<Buffer> {
  return new Promise<Buffer>(function (resolve, reject) {
    fs.readFile(filePath, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}