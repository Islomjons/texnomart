import { Link } from "react-router-dom"
import c from "./Header.module.css"
import texnomartImg from "../../assets/images/texnomart.svg"
import { GoSearch } from "react-icons/go"
import { BsBoxSeam } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const Header = () => {
    const { t } = useTranslation()
    return (
        <div className={c.header}>
            <div className={c.conatiner}>
                <div className={c.header__wrapper}>
                    <Link to="/">
                        <img className={c.header__img} src={texnomartImg} alt="" />
                    </Link>
                </div>
                <div className={c.header__selectWrapper}>
                    <select>
                        <option value="barcha kategoriyalar">{t("All__category")}</option>
                        <option value="ofis jihozlari">{t("jevelry__office")}</option>
                        <option value="uy uchun idishlar">{t("jevelry__home")}</option>
                    </select>
                    <input className={c.header__input} type="text" />
                    <button className={c.header__btn}>
                        <GoSearch/>
                    </button>
                </div>

                <Link className={c.buyutma__wrapper}>
                    <BsBoxSeam className={c.box}/>
                    <strong>{t("order__status")}</strong>
                </Link>
                <Link className={c.buyutma__wrapper}>
                    <BsPerson className={c.box}/>
                    <strong>{t("enter")}</strong>
                </Link>
                <Link className={c.buyutma__wrapper}>
                    <GrCompare className={c.box}/>
                    <strong>{t("compare")}</strong>
                </Link>
                <Link className={c.buyutma__wrapper}>
                    <AiOutlineHeart className={c.box}/>
                    <strong>{t("like")}</strong>
                </Link>
                <Link className={c.buyutma__wrapper}>
                    <FiShoppingCart className={c.box}/>
                    <strong>{t("cart")}</strong>
                </Link>
            </div>
        </div>
    )
}

export default Header