"use client";

import { Post, User } from "@prisma/client";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/navigation";
import styles from "./PostDetails.module.css";

type Props = Post & {
  author: User | null;
};

export default function PostDetails({
  id,
  author,
  title,
  content,
  published,
}: Props) {
  const router = useRouter();

  async function publishPost() {
    await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "PUT",
    });
    router.refresh();
    router.push("/");
  }

  async function deletePost() {
    await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
    });
    router.refresh();
    router.push("/");
  }

  return (
    <main>
      <h1>{published ? title : `${title} (Draft)`}</h1>
      <p>by {author?.name || "anonymous"}</p>
      <section className={styles.section}>
        <Markdown>{content || ""}</Markdown>
      </section>
      {!published && (
        <button className={styles.button} onClick={publishPost}>
          Publish
        </button>
      )}
      <button onClick={deletePost} className={styles.button}>
        Delete
      </button>
    </main>
  );
}
