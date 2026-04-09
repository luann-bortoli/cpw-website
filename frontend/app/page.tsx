import Card from "@/components/card/Card";
import styles from "./page.module.css";
import DropdownCard from "@/components/dropdownCard/DropdownCard";

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

  const faqCard = [
    {
      id: 1,
      title: "What is this project?",
      desc: "Crazy Penguin Wars was a Facebook game. It shut down in 2015. Now, 10 years later, the goal of our project is to revive this awesome game!"
    },
    {
      id: 2,
      title: "Is Crazy Penguin Wars fully revived?",
      desc: "Not yet. We're still working hard on it! At this moment you can only play a small demo, with only the offline practice mode being available. We hope to bring back multiplayer soon!"
    },
    {
      id: 3,
      title: "Can I still play it in the browser?",
      desc: "No, because of the discontinuation of Adobe Flash Player, you have to download the game in order to play it. Check out the download link above!"
    },
    {
      id: 4,
      title: "Can I contribute to the project?",
      desc: "Yes, definitely! In the first place we're looking for new developers that want to help rebuild the game server. However if coding is not your thing: we're also looking for, for example, Map Editors. Feel free to contact us in the Discord server!"
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

        <div className={styles.bottomContainer}>
          <div className={styles.titleWrapper}>
            <img src="favicon.ico" alt="" />
            <p className={styles.title}>Crazy Penguin Wars Revival</p>
          </div>

          <p className={styles.desc}>—</p>

          <p className={styles.desc}>The legendary penguin shooter is back with classic chaos, new updates, and multiplayer battles</p>
        </div>
      </div>

      <div className={styles.featuresContainer}>

        <p className={styles.sectionTitle}>Game Features</p>

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

      <div className={styles.faqContainer} id="faq">
        <div className={styles.containerTitle}>
          <p>FAQ</p>
        </div>

        <div className={styles.rowWrapper}>
          <div className={styles.faqGrid}>

          {faqCard.map((card) => {
            return(
              <DropdownCard 
                key={card.id}
                title={card.title}
                desc={card.desc}
              />
            )
          })}

        </div>

        <div className={styles.faqBanner}>
          <img src="money.png" alt="" />
        </div>
        </div>

      </div>

    </>
  );
}
