import express from 'express';
import serveStatic from 'serve-static';
import { Server } from 'http';

export const serve = async (location: string, port: string): Promise<Server> => {
  return new Promise((resolve, reject) => {
    const app = express();

    app.use(serveStatic(location));
    const server = app.listen(port, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(server);
      }
    });
  });
};
