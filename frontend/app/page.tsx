import Card from "@/components/card/Card";
import styles from "./page.module.css";

export default function Home() {

  const featureCard = 
  [
    {
    id: 1,
    imgPath: "weapon.png",
    title:"Wacky Weapons",
    desc: "Choose from bazookas, grenades, water balloons, and more."
  },
  {
    id: 2,
    imgPath: "battle.png",
    title:"Multiplayer Battles",
    desc: "Challenge your friends and join global penguin tournaments."
  },
  {
    id: 3,
    imgPath: "customize.png",
    title:"Customize Your Penguin",
    desc: "Unlock outfits, accessories, and unique styles."
  }
 ]

  const galleryCard = [
    {
      id: 1,
      imgPath: "gallery1.png"
    },
    {
      id: 2,
      imgPath: "gallery2.png"
    },
    {
      id: 3,
      imgPath: "gallery3.png"
    }
  ]

  return (
    <>
      <div className={styles.heroContainer}>

        <div className={styles.mainCard}>
          <a href="#play">
            PLAY
            <img src="arrow-down.svg" alt="" />
          </a>
        </div>

        <div className={styles.cardGrid} id="features" >

          {featureCard.map((card) => {
            return (
            <Card
              key={card.id}
              imgPath={card.imgPath}
              title={card.title}
              desc={card.desc}
            />
            )
          })}

        </div>
      </div>

      <div className={styles.galleryContainer} id="gallery" >

        <p className={styles.sectionTitle}>Gallery</p>

        <div className={styles.cardGrid}>

         {galleryCard.map((card) => {
          return(
            <Card
            key={card.id} 
            imgPath={card.imgPath}
            />
          )
         })}

        </div>

      </div>

      <div className={styles.playContainer} id="play" >

        <p className={styles.sectionTitle}>Play</p>

        <p className={styles.sectionDesc}>Ready to dive into the icy battlefield? Click below to download the demo version.</p>

        <a download href="https://github.com/Crazy-Penguin-Wars/cpw-launcher/releases/download/1.0.0/Crazy.Penguin.Wars.1_0_0.zip">
          Downlaod for Windowns
          <img src="download.svg" alt="" />
        </a>

        <div className={styles.cardContainer}>
          <video src="trailer.mp4" controls></video>
        </div>
        
      </div>

      <div className={styles.faqContainer}>
        <div className={styles.containerTitle}>
          <p>FAQ</p>
        </div>
        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <div className={styles.titleContainer}>

              <img src="arrow-right-rounded.svg" alt="" />

              <p className={styles.faqTitle}>
                What is this project?
              </p>

            </div>
            <div className={styles.faqDesc}>
              Crazy Penguin Wars was a Facebook game. It shut down in 2015. Now, 10 years later, the goal of our project is to revive this awesome game!
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
