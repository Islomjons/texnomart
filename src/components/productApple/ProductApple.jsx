import c from "./ProductApple.module.css"
import { Link } from "react-router-dom"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useEffect, useRef, useState } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const ProductApple = () => {
    const { t } = useTranslation()
    const elProductsApple = useRef()
    const [swiperBtn, setSwiperBtn] = useState(0)
    const [productApple, setProductApple] = useState([])

    const swipeLeft = () => {
        if (swiperBtn < 0) {
            setSwiperBtn(productApple.length - 1)
        }else{
            setSwiperBtn(0)
        }
    }

    const swipeRight = () => {
        if (swiperBtn < productApple.length - 1) {
            setSwiperBtn(swiperBtn + 1)
        }else{
            setSwiperBtn(0)
        }
    }

    useEffect(() => {
        elProductsApple.current.scrollLeft = swiperBtn * 100
    }, [swiperBtn])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProductApple(data.slice(40, 50)))
    }, [])

    return (
        <div className={c.productApple}>
            <h2 className={c.productHeading}>{t("recently__seen")}</h2>
            <button className={c.productAppleSwiperBtn} data-btn-type="left" onClick={swipeLeft}>
                <GrFormPrevious />
            </button>
            <div className={c.container}>
                <ul className={c.productList} ref={elProductsApple}>
                    {
                        productApple.map((newAppleProduct, id) => 
                            <li key={id} className={c.productItem}>
                                <Link to={`/pdp/${newAppleProduct.id}`}>
                                    <img className={c.productsImg} src={newAppleProduct.category.image} alt="" />
                                </Link>
                                <p className={c.productName}>{newAppleProduct.category.name}</p>
                                <div className={c.productAppleWrapper}>
                                    <p className={c.productApplePrice}>{newAppleProduct.price}</p>
                                    <button className={c.productAppleBtn}>
                                        <FiShoppingCart className={c.productAppleIcon} />
                                    </button>
                                </div>
                            </li>    
                        )
                    }
                </ul>
            </div>
            <button className={c.productAppleSwiperBtn} data-btn-type="right" onClick={swipeRight}>
                <GrFormNext />
            </button>
        </div>
    )
}

export default ProductApple