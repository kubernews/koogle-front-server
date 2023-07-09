import React from "react";
import Link from "next/link";
import styles from "./ArticleItem.module.css";

interface ArticleProps {
  post: {
    kid: number;
    url: string;
    title: string;
    content?: string;
  };
}
const ArticleItem = ({ post }: ArticleProps) => {
  return (
    <article className={styles["article-wrap"]} key={post.kid}>
      <Link href={post.url}>
        <h2>{post.title}</h2>
      </Link>
      {post.content && <p>{post.content}</p>}
    </article>
  );
};

export default ArticleItem;
