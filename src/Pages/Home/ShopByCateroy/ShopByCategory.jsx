import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAllToys from '../../../Hooks/useAllToys';
import ShopCategoryTab from './ShopCategoryTab';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const ShopByCategory = () => {
    const [toys] = useAllToys();
    // console.log(toys);
    const marvel = toys.filter(item => item.category === 'Marvel');
    const dc = toys.filter(item => item.category === 'DC');
    const starWars = toys.filter(item => item.category === 'Star Wars');
    console.log(marvel, dc, starWars);

    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
          };
      }, [])

    return (
        <>
            <div data-aos="fade-left" className="pt-20 pb-14 text-center text-gray-600">
                <h1 className="text-4xl font-bold pb-4">Shop By Category</h1>
                <h4>Explore Your Favorite Heros: Shop by Category</h4>
            </div>
            <div className='my-container'>
                <Tabs>
                  <div className='text-center pb-4'>
                  <TabList>
                        <Tab >DC</Tab>
                        <Tab>Marvel</Tab>
                        <Tab>Star Wars</Tab>
                    </TabList>
                  </div>

                    <TabPanel>
                        <ShopCategoryTab items={dc}></ShopCategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopCategoryTab items={marvel}></ShopCategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopCategoryTab items={starWars}></ShopCategoryTab>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ShopByCategory;