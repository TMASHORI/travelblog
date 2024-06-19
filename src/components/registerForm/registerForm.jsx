import styles from "./registerForm.module.css"
const registerForm = () => {
    return (

        <form action="" className={styles.form}>
            <input type="text" placeholder='username' name="username" className={styles.input} />
            <input type="email" placeholder='email' name="email" className={styles.input} />
            <input type="password" placeholder='password' name="password" className={styles.input} />
            <input type="password" placeholder="Repeat password" name="passwordRepeat" />
            <button >Sign up</button>
        </form>

    )
}

export default registerForm
