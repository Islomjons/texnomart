import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import CardsImg from "../../dummiy-data.footerImg.json"

const Footer = () => {
  const { t } = useTranslation()
    return (
     <div className='footer'>
       <div className='container'>
        <div className='footer__box'>
          <div className='footer__categoties-box'>
            <div className='question__text'>
              <strong className='question__text'>
              {t("ask__quetion")}
              </strong>
            </div>
    
              <h2>
                <a className='tell__number' href="tel:+998 71 209 99 44">+998 71 209 99 44</a>
              </h2>
    
              <ul className='brend__list-buttons'>
                  <li className='brend__list-item'>
                    <a className='footer__img-link' href="https://www.facebook.com/">
                    <FaFacebookSquare className='face__bock-img brends__img'/>
                    </a>
                  </li>
    
                  <li className='brend__list-item'>
                    <a className='footer__img-link' href="https://t.me/texnomart_chat">
                    <BsTelegram className='footer__telegram-img brends__img'/>
                    </a>
                  </li>
    
                  <li className='brend__list-item'>
                    <a className='footer__img-link' href="https://www.instagram.com/texnomart/">
                    <BsInstagram className='instagram__img brends__img'/>
                    </a>
                  </li>
    
                  <li className='brend__list-item'>
                    <a className='footer__img-link' href="https://www.youtube.com/c/Texnomart">
                      <AiFillYoutube className='youtube__img brends__img'/>
                    </a>
                  </li>
              </ul>
    
              <div className='playmarket'>
                <a href="https://play.google.com/store/apps/details?id=com.texnomart.app">
                  <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-uz.793161d.svg" alt="site__logo" width={143} height={47}/>
                </a>
              </div>
    
            <div className='market__location'>
              <a className='link__id' href="#link">
              {t("lacation__tashkent")}
              </a>
            </div>
          
          </div>
    
          <div className='Company'>
            <strong className='title__company'>
              {t("company")}
            </strong>
    
            <ul className='company__list'>
              <li className='company__list-item'>
                <a className='company__link' href="#link">
                {t("b__sale")}
                </a>
              </li>
    
              <li className='company__list-item'>
                <a className='company__link' href="#link">
                {t("about__us")}
                </a>
              </li>
    
              <li className='company__list-item'>
                <a className='company__link' href="#link">
                {t("news")}
                </a>
              </li>
              
              <li className='company__list-item'>
                <a className='company__link' href="#link">
                {t("check__imei")}
                </a>
              </li>
            </ul>
            </div>
    
            
    
            <div className='Company'>
            <strong className='title__company'>
             {t("information")}
            </strong>
    
            <ul className='company__list'>
              <li className='company__list-item'>
                <a className='company__link' href="#link">
                {t("free__shipping")}
                </a>
              </li>
    
              <li className='company__list-item'>
                <a className='company__link' href="#link">
                {t("exrta__system")}
                </a>
              </li>
              <li className='company__list-item'>
              <a className='company__link' href="#link">
              {t("work__in__texnomart")}
              </a>
            </li>
            
            <li className='company__list-item'>
              <a className='company__link' href="#link">
              {t("own__class")}
              </a>
            </li>
            <li className='company__list-item'>
              <a className='company__link' href="#link">
              {t("tell__number")}
              </a>
            </li>
          </ul>
          </div>
         <div className='Company'>
          <strong className='title__company'>
          {t("help")}
          </strong>

          <ul className='company__list'>
            <li className='company__list-item'>
              <a className='company__link' href="#link">
              {t("buy__credit")}
              </a>
            </li>

            <li className='company__list-item'>
              <a className='company__link' href="#link">
              {t("product__return")}
              </a>
            </li>

            <li className='company__list-item'>
              <a className='company__link' href="#link">
              {t("gurante__products")}
              </a>
            </li>
            
            <li className='company__list-item'>
              <a className='company__link' href="#link">
             {t("frequint__ask__quetions")}
              </a>
            </li>
          </ul>

            <div className='telegram__bot-father'>
              <a className='telegram__bot' href="#link">
              <FaTelegramPlane className='telegram__bot-img'/>
             {t("know__your__bonus")}
              </a>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <p className='footer__bottom__text'>2016-2022 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi</p>
          <div className='footerBottomWrappers'>
            {
              CardsImg.map(newCards => 
                  <div key={uuidv4()} className="footer__bottom__wrapper">
                    <img className='footerBottomImgss' src={newCards.cardsImg} alt="" />
                  </div>
                )
            }
          </div>
        </div>
       </div>
     </div>
  )
}

export default Footer;