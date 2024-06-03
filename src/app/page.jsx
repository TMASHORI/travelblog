"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Nunito, Playfair } from "next/font/google";

import { DotLottieReact as LottiePlayer } from '@lottiefiles/dotlottie-react';


const nunito = Nunito({ subsets: ["latin"] })
const playFair = Playfair({ subsets: ["latin"] })
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>Mountain|Plains|Beaches</h2>
          <h1 className={styles.title} >Spend your vacations with our activities & places.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt iure inventore doloribus perferendis totam. Nemo odit quasi hic porro laudantium pariatur veritatis molestias earum consequuntur sit, ullam ducimus, harum, aspernatur ut perspiciatis natus repellendus odio placeat ipsum. Tenetur, earum? Omnis!</p>
          <div className={styles.buttons}>
            <button className={styles.button}>Contact Us </button>
            <button className={styles.button}>Book Agent </button>
          </div>
          <div className={styles.activityContainer}>
            <h3>Activity List</h3>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/water.png" alt="" className={styles.waterImg} fill />
        </div>
      </div>
    </div>
  );
}
