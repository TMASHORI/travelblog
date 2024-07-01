import styles from "./placesList.module.css";
import Image from "next/image";

const placesList = ({ data, query }) => {
  return (
    <>
      <ul className={styles.list}>
        {data.map((place, i) => {
          return (
            <li className={styles.listItem} key={i}>
              <div className={styles.imgContainer}>
                <Image
                  src={place.img}
                  alt=""
                  width={390}
                  height={390}
                  className={styles.img}
                />
              </div>
              <div className={styles.infomationContainer}>
                <div className={styles.locationDetails}>
                  <h3 className={styles.title}>{place.title}</h3>
                  <div className={styles.locationBox}>
                    <Image
                      src="/pin.png"
                      alt=""
                      width={30}
                      height={30}
                      unoptimized
                    />
                    <h1 className={styles.locationName}>{place.location}</h1>
                  </div>
                  <p className={styles.desc}>{place.desc}</p>
                  <h2 className={styles.price}>R {place.price} / p</h2>
                  <div className={styles.bedRoomBox}>
                    <Image
                      src="/bedroom2.png"
                      alt=""
                      width={30}
                      height={30}
                      unoptimized
                    />
                    <h2 className={styles.bedrooms}>{place.bedrooms}</h2>
                  </div>
                  <button className={styles.button}>Contact Agent</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default placesList;
