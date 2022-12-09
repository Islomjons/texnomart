import c from "./ProductCardsMain.module.css"
import { useTranslation } from "react-i18next"
import { useState, useEffect, useRef } from "react"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"

const ProductCardsMain = () => {
    const { t } = useTranslation()
    const elProductsCardsMain = useRef()
    const [productsCardsMain, setProductsCardsMain] = useState([])
    const [productsImgMain, setProductsImgMain] = useState(0)

    const swipeLeft = () => {
        if (productsImgMain < 0) {
            setProductsImgMain(productsCardsMain.length - 1)
        }else{
            setProductsImgMain(0)
        }
    }

    const swipeRight = () => {
        if (productsImgMain < productsCardsMain.length - 1) {
            setProductsImgMain(productsImgMain + 1)
        }else{
            setProductsImgMain(0)
        }
    }

    useEffect(() => {
        elProductsCardsMain.current.scrollLeft = productsImgMain * 100
    }, [productsImgMain])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductsCardsMain(data.slice(10, 20)))
    }, [])
    return (
        <div className={c.productcards__main}>
            <h2 className={c.productcards__main__heading}>{t("new__products")}</h2>
            <button className={c.productcards__main__swiper} data-btn-type="left" onClick={swipeLeft}>
                <GrFormPrevious />
            </button>
            <div className={c.container}>
                <ul className={c.productcardsMain__list} ref={elProductsCardsMain}>
                    {
                        productsCardsMain.map((newProduct, id) => 
                           <li key={id} className={c.productcardsMain__item}>
                               <Link to={`/pdp/${newProduct.id}`}>
                                    <img className={c.productcardsMain__Img} src={newProduct.category.image} alt="" />
                               </Link>
                               <div className={c.productsMainCategory__wrapper}>
                                 <p className={c.products__main__name}>{newProduct.category.name}</p>
                                 <p className={c.products__main__price}>{newProduct.price}</p>
                                 <div className={c.products__main__btnWrapper}>
                                    <button className={c.products__main__btns}>
                                        <FiShoppingCart/>
                                        Savatchaga
                                    </button>
                                   <button className={c.products__main__heart}>
                                        <BsHeart />
                                   </button>
                                    <button className={c.products__main__compare}>
                                        <GrCompare />  
                                    </button>
                                 </div>
                               </div>
                           </li> 
                        )
                    }
                </ul>
            </div>
            <button className={c.productcards__main__swiper}  data-btn-type="right" onClick={swipeRight}>
                <GrFormNext />
            </button>
        </div>
    )
}

export default ProductCardsMain