import "./Cart.css"
import { useState } from "react"
import { FiX } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const Cart = ({isCartActive, setIsCartActive}) => {
    const { t } = useTranslation()
    const [isCartEnter, setIsCartEnter] = useState(false)
    return (
       <>
         <div className={isCartActive === true ? "cart cartactive" : "cart"}>
            <div className="cart__wrapper">
               <div className="cart__list">
                    <h2 className="cart__heading">{t("buy__now")}</h2>
                    <FiX className="cart__icon" onClick={() => {setIsCartActive(false)}}/>
               </div>
            </div>
        </div>
       </>
    )
}

export default Cart