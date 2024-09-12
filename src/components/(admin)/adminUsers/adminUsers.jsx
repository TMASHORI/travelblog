"use client"

import Image from "next/image"
import styles from "./adminUsers.module.css"
import { useState } from "react"
import SingleUser from "../singleUser/SingleUser"



const data = [{
  username: "Thato Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png",
  admin:true,
}, {
  
  username: "Masego Mashori",
  email: "Masegomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png",
  admin:false,
}, {
  username: "Nkosi Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png",admin:false
},
{
  username: "Joel Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypassword",
  img: "/noavatar.png",admin:false
  
},
{
  username: "Nandi Mashori",
  email: "Thatomashori@gmail.com",
  password: "Dummypasswsord",
  img: "/noavatar.png",admin:false
},
]


const AdminUsers = () => {


  return (
    <div className={styles.container}>
      {data.map((user, i) => {
        return (
          <SingleUser user={user} index={i} key={i}/>
        )
      })}

    </div>
  )
}

export default AdminUsers
