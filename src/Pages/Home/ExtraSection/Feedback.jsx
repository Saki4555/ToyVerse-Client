import img1 from '../../../assets/Gallery/g-1.jpg';
import img10 from '../../../assets/Gallery/g-8.jpg';
import img2 from '../../../assets/Gallery/g-2.jpg';
import customer1 from '../../../assets/Home/student1.jpg';
import customer2 from '../../../assets/Home/student2.jpg';
import { Rating } from '@smastrom/react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Feedback = () => {

    useEffect(() => {
        AOS.init({duration: 800});

        return () => {
            AOS.refresh();
          };
      }, [])
    return (
        <div className="my-container mb-20">
            <h1 data-aos="fade-left" className="text-2xl md:text-5xl mb-5 mt-28 text-center font-bold">Our Customer Loves Us</h1>

            <div className='grid md:grid-cols-3 gap-10'>
                <div data-aos="fade-right" className='border py-5 px-8 shadow-2xl'>
                    <div className=''>
                        <div className='flex items-center gap-5 p-5 bg-gray-100'>
                            <img src={img1} className='w-16 h-16 rounded-2xl' alt="" />
                            <div>
                                <h3>Heroic Sentinel</h3>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={5}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <p>I recently purchased the Power Punch action figure toy for my son, and he absolutely loves it! The attention to detail and the quality of the materials used are impressive. The figures articulation allows for various action poses, providing endless play possibilities. </p>

                            <div className='flex items-center mt-3'>
                                <img src={customer1} className='w-20 h-20' alt="" />
                                <div className='bg-1 text-white py-1 px-5'>
                                    <p>Customer1</p>
                                    <p>customer@toyverse.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className='border py-5 px-8 shadow-2xl'>
                    <div className=''>
                        <div className='flex items-center gap-5 p-5 bg-gray-100'>
                            <img src={img10} className='w-16 h-16 rounded-2xl' alt="" />
                            <div>
                                <h3>Battle Blaster</h3>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={5}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <p>I recently purchased the Power Punch action figure toy for my son, and he absolutely loves it! The attention to detail and the quality of the materials used are impressive. The figures articulation allows for various action poses, providing endless play possibilities. </p>

                            <div className='flex items-center mt-3'>
                                <img src={customer2} className='w-20 h-20' alt="" />
                                <div className='bg-1 text-white py-1 px-5'>
                                    <p>Customer1</p>
                                    <p>customer@toyverse.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='border py-5 px-8 shadow-2xl'>
                    <div className=''>
                        <div className='flex items-center gap-5 p-5 bg-gray-100'>
                            <img src={img2} className='w-16 h-16 rounded-2xl' alt="" />
                            <div>
                                <h3>Heroic Sentinel</h3>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={5}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <p>I recently purchased the Power Punch action figure toy for my son, and he absolutely loves it! The attention to detail and the quality of the materials used are impressive. The figures articulation allows for various action poses, providing endless play possibilities. </p>

                            <div className='flex items-center mt-3'>
                                <img src={customer2} className='w-20 h-20' alt="" />
                                <div className='bg-1 text-white py-1 px-5'>
                                    <p>Customer1</p>
                                    <p>customer@toyverse.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;