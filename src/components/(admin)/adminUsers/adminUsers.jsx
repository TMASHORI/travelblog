import Image from "next/image"
import styles from "./adminUsers.module.css"



const data = [{
  username: "Thato Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
}, {
  username: "Masego Mashori",
  email: "Masegomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
}, {
  username: "Nkosi Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
},
{
  username: "Joel Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
},
{
  username: "Nandi Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png"
},
]


const AdminUsers = () => {
  return (
    <div className={styles.container}>
      {data.map((user, i) => {
        return (<div className={styles.wrapper} key={i}>
          <div className={styles.avatar}>
            <Image className={styles.avatarImg} src={user.img} alt="" width={50} height={50} />
          </div>
          <h3 className={styles.username}>{user.username}</h3>
          <button className={styles.editButton}>Edit</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
        )
      })}

    </div>
  )
}

export default AdminUsers
