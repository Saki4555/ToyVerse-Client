import img1 from '../../../assets/Gallery/g-1.jpg';
import img2 from '../../../assets/Gallery/g-2.jpg';
import img3 from '../../../assets/Gallery/g-3.jpg';
import img5 from '../../../assets/Gallery/g-5.jpg';
import img7 from '../../../assets/Gallery/g-7.jpg';
import img10 from '../../../assets/Gallery/g-8.jpg';
import { Rating } from '@smastrom/react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const TopProducts = () => {

    useEffect(() => {
        AOS.init({duration: 800});

        return () => {
            AOS.refresh();
          };
      }, [])
    return (
        <div className='my-container md:flex gap-10 mt-28 mb-20'>
            <div data-aos="fade-right" className='w-full md:w-1/2'>
                <h1 className='text-3xl font-bold mb-10 pb-4 border-b border-l-8 pl-5 border-l-[#B92D5E]'>Best Rated Products</h1>
                <div className='flex items-center gap-10 mb-5'>
                    <img src={img1} className='w-28 h-28 rounded-lg object-cover object-center' alt="toys" />
                    <div>
                        <h3 className='text-xl font-bold'>Heroic Sentinel</h3>
                        <p className='text-1 font-bold pb-4'>$45</p>
                        <div className='flex items-center gap-3'>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={5}
                                readOnly
                            />
                            <p className='text-gray-400'>150 Reviews</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-10 mb-5'>
                    <img src={img3} className='w-28 h-28 rounded-lg object-cover object-center' alt="toys" />
                    <div>
                        <h3 className='text-xl font-bold'>Battle Blaster</h3>
                        <p className='text-1 font-bold pb-4'>$45</p>
                        <div className='flex items-center gap-3'>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={5}
                                readOnly
                            />
                            <p className='text-gray-400'>150 Reviews</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <img src={img2} className='w-28 h-28 rounded-lg object-cover object-center' alt="toys" />
                    <div>
                        <h3 className='text-xl font-bold'>Laser Hawk</h3>
                        <p className='text-1 font-bold pb-4'>$45</p>
                        <div className='flex items-center gap-3'>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={5}
                                readOnly
                            />
                            <p className='text-gray-400'>150 Reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            <div  data-aos="fade-left" className='w-full md:w-1/2'>

                <h1 className='text-3xl font-bold mb-10 pb-4 border-b border-l-8 pl-5 border-l-[#B92D5E]'>New Products</h1>
                <div className='flex items-center gap-10 mb-5'>
                    <img src={img5} className='w-28 h-28 rounded-lg object-cover object-center' alt="toys" />
                    <div>
                        <div className="badge badge-warning py-3 px-3 mb-2">
                            43% Off
                        </div>
                        <h3 className='text-xl font-bold'>Power Punch</h3>
                        <p className='text-1 font-bold pb-4'>$45</p>

                    </div>
                </div>
                <div className='flex items-center gap-10 mb-5'>
                    <img src={img7} className='w-28 h-28 rounded-lg object-cover object-center' alt="toys" />
                    <div>
                    <div className="badge badge-warning py-3 px-3 mb-2">
                            43% Off
                        </div>
                        <h3 className='text-xl font-bold'>Stealth Strike</h3>
                        <p className='text-1 font-bold pb-4'>$45</p>

                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <img src={img10} className='w-28 h-28 rounded-lg object-cover object-center' alt="toys" />
                    <div>
                    <div className="badge badge-warning py-3 px-3 mb-2">
                            43% Off
                        </div>
                        <h3 className='text-xl font-bold'>Thunder Crusher</h3>
                        <p className='text-1 font-bold pb-4'>$45</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;