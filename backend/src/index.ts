import Koa, { Context } from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import api from "./api";

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use("/api", api.routes());

// 라우터 적용 전 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Listening to port 4000");
  console.log("URL:", "http://localhost:4000");
});
