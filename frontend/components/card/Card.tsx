import s from './Card.module.css'

type CardProps = {
    imgPath: string,
    title?: string,
    desc?: string,
}

export default function Card({imgPath, title, desc}: CardProps ){
    return (
        <>
            <div className={s.cardContainer}>
            <img src={imgPath} alt="" />

            {title ? 
            <>
              <p className={s.cardTitle}>{title}</p>
              <p className={s.cardDesc}>{desc}</p>
            </>
            : null
            }
            
          </div>
        </>
    )
}