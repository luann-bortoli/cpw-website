import s from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={s.footerContainer}>
                <div className={s.footerWrapper}>

                    <img src="logo.png" alt="" />

                    <div className={s.footerList}>
                        <p className={s.footerListTitle}>Sections</p>
                        <ul>
                            <li><a href="">Features</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Play</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>

                    <div className={s.footerList}>
                        <p className={s.footerListTitle}>Social</p>
                        <ul>
                            <li><a href="">Discord</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}