require("module-alias/register"); // must be called before everything
import { Prisma } from "infra/db/prisma";
import { env } from "./config/env";

Prisma.$connect()
  .then(async () => {
    const app = (await import("main/config/app")).default;
    // https.createServer(env.httpsOptions, app).listen(env.port, () => {
    //   console.log(`Running on ${env.server}:${env.port}/`);
    //   console.log(`Docs on ${env.server}:${env.port}/api-docs/`);
    //   startJobs();
    // });

    app.listen(env.port, () => {
      console.log(`Running on ${env.server}:${env.port}/`);
      console.log(`Docs on ${env.server}:${env.port}/api-docs/`);
    });

  })
  .catch(console.error);