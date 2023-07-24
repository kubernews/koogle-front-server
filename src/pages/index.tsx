import ArticleItem from "@/components/ArticleItem";
import Pagination from "@/components/Pagination";
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

type Article = {
  bizCode: string;
  currentPage: number;
  data: Array<{
    kid: number;
    url: string;
    title: string;
    content?: string;
  }>;
  empty: boolean;
  first: boolean;
  last: boolean;
  limit: number;
  numberOfElements: number;
  pageNumbers: Array<number>;
  totalElements: number;
  totalPages: number;
};

export default function Article() {
  const [articles, setArticles] = useState<Article | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `/v1/news/list?page=${currentPage}&size=${pageSize}&keyword=k8s`
        );
        if (res.status !== 200) {
          console.error("Failed to fetch data!");
        }
        const result = await res.json();
        if (!Array.isArray(result?.data)) throw new Error("data is not array");
        setArticles(result as Article);
      } catch {
        console.error("Failed to fetch data!");
      }
    };
    getData();
  }, [currentPage, pageSize]);

  return (
    <div>
      <input
        type="number"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      />
      {articles?.data.map((post) => {
        return <ArticleItem key={post.kid} post={post} />;
      })}
      {articles && (
        <Pagination
          currentPage={currentPage}
          totalPages={articles.totalPages}
          onClickNext={() =>
            setCurrentPage((prev) =>
              articles.totalPages === prev ? prev : prev + 1
            )
          }
          onClickPrev={() =>
            setCurrentPage((prev) => (1 === prev ? prev : prev - 1))
          }
        />
      )}
    </div>
  );
}
