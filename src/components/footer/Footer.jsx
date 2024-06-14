import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>TravelMania.</div>
            <div className={styles.text}>
                Travel agency © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
