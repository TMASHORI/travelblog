import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";


const SinglePostPage = async ({params}) => {
  
  return (
    <div className={styles.container}>
      
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt="" fill className={styles.img} />
        </div>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          
    <div className={styles.postUserContainer}>
      <Image
        className={styles.avatar}
        src="/noavatar.png"
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.postUserTitle}>Author</span>
        <span className={styles.username}>Thato</span>
      </div>
    </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              10/10/10
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste, excepturi consectetur sed labore numquam laudantium eos iure rem commodi.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
