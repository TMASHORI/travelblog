import CreateBlog from "@/components/createBlog/CreateBlog"
import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"

const page = () => {

  "use client"

  return (
    <div className={styles.container}>

      <div className={styles.box1}>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
      <div className={styles.box2}>

      <CreateBlog /> 
      </div>
      
    </div>
  )
}

export default page
