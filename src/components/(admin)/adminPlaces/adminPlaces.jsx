import Image from "next/image"
import styles from "./adminPlaces.module.css"
import { places } from "@/lib/data"


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

const AdminPlaces = () => {

  "use client"

  return (
    <div className={styles.container}>
      {places.map((place) => {
        return (
          <div className={styles.wrapper} key={place.id}>

            <Image src={place.img} width={200} height={200} alt="" unoptimized/>
            <h1 className={styles.title}>{place.title}</h1>
            <p className={styles.date}>01.01.2010</p>
            <p className={styles.desc}>{place.desc}</p>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        )
      })}

    </div>
  )
}

export default AdminPlaces
