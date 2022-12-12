import c from "./Pdp.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsHeart } from "react-icons/bs"
import { GrCompare } from "react-icons/gr"
import { useTranslation } from "react-i18next"

const Pdp = () => {
    const { t } = useTranslation()
    const { id } = useParams()
    const [activeImgOver, setActiveImgOver] = useState(0)
    const [singleProductCards, setSingleProductCards] = useState(null)
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => response.json())
            .then(data => setSingleProductCards(data))
    }, [])
    console.log(singleProductCards);
    return (
        <div className={c.pdp}>
            <div className={c.container}>
                <div className={c.pdp__list}>
                    {
                        singleProductCards !== null && singleProductCards ? 
                        <>
                        <div className={c.pdp__item}>
                             <h3 className={c.pdp__title}>{singleProductCards.title}</h3>
                             <div className={c.pdp__btn__wrapper}>
                                 <button className={c.pdp__btn}>
                                    <BsHeart />
                                    {t("to__favorites")}
                                 </button>
                                 <button className={c.pdp__btn}>
                                     <GrCompare />
                                     {t("to__compare")}
                                 </button>
                             </div>
                             <img className={c.pdp__img} src={singleProductCards.category.image} alt="" />
                             <div className={c.pdp__img__wrapper}>
                                 {
                                     singleProductCards.images.map((productImg, index) => 
                                        <img style={index === activeImgOver ? {boxShadow: "0px 0px 3px 3px orange"} : null} onClick={() => {setActiveImgOver(index)}} key={productImg.id} className={c.pdp__images} src={productImg} alt="" />    
                                    )
                                 }
                             </div>
                        </div>
                        </>
                        :
                        <></>
                    }
                </div>
                <div className={c.pdp__right}>
                    <h2 className={c.pdp__right__heading}>{singleProductCards?.description}</h2>
                </div>
            </div>
        </div>
    )
}

export default Pdp