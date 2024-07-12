import Image from "next/image"
import styles from "./singleuser.module.css"
import { useState } from "react"


const SingleUser = ({user,index}) => {

    const [viewUser,setViewUser] = useState(false)

    return (
        <>
            <div className={styles.wrapper} >
                <div className={styles.top}>
                    <div className={styles.avatar}>
                        <Image className={styles.avatarImg} src={user.img} alt="" width={50} height={50} />
                    </div>
                    <h3 className={styles.username}>{user.username}</h3>
                    <button className={styles.viewButton} onClick={()=>{setViewUser(!viewUser)}}>View User</button>
                    <button className={styles.editButton}>Edit</button>
                    <button className={styles.deleteButton}>Delete</button>
                </div >
                {viewUser && <div className={styles.bottom}>
                    <div className={styles.details}>
                        <h3 className={styles.detailInfo}>User ID: {index} </h3>
                    </div>
                    <div className={styles.details}>
                    <h3 className={styles.detailInfo}> Username: {user.username}</h3>
                    </div>
                    <div className={styles.details}>
                    <h3 className={styles.detailInfo}> Email: {user.email}</h3>
                    </div>
                    <div className={styles.details}>
                    <h3 className={styles.detailInfo}> Number of posts: 0</h3>
                    </div>
                    <div className={styles.details}>
                    <h3 className={styles.detailInfo}> Admin : {user.admin ? "Yes" : "No"}</h3>
                    </div>

                </div>}
            </div>
        </>
    )
}

export default SingleUser
