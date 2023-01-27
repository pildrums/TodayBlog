import Koa, { Context } from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import api from "./api";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createFakeData from "./createFakeData";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(`${MONGO_URI}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use("/api", api.routes());

// 라우터 적용 전 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log("Listening to port %d", port);
  console.log("URL:", "http://localhost:4000");
});
