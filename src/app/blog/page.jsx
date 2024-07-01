import CreateBlog from "@/components/createBlog/CreateBlog";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { posts } from "@/lib/data";

const page = () => {
  "use client";



  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        {posts.map((post)=>{
          return(

            <PostCard post={post} key={post.id}/>
          ) 
        })}
        
      </div>
      <div className={styles.box2}>
        <CreateBlog />
      </div>
    </div>
  );
};

export default page;
