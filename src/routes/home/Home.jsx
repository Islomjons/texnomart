import React from "react"
import Categories from "../../components/categories/Categories"
import Credit from "../../components/credit/Credit"
import HeroBanner from "../../components/heroBanner/HeroBanner"
import ProductApple from "../../components/productApple/ProductApple"
import ProductCards from "../../components/productCards/ProductCards"
import ProductCardsBottom from "../../components/productCardsBottom/ProductCardsBottom"
import ProductCardsFooter from "../../components/productCardsFooter/ProductCardsFooter"
import ProductCardsMain from "../../components/productCardsMain/ProductCardsMain"
import Technologies from "../../components/technologies/Technologies"
import TexnomartApp from "../../components/texnomartApp/TexnomartApp"


const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Technologies />
            <Categories />
            <ProductCards />
            <ProductCardsMain />
            <ProductCardsBottom />
            <ProductCardsFooter />
            <TexnomartApp />
            <Credit />
            <ProductApple />
        </div>
    )
}

export default Home