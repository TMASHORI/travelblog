import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  

  return (
    <div className={styles.container}>
      <div>
        <h1>We Love hearing from you.</h1>
        <p>Send us a message ,well get back to you.</p>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
