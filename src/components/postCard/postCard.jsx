import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {

    "use client"
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/Boat.png" alt=""  className={styles.img} fill unoptimized/>
                </div>
                {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
                <span className={styles.date}>01.01.2010</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.userId}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard