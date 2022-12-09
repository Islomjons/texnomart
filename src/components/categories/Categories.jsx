import c from "./Categories.module.css"
import categiriesJson from "../../dummiy-data.categories.json"
import { Link } from "react-router-dom"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { v4 as uuidv4 } from 'uuid';

const Categories = () => {
    const { t } = useTranslation()
    const elCategories = useRef()
    const [categoriesImg, setcategoriesImg] = useState(0)
    const turnLeft = () => {
        if (categoriesImg < 0) {
            setcategoriesImg(categiriesJson.length - 1)
        }else{
            setcategoriesImg(0)
        }
    }

    const turnRight = () => {
        if (categoriesImg < categiriesJson.length - 1) {
            setcategoriesImg(categoriesImg + 1)
        }else{
            setcategoriesImg(0)
        }
    }

    useEffect(() => {
        elCategories.current.scrollLeft = categoriesImg * 100
    }, [categoriesImg])
    return (
        <div className={c.categories}>
                <h1 className={c.categories__heading}>{t("popular__feature")}</h1>
            <button className={c.categories__btn} data-btn-type="left" onClick={turnLeft}>
                <GrFormPrevious/>
            </button>
            <div className={c.container}>
                <ul className={c.categories__list} ref={elCategories}>
                    {
                        categiriesJson.map(newCategories => 
                            <li key={uuidv4()} className={c.categories__item}>
                                <Link className={c.categories__link}>
                                    <img className={c.categories__img} src={newCategories.categoriesImg} alt="" />
                                    <p>{newCategories.categoriesName}</p>
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>
            <button className={c.categories__btn} data-btn-type="right" onClick={turnRight}>
                <GrFormNext/>
            </button>
        </div>
    )
}

export default Categories