

import Image from "next/image";
import styles from "./page.module.css";
import { Nunito, Playfair, RomanaBt } from "next/font/google";
import ActivityList from "@/components/activityList/activityList";
import Link from "next/link";



const nunito = Nunito({ subsets: ["latin"] })
const playFair = Playfair({ subsets: ["latin"] })



export default function Home() {

  "use client "
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>Mountain | Plains | Beaches</h2>
          <h1 className={`${styles.title} ${playFair.className}`} >Spend your vacations with our activities & places.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt iure inventore doloribus perferendis totam. Nemo odit quasi hic porro laudantium pariatur veritatis molestias earum consequuntur sit, ullam ducimus, harum, aspernatur ut perspiciatis natus repellendus odio placeat ipsum. Tenetur, earum? Omnis!</p>
          <div className={styles.buttons}>
            <Link className={styles.button} href="/contact">Contact Us </Link>
          </div>
          <div className={styles.activityContainer}>
            <ActivityList/>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/water.png" alt="" className={styles.waterImg} fill />
          <Image src="/Boat.png" alt="" className={styles.waterImg2} fill />
        </div>
      </div>
    </div>
  );
}
