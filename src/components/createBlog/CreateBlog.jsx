
import Image from "next/image";
import styles from "./createBlog.module.css";
import { addPost } from "@/lib/action";

const CreateBlog = () => {



  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Post a Blog</h1>{" "}
      <p className={styles.p}>Share you're expirences with other travelers. </p>
      <form action={addPost} className={styles.form}>
        <Image
          src="/noavatar.png"
          className={styles.avatar}
          alt=""
          width={50}
          height={50}
        />
        <input type="text"
          placeholder="Title of blog. "
          name="title"
          className={styles.input} 
          required
          />
        <textarea
          type="text"
          placeholder="Tell us all about it. "
          name="bio"
          className={styles.textarea}
          required
        ></textarea>
        <label for="file-upload" className={styles.customfileupload}>
          Upload Images
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image"
          name="image"
          className={styles.fileInput}
          required
        />
        <button className={styles.button} >Send</button>
      </form>
    </div>
  );
};

export default CreateBlog;
