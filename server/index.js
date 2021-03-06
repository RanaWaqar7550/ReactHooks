import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import { rootRouter } from 'Routes';
import { connectDatabase } from 'Models';
import { errorMiddleware } from 'Middlewares';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', rootRouter);
app.use(errorMiddleware);

connectDatabase();
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
