import Link from "next/link";
import { demoData } from "./demoData";
import ArticleItem from "@/components/ArticleItem";
export default function Home() {
  return (
    <div>
      {demoData.map((post) => {
        return <ArticleItem post={post} />;
      })}
    </div>
  );
}
