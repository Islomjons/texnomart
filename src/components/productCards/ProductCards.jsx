import c from "./ProductCards.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"
import { BsHeart } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

const ProductCards = () => {
    const { t } = useTranslation()
    const elProductsCards = useRef()
    const [ productsImg, setProductsImg ] = useState(0)
    const [singleProductData, setSingleProductData] = useState([])
    const turnLeft = () => {
        if (productsImg < 0) {
            setProductsImg(singleProductData.length - 1)
        }else{
            setProductsImg(0)
        }
    }

    const turnRight = () => {
        if (productsImg < singleProductData.length - 1) {
            setProductsImg(productsImg + 1)
        }else{
            setProductsImg(0)
        }
    }

    useEffect(() => {
        elProductsCards.current.scrollLeft = productsImg * 100
    }, [productsImg])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setSingleProductData(data.slice(0, 10)))
    }, [])
    return (
        <div className={c.productCards}>
            <h2 className={c.productCards__heading}>{t("good__price")}</h2>
            <button className={c.products__swiper} data-btn-type="left" onClick={turnLeft}>
                <GrFormPrevious/>
            </button>
            <div className={c.container}>
                <ul className={c.productCards__list} ref={elProductsCards}>
                    {
                        singleProductData.map((newLi, id) => 
                            <li key={id} className={c.productCards__item}>
                                <Link to={`/pdp/${newLi.id}`}>
                                    <img className={c.products__imgs} src={newLi.category.image} alt="" />
                                </Link>
                               <div className={c.productsCategory__wrapper}>
                                 <p className={c.products__name}>{newLi.category.name}</p>
                                 <p className={c.products__price}>{newLi.price}</p>
                                <div className={c.products__btnWrapper}>
                                 <button className={c.products__btns}>
                                    <FiShoppingCart/>
                                   {t("to__cart")}
                                  </button>
                                  <button className={c.products__heart}>
                                       <BsHeart />
                                  </button>
                                  <button className={c.products__compare}>
                                      <GrCompare />
                                  </button>
                                </div>
                               </div>
                            </li>    
                        )
                    }
                </ul>
            </div>
            <button className={c.products__swiper} data-btn-type="right" onClick={turnRight}>
                <GrFormNext/>
            </button>
        </div>
    )
}

export default ProductCards