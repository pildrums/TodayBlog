import Post from "../../models/post";

/*
  POST api/posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
  함수는 promise를 반환해야 하므로 함수는 async/await 문법 사용
*/
export const write = async (ctx: any) => {
  const { title, body, tags } = ctx.request.body;
  // 새로운 포스트 인스턴스 생성(new 구문 사용)
  const post = new Post({
    title,
    body,
    tags,
  });
  // await는 무조건 try/catch 문으로 오류처리 해야 함
  try {
    // 저장될 때까지 대기(await)
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx: any) => {
  try {
    // exec(): 서버에 쿼리 요청
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx: any) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const remove = async (ctx: any) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async (ctx: any) => {
  const { id } = ctx.params;
  try {
    // 첫번째 파라미터: id, 두번째 파라미터: 업데이트 내용, 세번째 파라미터: 업데이트 옵션
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터 반환
      // false일 때는 업데이트되기 전의 데이터를 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
