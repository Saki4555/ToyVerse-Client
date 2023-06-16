import { Helmet } from "react-helmet-async";
import Gallery from "./Gallery/Gallery";
import HomeBanner from "./HomeBanner/HomeBanner";
import ShopByCategory from "./ShopByCateroy/ShopByCategory";
import TopProducts from "./ExtraSection/TopProducts";
import Feedback from "./ExtraSection/Feedback";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>ToyVerse | Home</title>
        </Helmet>
      
        <HomeBanner></HomeBanner>
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
        <TopProducts></TopProducts>
        <Feedback></Feedback>

        </>
    );
};

export default Home;