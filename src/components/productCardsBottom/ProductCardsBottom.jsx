import c from "./ProductCardsBottom.module.css"
import { useTranslation } from "react-i18next"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"

const ProductCardsBottom = () => {
    const { t } = useTranslation()
    const elProductsCardsBottom = useRef()
    const [productCardsBottom, setProductCardsBottom] = useState([])
    const [productsImgBottom, setProductsImgBottom] = useState(0)
    const swiperLeft = () => {
        if (productsImgBottom < 0) {
            setProductsImgBottom(productCardsBottom.length - 1)
        }else{
            setProductsImgBottom(0)
        }
    }

    const swiperRight = () => {
        if (productsImgBottom < productCardsBottom.length - 1) {
            setProductsImgBottom(productsImgBottom + 1)
        }else{
            setProductsImgBottom(0)
        }
    }
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductCardsBottom(data.slice(20, 30)))
    }, [])

    useEffect(() => {
        elProductsCardsBottom.current.scrollLeft = productsImgBottom * 100
    }, [productsImgBottom])
    return (
        <div className={c.produc__сards__bottom}>
            <h2 className={c.produc__сards__bottom__heading}>{t("popular__product")}</h2>
            <button className={c.productCards__bottom__swiper} data-btn-type="left" onClick={swiperLeft}>
                <GrFormPrevious />
            </button>
            <div className={c.container}>
                <ul className={c.Product__cards__bottom__list} ref={elProductsCardsBottom}>
                    {
                        productCardsBottom.map((newBottomCards, id) => 
                            <li key={id} className={c.Product__cards__bottom__item}>
                                <Link to={`/pdp/${newBottomCards.id}`}>
                                    <img className={c.productCardsBottom__Img} src={newBottomCards.category.image} alt="" />
                                </Link>
                                <div className={c.productsBottomCategory__wrapper}>
                                    <p className={c.products__bottom__name}>{newBottomCards.category.name}</p>
                                    <p className={c.products__bottom__price}>{newBottomCards.price}</p>
                                    <div className={c.products__button__btnWrapper}>
                                        <button className={c.products__button__btns}>
                                            <FiShoppingCart/>
                                            {t("to__cart")}
                                        </button>
                                        <button className={c.products__bottom__heart}>
                                            <BsHeart />
                                        </button>
                                       <button className={c.products__bottom__compare}>
                                           <GrCompare />
                                       </button>
                                    </div>
                                </div>
                            </li>    
                        )
                    }
                </ul>
            </div>
            <button className={c.productCards__bottom__swiper} data-btn-type="right" onClick={swiperRight}>
                <GrFormNext />
            </button>
        </div>
    )
}

export default ProductCardsBottom