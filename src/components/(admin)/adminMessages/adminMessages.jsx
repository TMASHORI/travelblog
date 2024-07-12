import Image from "next/image"
import styles from "./adminmessages.module.css"
import { useState } from "react"


const data = [{
    userId: 1,
    username: "Thato Mashori",
    heading: "Heading from user",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, culpa dicta. Possimus numquam eius reprehenderit eaque expedita sit, ducimus mollitia repudiandae voluptatem, corrupti neque! Magni aliquid aperiam mollitia hic quibusdam?"
}]

const AdminMessages = () => {

    const [viewMessage, setViewMessage] = useState(false)

    return (
        <div className={styles.container}>
            {data.map((user, i) => {
                return (
                    <div className={styles.wrapper} key={i}>
                        <div className={styles.top}>
                            <div className={styles.avatar}>
                                <Image className={styles.avatarImg} src={user.img ? user.img : "/noavatar.png"} alt="" width={50} height={50} />
                            </div>
                            <h3 className={styles.heading}>{user.heading.slice(0,20)} ..</h3>
                            <button className={styles.editButton} onClick={() => { setViewMessage(!viewMessage) }}>{viewMessage? <>Close</> : <>Read</>}</button>
                            <button className={styles.deleteButton}>Delete</button>
                        </div >
                        {viewMessage && <div className={styles.bottom}>
                            <div className={styles.details}>
                                <h4 className={styles.detailInfo}>ID : {i}</h4>
                                <p className={styles.detailInfo}>USERNAME : {user.username} </p>
                                <p className={styles.detailMessage}>{user.message} </p>
                                <fieldset className={styles.fieldset}>
                                    <form action="" className={styles.form}>
                                        <textarea type="text" id="resopnse" rows={10} className={styles.textarea} resize="none" placeholder="Respond to user here. " name="respond"></textarea>
                                        <button className={styles.viewButton} >Respond</button>
                                    </form>
                                </fieldset>
                            </div>
                        </div>}
                    </div>
                )
            })}

        </div>
    )
}

export default AdminMessages;
