
const HomeSlider = ({ img }) => {
    return (
        <div className="font-kanit">
            <div
                className="w-full h-[580px] bg-no-repeat bg-cover flex justify-center items-center" style={{
                    backgroundImage: `url(${img})`,

                }}>
                {/* <div
                    className="flex flex-col justify-center items-center">
                    <h1 className="text-1 text-5xl">ToyVerse</h1>
                    <p className="mt-5 text-center text-lg text-white opacity-70">Unlock the World with Language Learning: Embrace Multicultural Connections and Expand Your Horizons</p>

                </div> */}
            </div>


        </div>
    );
};

export default HomeSlider;