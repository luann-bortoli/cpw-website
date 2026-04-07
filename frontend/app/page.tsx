import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heroContainer}>

        <div className={styles.mainCard}>
          <a href="#play">PLAY
            <img src="arrow-down.svg" alt="" />
          </a>
        </div>

        <div id="features" className={styles.cardGrid}>

          <div className={styles.cardContainer}>
            <img src="weapon.png" alt="" />
            <p className={styles.cardTitle}>
              Wacky Weapons
            </p>
            <p className={styles.cardDesc}>
              Choose from bazookas, grenades, water balloons, and more.
            </p>
          </div>

          <div className={styles.cardContainer}>
            <img src="battle.png" alt="" />
            <p className={styles.cardTitle}>
              Multiplayer Battles
            </p>
            <p className={styles.cardDesc}>
              Challenge your friends and join global penguin tournaments.
            </p>
          </div>

          <div className={styles.cardContainer}>
            <img src="customize.png" alt="" />
            <p className={styles.cardTitle}>
              Customize Your Penguin
            </p>
            <p className={styles.cardDesc}>
              Unlock outfits, accessories, and unique styles.
            </p>
          </div>

        </div>
      </div>

      <div id="gallery" className={styles.galleryContainer}>

        <div className={styles.sectionTitle}>
          Gallery
        </div>

        <div className={styles.cardGrid}>

          <div className={styles.cardContainer}>
            <img src="gallery1.png" alt="" />
          </div>

          <div className={styles.cardContainer}>
            <img src="gallery2.png" alt="" />
          </div>

          <div className={styles.cardContainer}>
            <img src="gallery3.png" alt="" />
          </div>

        </div>
      </div>

      <div id="play" className={styles.playContainer}>

        <p className={styles.sectionTitle}>
          Play
        </p>

        <p className={styles.sectionDesc}>
          Ready to dive into the icy battlefield? Click below to download the demo version.
        </p>

        <a href="#">Downlaod for Windowns <img src="download.svg" alt="" /></a>

        <div className={styles.cardContainer}>
          <video src="trailer.mp4" controls></video>
        </div>
      </div>

    </>
  );
}
