import CreateBlog from "@/components/createBlog/CreateBlog"
import styles from "./blog.module.css"

const page = () => {

  "use client"

  return (
    <div className={styles.container}>

      <div className={styles.box1}>
      </div>
      <div className={styles.box2}>

      <CreateBlog /> 
      </div>
      
    </div>
  )
}

export default page
