import AdminUsers from "@/components/(admin)/adminUsers/adminUsers"
import styles from "./admin.module.css"
import AdminPosts from "@/components/(admin)/adminPosts/adminPosts"
import AdminPlaces from "@/components/(admin)/adminPlaces/adminPlaces"
import AdminUserForm from "@/components/(admin)/adminUserForm/adminUserForm"
import AdminPostForm from "@/components/(admin)/adminPostForm/adminPostForm"
import AdminPlacesForm from "@/components/(admin)/adminPlacesForm/adminPlacesForm"

const page = () => {

    "use client"
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Users</h1>
                <div className={styles.Users}>
                    <AdminUsers />
                    <AdminUserForm />
                </div>
            </div>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Blogs</h1>
                <div className={styles.Blogs}>
                    <AdminPosts />
                    <AdminPostForm />
                </div>
            </div>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Places</h1>
                <div className={styles.Places}>
                    <AdminPlaces />
                    <AdminPlacesForm />
                </div>
            </div>

        </div>

    )
}

export default page
