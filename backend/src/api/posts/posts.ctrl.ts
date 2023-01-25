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
export const write = (ctx: any) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

// Post 목록 조회
export const list = (ctx: any) => {
  ctx.body = posts;
};

// 특정 포스트 조회
export const read = (ctx: any) => {
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

// 포스트 삭제
export const remove = (ctx: Context) => {
  const { id } = ctx.params;
  // 해당 id를 가진 포스트가 몇 번째인지 조회
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 없습니다.",
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204;
};

// 포스트 수정(교체)
export const replace = (ctx: any) => {
  const { id } = ctx.params;
  // 해당 id를 가진 포스트가 몇 번째인지 조회
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 없습니다.",
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

// 포스트 수정(특정 필드 변경)
export const update = (ctx: any) => {
  const { id } = ctx.params;
  // 해당 id를 가진 포스트가 몇 번째인지 조회
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 없습니다.",
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
