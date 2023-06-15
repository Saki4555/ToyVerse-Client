import ToyCard from "./ToyCard";


const ShopCategoryTab = ({items}) => {
    return (
       <>
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.slice(0,3).map(item => <ToyCard key={item._id} item={item}></ToyCard>)
            }
        </div>
       </>
    );
};

export default ShopCategoryTab;