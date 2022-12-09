import { useState } from "react"
import c from "./Headertop.module.css"
import { GrLocation } from "react-icons/gr"
import links from "../../dummiy-links.json"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { v4 as uuidv4 } from 'uuid';
import { changeLanguage } from "i18next"


const HeaderTop = () => {
    const { t } = useTranslation()
    const [selectOptionLang, setSelectOptionLang] = useState("")
    const { i18n } = useTranslation()
    const changeWebSideLan = (e) => {
        i18n.changeLanguage(e.target.value || "uz")
    }
    return (
        <div className={c.HeaderTop}>
           <div className={c.container}>
            <div className={c.HeaderTop__wrapper}>
                    <GrLocation className={c.location__icon}/>
                    <p className={c.HeaderTop__text}>{t("Regions")}</p>
                </div>
                <ul className={c.headerTop__list}>
                    {
                        links.map(newLi => 
                            <li key={uuidv4()} className={c.headerTop__item}>
                                <Link className={c.headerTop__link}>{newLi.link}</Link>
                            </li>    
                        )
                    }
                </ul>
                   <Link className={c.headerTop__num}>
                    <p className={c.aloqa__text}>{t("call__center")}:</p>
                        <strong className={c.aloqa__num}>+99871 209 99 44</strong>
                   </Link>
                <select onChange={changeWebSideLan} className={c.headerTop__select}>
                    <option value="uz">O'Z</option>
                    <option value="ru">RU</option>
                </select>
           </div>
        </div>
    )
}

export default HeaderTop