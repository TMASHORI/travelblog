"use client";

import styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blogs",
    path: "/blog",
  },
];

const LinksComponent = ({ open, setOpen }) => {
  const [session, setSession] = useState(false);
  const pathname = usePathname();

  const isAdmin = true;
  // const session = true;

  return (
    <div className={styles.container}>
      <Link
        href="/explore"
        className={`${styles.explore} ${pathname === "/explore" && styles.active}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        Explore Places
      </Link>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.path}
            className={`${styles.link} ${
              pathname === link.path && styles.active
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {link.name}
          </Link>
        );
      })}
      {session && isAdmin && (
        <Link
          href="/admin"
          className={styles.link}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Admin
        </Link>
      )}
      {session ? (
        <Link
          href="/"
          className={styles.logOut}
          onClick={() => {
            setSession(false);
            setOpen(!open);
          }}
        >
          Log out
        </Link>
      ) : (
        <Link
          href="/login"
          className={styles.logIn}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Log in
        </Link>
      )}
    </div>
  );
};

export default LinksComponent;
