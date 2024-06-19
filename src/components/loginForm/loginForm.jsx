import styles from "./loginForm.module.css"
const loginForm = () => {
    return (
        <form action="" className={styles.form}>
            <input type="text" placeholder='Username' name="username" className={styles.input}/>
            <input type="password" placeholder='Password' name="password" className={styles.input}/>
            <button >Log In</button>
        </form>
    )
}

export default loginForm
