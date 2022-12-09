import c from "./TexnomartApp.module.css"
import Image from "../../assets/images/bg-img.png"
import ScannerImg from "../../assets/images/scanner.png"
import GooglePlayImg from "../../assets/images/google-market.png"
import { Link } from "react-router-dom"


const TexnomartApp = () => {
    return (
        <div className={c.texnomartapp}>
            <div className={c.container}>
                <div className={c.texnomart__left}>
                    <div className={c.texnomart__left__wrapper}>
                         <img className={c.texnomart__left__img} src={Image} alt="" />
                    </div>
                </div>
                <div className={c.texnomart__right}>
                    <div className={c.texnomart__right__wrapper}>
                        <h2 className={c.texnomart__right__heading}>Ilovani yuklang</h2>
                        <p className={c.texnomart__right__text}>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>

                        <div className={c.texnomart__right__scanner}>
                            <img className={c.texnomart__right__scanner__img} src={ScannerImg} alt="" />
                            <p className={c.texnomart__right__scanner__desc}>
                            Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang
                            </p>
                        </div>

                       <Link>
                           <img className={c.google__img} src={GooglePlayImg} alt="" />
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TexnomartApp