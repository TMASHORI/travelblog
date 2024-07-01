"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import LinksComponent from "@/components/Navbar/links/Links";
import Image from "next/image";
import { useState } from "react";

const navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link
          className={styles.Logo}
          href="/"
          onClick={() => {
            setOpen(false);
          }}
        >
          TravelMania.
        </Link>
      </div>
      <div className={`${styles.linksContainer} ${open && styles.active}`}>
        <LinksComponent open={open} setOpen={setOpen} />
      </div>
      <Image
        src={`${open ? "/close.png" : "/menu.png"}`}
        alt=""
        width={30}
        height={30}
        className={styles.img}
        onClick={() => {
          setOpen(!open);
        }}
        unoptimized
      />
    </div>
  );
};

export default navbar;
