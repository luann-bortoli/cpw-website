import s from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={s.footerContainer}>
                <div className={s.footerWrapper}>

                    <img src="logo.png" alt="" />

                    <hr />

                    <p>
                        This is a fan-made non-profit revival of the original Facebook game by Digital Chocolate.
                        We're not affiliated to Digital Chocolate or Rockyou in any way.
                    </p>

                </div>
            </div>
        </>
    )
}