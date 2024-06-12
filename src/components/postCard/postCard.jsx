import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {

    "use client"
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/Boat.png" alt=""  className={styles.img} fill/>
                </div>
                {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
                <span className={styles.date}>01.01.2010</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ipsum fugiat nihil at, minus maxime ratione dolor velit animi molestias eum eius vero quibusdam, veniam laborum in sit, modi impedit.</p>
                <Link className={styles.link} href={`/blog/`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard