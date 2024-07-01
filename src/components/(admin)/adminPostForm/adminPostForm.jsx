import styles from "./adminPostForm.module.css"

const AdminPostForm = () => {

    "use client"

    return (
        
            <form action="" className={styles.container}>
                <h1>Add New Post</h1>
                <input type="hidden" name="userId" value="" />
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="slug" placeholder="slug" />
                <input type="text" name="img" placeholder="img" />
                <textarea type="text" name="desc" placeholder="desc" rows={10} />
                <button>Add</button>
            </form>
        
    )
}

export default AdminPostForm
