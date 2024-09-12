"use client"
import { useState } from "react"
import styles from "./loginForm.module.css"
import Image from "next/image"


const Form = () => {

    const [viewPassword, setViewPassword] = useState(false)

    return (
        <form action="" className={styles.form}>
            <input type="text" placeholder='Username' name="username" className={styles.input} />
            <input type={viewPassword? "password" : "text"} name="password" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  required />
            <Image src={viewPassword ? "/eye.png" : "/hidden.png"} alt="" className={styles.avatar} width={20} height={20} onClick={() => setViewPassword(!viewPassword)} unoptimized/>          
            <button >Log In</button>
        </form>
    )
}

export default Form
