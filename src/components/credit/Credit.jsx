import c from "./Credit.module.css"
import technique from "../../dummiy-data.telehone.json"
import { Link } from "react-router-dom"
import { t } from "i18next"

const Credit = () => {
    return (
        <div className={c.credit}>
            <div className={c.container}>
                <div className={c.credit__wrapper}>
                    <h2 className={c.credit__heading}>{t("techniqiu")}</h2>

                    <ul className={c.credit__list}>
                        {
                            technique.map(newCreditTechniqui => 
                                <li className={c.credit__item}>
                                   <Link className={c.credit__link}>
                                       <img className={c.credit__img} src={newCreditTechniqui.telefon} alt="" />
                                        <h4 className={c.credit__title}>{newCreditTechniqui.title}</h4>
                                        <p className={c.credit__desc}>{newCreditTechniqui.subtitle}</p>
                                   </Link>
                                </li>    
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Credit