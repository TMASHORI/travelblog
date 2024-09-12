import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We deliver expieriences that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus enim iure delectus quasi, tenetur nam atque nulla illo voluptatem perferendis quam fugiat ab earum, doloremque consequuntur ipsam. Obcaecati aperiam accusantium a tenetur! Repellat earum libero nam dicta eius est assumenda deleniti dolores voluptas inventore autem, iure velit, facilis consequatur.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>2 K+</h1>
            <p>Yearly Customers</p>
          </div>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Internation award</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="About Image"
          fill
          className={styles.img}
          unoptimized
        />
      </div>
    </div>
  );
};

export default AboutPage;
