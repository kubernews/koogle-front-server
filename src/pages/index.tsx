import ArticleItem from "@/components/ArticleItem";
import { GetStaticProps } from "next";

type Post = {
  kid: number;
  publishDate: string;
  title: string;
  content: string;
  url: string;
};
export const getStaticProps: GetStaticProps<{ posts: Array<Post> }> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news/list?page=1&size=10&keyword=k8s`);
  if (res.status !== 200) {
    throw new Error("Failed to fetch data!");
  }
  const result: { data: Array<Post> } = await res.json();
  return { props: { posts: result.data } };
};

export default function Article({ posts }: { posts: Array<Post> }) {
  return (
    <div>
      {posts.map((post) => {
        return <ArticleItem key={post.kid} post={post} />;
      })}
    </div>
  );
}
