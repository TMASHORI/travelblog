import Image from "next/image"
import styles from "./createBlog.module.css"



const CreateBlog = () => {
"use client"

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Post a  Blog</h1>
            <p className={styles.p}>Share you're expirences with other travelers. </p>

            <form action="" className={styles.form}>
                <Image src="/noavatar.png" className={styles.avatar} alt="" width={50} height={50} />
                <textarea type="text"  placeholder='Tell us all about it. ' name="BloggerText" className={styles.textarea}></textarea>


                <label for="file-upload" className={styles.customfileupload}>
                    Upload Images
                </label>
                <input id="file-upload" type="file" accept="image" className={styles.fileInput} />
                <button className={styles.button}>Send</button>
            </form>
        </div>
    )
}

export default CreateBlog

