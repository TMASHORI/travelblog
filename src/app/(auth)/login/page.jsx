import Image from "next/image"
import styles from "./login.module.css"
import LoginForm from "@/components/loginForm/loginForm"

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.p}>You can use social accounts or credentials below.
        </p>
        <form >
          <button className={styles.github}><Image src="/github.png" alt="" width={30} height={30}/></button>
        </form>
        <form >
          <button className={styles.google}><Image src="/google.png" alt=""  width={30} height={30}/></button>
        </form>
        <p className={styles.p}>OR</p>
        <LoginForm />
      </div>
    </div>
  )
}

export default page