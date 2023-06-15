import { Helmet } from "react-helmet-async";
import Gallery from "./Gallery/Gallery";
import HomeBanner from "./HomeBanner/HomeBanner";
import ShopByCategory from "./ShopByCateroy/ShopByCategory";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>ToyVerse | Home</title>
        </Helmet>
        <HomeBanner></HomeBanner>
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
        </>
    );
};

export default Home;