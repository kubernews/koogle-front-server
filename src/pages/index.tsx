import ArticleItem from "@/components/ArticleItem";
// import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

type Post = {
  kid: number;
  publishDate: string;
  title: string;
  content: string;
  url: string;
};
// export const getStaticProps: GetStaticProps<{
//   data: Array<Post>;
// }> = async () => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/v1/news/list?page=1&size=10&keyword=k8s`
//     );
//     if (res.status !== 200) {
//       console.error("Failed to fetch data!");
//       return { props: { data: [] } };
//     }
//     const result: { data: Array<Post> } = await res.json();
//     return { props: result };
//   } catch {
//     console.error("Failed to fetch data!");
//     return { props: { data: [] } };
//   }
// };

export default function Article() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`/v1/news/list?page=1&size=10&keyword=k8s`);
        if (res.status !== 200) {
          console.error("Failed to fetch data!");
        }
        const result: { data: Array<Post> } = await res.json();
        if (!Array.isArray(result?.data)) throw new Error("data is not array");
        setData(result?.data);
      } catch {
        console.error("Failed to fetch data!");
      }
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((post) => {
        return <ArticleItem key={post.kid} post={post} />;
      })}
    </div>
  );
}
