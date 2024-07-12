"use client";

import { useState } from "react";
import styles from "./adminUserForm.module.css";
import Image from "next/image";

const AdminUserForm = () => {

  const [viewPassword, setViewPassword] = useState(false)

  return (
    <form action="" className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" required />
      <input type="text" name="email" placeholder="email" required />
      <input type={viewPassword? "password" : "text"} name="password" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  required />
      <Image src={viewPassword? "/eye.png":"/hidden.png"  } alt="" className={styles.avatar} width={10} height={10} onClick={()=>setViewPassword(!viewPassword)}/>
      <input
        id="file-upload"
        type="file"
        accept="image"
        name="img"
        className={styles.fileInput}
        required
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Are you an Admin ? </legend>
        <label for="personal-account"
          className={styles.label}><input id="personal-account"
            type="radio"
            name="accountType"
            class="inline"
            checked
            value="Yes" /> No (default) </label>
        <label for="business-account" className={styles.label}>
          <input id="business-account"
            type="radio" name="accountType"
            class="inline" value="No" /> Yes</label>
      </fieldset>
      <button>Add</button>
    </form>
  );
};

export default AdminUserForm;
