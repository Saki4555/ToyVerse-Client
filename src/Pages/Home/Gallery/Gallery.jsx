import galleryimg1 from '../../../assets/Gallery/g-1.jpg';
import galleryimg2 from '../../../assets/Gallery/g-2.jpg';
import galleryimg3 from '../../../assets/Gallery/g-3.jpg';
import galleryimg4 from '../../../assets/Gallery/g-4.jpg';
import galleryimg5 from '../../../assets/Gallery/g-5.jpg';
import galleryimg7 from '../../../assets/Gallery/g-7.jpg';
import galleryimg8 from '../../../assets/Gallery/g-8.jpg';
import galleryimg9 from '../../../assets/Gallery/g-9.jpg';
import galleryimg10 from '../../../assets/Gallery/g-10.jpg';
import galleryimg11 from '../../../assets/Gallery/g-11.jpg';
import galleryimg12 from '../../../assets/Gallery/g-12.jpg';

const Gallery = () => {
    return (
            <div className="my-container">
                <div className="pt-20 pb-14 text-center text-gray-600">
                    <h1 className="text-4xl font-bold pb-4">Toys Gallery</h1>
                    <h4>Unleash Your Imagination in the Toy Galler</h4>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg1} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg2} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg3} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg4} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg5} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg12} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg7} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg8} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg8} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg9} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg10} alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src={galleryimg11} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Gallery;