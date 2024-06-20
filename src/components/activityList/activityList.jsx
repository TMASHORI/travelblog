import Image from "next/image"
import styles from "./activityList.module.css"

const boxes = [{
  img: "https://images.pexels.com/photos/13862436/pexels-photo-13862436.png?auto=compress&cs=tinysrgb&w=600",
  title: "Beach Walking",
  desc:"Walks on the beach with friends."

},
{
  img: "https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=600",
  title: "Surfing",
  desc:"Splash the waves with your board."

},
{
  img: "https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg?auto=compress&cs=tinysrgb&w=600",
  title: "Kayaking",
  desc:"Enjoy the scenery with kayaking ."

},
]

const ActivityList = () => {

  "use client "
  
  return (
    <div className={styles.container}>
      {boxes.map((box, i) => {
        return <div className={styles.singleBox} key={box.i}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image src={box.img} alt="" className={styles.img} fill />
            </div>
          </div>
          <div className={styles.bottom}>
            <h1 className={styles.title}>{box.title}</h1>
            <p className={styles.desc}>{box.desc}</p>
          </div>
        </div>

      })}
    </div>

  )
}

export default ActivityList