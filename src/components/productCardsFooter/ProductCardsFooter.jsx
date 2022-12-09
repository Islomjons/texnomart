import c from "./ProductCardsFooter.module.css"
import { useTranslation } from "react-i18next"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { FiShoppingCart } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"
import { BsArrowRight } from "react-icons/bs"

const ProductCardsFooter = () => {
    const { t } = useTranslation()
    const elProductsCardsFooter = useRef()
    const [productCardsFooter, setProductCardsFooter] = useState([])
    const [productsCardsFooterImg, setProductsCardsFooterImg] = useState(0)

    const turnLeft = () => {
        if (productsCardsFooterImg < 0) {
            setProductsCardsFooterImg(productCardsFooter.length - 1)
        }else{
            setProductsCardsFooterImg(0)
        }
    }

    const turnRight = () => {
        if (productsCardsFooterImg < productCardsFooter.length - 1) {
            setProductsCardsFooterImg(productsCardsFooterImg + 1)
        }else{
            setProductsCardsFooterImg(0)
        }
    }
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductCardsFooter(data.slice(30, 40)))
    }, [])

    useEffect(() => {
        elProductsCardsFooter.current.scrollLeft = productsCardsFooterImg * 100
    }, [productsCardsFooterImg])
    return (
        <div className={c.product__cards__footer}>
            <h2 className={c.product__cards__footer__heading}>{t("new__collection")}</h2>
            <div className={c.products__link__wrapper}>
                <button className={c.products__btn1}>
                    {t("recommend")}
                </button>
                <Link className={c.products__link}>
                    {t("see__all")}
                    <BsArrowRight />
                </Link>
            </div>
            <button className={c.productCardsFooter__swiper} data-btn-type="left" onClick={turnLeft}>
                <GrFormPrevious />
            </button>
            <div className={c.container}>
                <ul className={c.product__cards__footer__list} ref={elProductsCardsFooter}>
                    {
                        productCardsFooter.map((newCardsFooter, id) => 
                            <li className={c.product__cards__footer__item} key={id}>
                                <Link to={`/pdp/${newCardsFooter.id}`}>
                                    <img className={c.productCardsFooter__Img} src={newCardsFooter.category.image} alt="" />
                                </Link>
                                <div className={c.productsFooterCategory__wrapper}>
                                    <p className={c.products__footer__name}>{newCardsFooter.category.name}</p>
                                    <p className={c.products__footer__price}>{newCardsFooter.price}</p>
                                    <div className={c.products__Footer__btnWrapper}>
                                        <button className={c.products__Footer__btns}>
                                            <FiShoppingCart />
                                            Savatchga
                                        </button>
                                        <button className={c.products__Footer__heart}>
                                            <BsHeart />
                                        </button>
                                       <button className={c.products__Footer__compare}>
                                           <GrCompare />
                                       </button>
                                    </div>
                                </div>
                            </li>    
                        )
                    }
                </ul>
            </div>
            <button className={c.productCardsFooter__swiper} data-btn-type="right" onClick={turnRight}>
                <GrFormNext />
            </button>
        </div>
    )
}

export default ProductCardsFooter