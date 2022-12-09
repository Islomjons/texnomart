import c from "./HeroBanner.module.css"
import heroBannerImges from "../../dummiy-data.heroBannerImg.json"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"

const HeroBanner = () => {
    const carouselWrapperEl = useRef()
    const [currentImg, setCurrentImg] = useState(0)

    const swipeRight = () => {
        if (currentImg < heroBannerImges.length - 1) {
            setCurrentImg(currentImg => currentImg + 1)
        }
        else (
            setCurrentImg(0)
        )
    }

    const swipeLeft = () => {
        if (currentImg > 0) {
            setCurrentImg(currentImg => currentImg - 1)
        }
        else (
            currentImg(heroBannerImges.length - 1)
        )
    }

    useEffect(() => {
        carouselWrapperEl.current.scrollLeft = currentImg * carouselWrapperEl.current.offsetWidth
    },[currentImg])
    return (
        <div className={c.HeroBanner}>
            <button className={c.carousel__btn} data-btn-type="left" onClick={swipeLeft}>
                <GrFormPrevious/>
            </button>
            <div className={c.HeroBanner__wrapper} ref={carouselWrapperEl}>
                {
                    heroBannerImges.map(heroImg => 
                        <div key={uuidv4()}>
                            <Link to="/">
                                <img className={c.carausel__img} src={heroImg} alt="" />
                            </Link>
                        </div>    
                    )
                }
            </div>

            <div className={c.dots__wrapper}>
                {
                    heroBannerImges.map((dots, index) => 
                        <div style={currentImg === index ? {backgroundColor: "#333333", transform: "scale(1.3"} : null} key={index} className={c.dot} onClick={() => {
                            setCurrentImg(index)
                        }}></div>
                    )
                }
            </div>
            <button className={c.carousel__btn} data-btn-type="right" onClick={swipeRight}>
                <GrFormNext/>
            </button>
        </div>
    )
}

export default HeroBanner