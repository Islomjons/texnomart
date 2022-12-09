import { Link } from "react-router-dom"
import technologiesImg from "../../dimmiy-data.technologes.json"
import c from "./Technologies.module.css"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from "react";

const Technologies = () => {
    const elTechnologies = useRef()
    const [technologiesCarousel, setTechnologiesCarousel] = useState(0)

    const moveToLeft = () => {
        if (technologiesCarousel < 0) {
            setTechnologiesCarousel(technologiesImg.length - 1)
        }else{
            setTechnologiesCarousel(0)
        }
    }

    const moveToRight = () => {
        if (technologiesCarousel < technologiesImg.length - 1) {
            setTechnologiesCarousel(technologiesCarousel + 1)
        }else{
            technologiesCarousel(0)
        } 
    }

   useEffect(() => {
       elTechnologies.current.scrollLeft = technologiesCarousel * 100
   }, [technologiesCarousel])
    return (
        <div className={c.technologies}>
            <button className={c.technologies__btn} data-btn-type="left" onClick={moveToLeft}>
                <GrFormPrevious/>
            </button>
            <div className={c.container}>
                <ul className={c.technologies__list} ref={elTechnologies}>
                    {
                        technologiesImg.map(newImg => 
                            <li key={uuidv4()} className={c.technologies__item}>
                                <Link to="/explorenow">
                                    <img className={c.technologies__img} src={newImg.apple} alt="" />
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>
            <button className={c.technologies__btn} data-btn-type="right" onClick={moveToRight}>
                <GrFormNext/>
            </button>
        </div>
    )
}

export default Technologies