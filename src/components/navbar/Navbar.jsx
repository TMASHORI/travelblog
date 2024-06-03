import Link from "next/link"
import styles from "./navbar.module.css"
import LinksComponent from "@/components/Navbar/links/Links"


const navbar =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link className={styles.Logo} href="/">TravelMania.</Link>
      </div>
      <LinksComponent/>
      
    </div>
  )
}

export default navbar
