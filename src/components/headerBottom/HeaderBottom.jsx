import c from "./HeaderBottom.module.css"
import { GrCatalog } from "react-icons/gr"
import { Link } from "react-router-dom"
import { SlEnergy } from "react-icons/sl"
import headerBottomLinks from "../../dimmiy-data-header.json"
import { useTranslation } from "react-i18next"
import { v4 as uuidv4 } from 'uuid';

const HeaderBottom = () => {
    const { t } = useTranslation()
    return (
        <div className={c.header__bottom}>
            <div className={c.container}>
                <div className={c.header__wrapper}>
                    <button className={c.header__bottomBtn}>
                        <GrCatalog/>
                        {t("catalog")}
                    </button>
                    <Link className={c.header__links}>
                        <SlEnergy/>
                        <strong>SARIQ HAFTA</strong>
                    </Link>
                </div>
                {
                    headerBottomLinks.map(newLinks => 
                        <div key={uuidv4()} className={c.headerBottom__categoriesWrapper}>
                            <Link className={c.headerBottom__categories}>{newLinks.header__bottomLinks}</Link>
                        </div>    
                    )
                }
            </div>  
        </div>
    )
}

export default HeaderBottom