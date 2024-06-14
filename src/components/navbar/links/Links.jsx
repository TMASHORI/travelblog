"use client"

import styles from './links.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Blogs",
        path: "/blog"
    },
    {
        name: "Admin",
        path: "/admin"
    },
    {
        name: "Login",
        path: "/login"
    },
]

const LinksComponent = () => {
   
   const pathname = usePathname();

    return (

        <div className={styles.container}>
            {
                links.map((link) => {
                    return (
                        <div key={link.name} className={styles.container}>
                            <Link href={link.path} className={`${styles.link} ${pathname === link.path && styles.active}`}>{link.name}</Link>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default LinksComponent