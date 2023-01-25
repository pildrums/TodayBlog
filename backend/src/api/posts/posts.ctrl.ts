import { Context } from "koa";

let postId = 1; // id 초기값

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용",
  },
];

// Post 작성
exports.write = (ctx: Context) => {
  const { title, body } = ctx.Request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

// Post 목록 조회
exports.list = (ctx: Context) => {
  ctx.body = posts;
};

// 특정 포스트 조회
exports.read = (ctx: Context) => {
  const { id } = ctx.params; // 문자열
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 없습니다.",
    };
    return;
  }
  ctx.body = post;
};
