import Image from "next/image";
import styles from "./explore.module.css";

const data = [
  {
    title: "The White Houses",
    img: "https://images.pexels.com/photos/4552408/pexels-photo-4552408.jpeg?auto=compress&cs=tinysrgb&w=400",
    location: "Worsecter , Western Cape",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.consequuntur deserunt voluptatem magni non autem commodi accusantium voluptas officiis incidunt quibusdam.",
    price: "12 000",
    bedrooms: "N/A",
  },
  {
    title: "The Bike Hub",
    img: "https://images.pexels.com/photos/20628275/pexels-photo-20628275/free-photo-of-city-road-people-street.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Cape Town , Western Cape",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.consequuntur deserunt voluptatem magni non autem commodi accusantium voluptas officiis incidunt quibusdam.",
    price: 1800,
    bedrooms: "N/A",
  },
  {
    title: "The Cliffs",
    img: "https://images.pexels.com/photos/5501922/pexels-photo-5501922.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Enburg,Western Cape",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.consequuntur deserunt voluptatem magni non autem commodi accusantium voluptas officiis incidunt quibusdam.",
    price: 250,
    bedrooms: "N/A",
  },
  {
    title: "The Winyard",
    img: "/noavatar.png",
    location: "Worsecter,Western Cape",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.consequuntur deserunt voluptatem magni non autem commodi accusantium voluptas officiis incidunt quibusdam.",
    price: 1200,
    bedrooms: "2 Bedrooms",
  },
  {
    title: "The Winyard",
    img: "/noavatar.png",
    location: "Worsecter,Western Cape",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.consequuntur deserunt voluptatem magni non autem commodi accusantium voluptas officiis incidunt quibusdam.",
    price: 1200,
    bedrooms: 2,
  },
];

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBarBox}>
        <input
          type="text"
          placeholder="Search by Title or Location ..."
          className={styles.search}
        />
        <div className={styles.sortByBox}>
          <label for="sorting" className={styles.label}>Sort By:</label>

          <select className={styles.select} name="sorting" >
            <option className={styles.option}>Title</option>
            <option className={styles.option}>Location</option>
            <option className={styles.option}>Price</option>
            <option className={styles.option}>Bedrooms</option>
          </select>
        </div>
      </div>
      <div className={styles.resultBox}>
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
                      <h2 className={styles.bedrooms}>
                        {place.bedrooms}
                      </h2>
                    </div>
                <button className={styles.button}>Book Now</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default page;
