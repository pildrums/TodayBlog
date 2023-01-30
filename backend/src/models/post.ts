import mongoose, { Schema } from "mongoose";

interface IPostSchema extends Schema {
  title: string;
  body: string;
  tags: string[];
  publishedDate: {};
  user: {};
}

const PostSchema = new Schema<IPostSchema>({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
