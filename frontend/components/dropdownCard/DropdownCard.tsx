'use client'

import { useState } from 'react'
import s from './DropdownCard.module.css'

type DdCardProps = {
    title: string,
    desc : string
}

export default function DropdownCard({title, desc} : DdCardProps){

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div  onClick={() => setIsActive(!isActive)} className={s.cardContainer}>

            <div className={s.titleWrapper}>

              <button><img src={isActive ? "arrow-down.svg" : "arrow-right.svg"}/></button>
              <p className={s.cardTitle}>{title}</p>

            </div>

            {isActive && <p className={s.cardDesc}>{desc}</p>}

          </div>
        </>
    )
}