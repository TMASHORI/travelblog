import Image from "next/image"
import styles from "./adminPosts.module.css"


const data = [{
  username: "Masego Mashori",
  title: "lorem lorem lorem",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
}, {
  username: "Masego Mashori",
  title: "lorem lorem lorem",

  email: "Masegomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
}, {
  username: "Nkosi Mashori",
  title: "lorem lorem lorem",

  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
},

]

const AdminPosts = () => {

  "use client"

  return (
    <div className={styles.container}>
      {data.map((user, i) => {
        return (
          <div className={styles.wrapper} key={i}>

            <Image src="/noavatar.png" alt="" width={200} height={200} unoptimized/>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.date}>01.01.2010</p>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ipsum fugiat nihil at, minus maxime ratione dolor velit animi molestias eum eius vero quibusdam, veniam laborum in sit, modi impedit.</p>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        )
      })}

    </div>
  )
}

export default AdminPosts
