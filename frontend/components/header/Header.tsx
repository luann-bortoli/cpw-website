import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <div className={styles.contentWrapper}>
                <div className={styles.mainContainer}>

                    <div className={styles.leftWrapper}>
                        <a href="#home"><img src="logo.png" alt="" className={styles.logo} /></a>

                        <ul>
                            <li><a href="#features" className={styles.navLink}>Features</a></li>
                            <li><a href="#gallery" className={styles.navLink}>Gallery</a></li>
                            <li><a href="#play" className={styles.navLink}>Play</a></li>
                            <li><a href="#faq" className={styles.navLink}>FAQ</a></li>
                        </ul>
                    </div>

                    <div className={styles.socialContainer}>
                        <a href="https://discord.com/invite/PxxhzcbemQ" target='_blank'><img src="discord.svg" alt="" /></a>
                    </div>

                </div>
            </div>
        </>
    )
}