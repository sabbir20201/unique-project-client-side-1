
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='my-10'>

            <h1 className="text-center font-bold text-4xl mt-14">Sip, Taste, and Delight in Our Customer Stories</h1>
            <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper p-20"
            >
                <SwiperSlide className='p-20'>
                <p>
                    "Tea perfection! The Red Rooibos Organic, Fair Trade is a comforting choice, and the Chamomile Botanical Blend Sachets are a true gem. The teas not only meet but exceed expectations. Premium quality, delightful aromas, and an absolute joy to taste. Highly recommended!"
                    </p>
                    <div>
                    <img className="w-16 h-16 rounded-full mt-4" src="https://i.ibb.co/9c495Nt/istockphoto-1399565382-170667a.webp" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-20'>
                <p>
                    "Tea perfection! The Red Rooibos Organic, Fair Trade is a comforting choice, and the Chamomile Botanical Blend Sachets are a true gem. The teas not only meet but exceed expectations. Premium quality, delightful aromas, and an absolute joy to taste. Highly recommended!"
                    </p>
                    <div>
                    <img className="w-16 h-16 rounded-full mt-4" src="https://i.ibb.co/bBw9zgX/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-20'>
                    <p>
                    "Tea perfection! The Red Rooibos Organic, Fair Trade is a comforting choice, and the Chamomile Botanical Blend Sachets are a true gem. The teas not only meet but exceed expectations. Premium quality, delightful aromas, and an absolute joy to taste. Highly recommended!"
                    </p>
                    <div>
                    <img className="w-16 h-16 rounded-full mt-4" src="https://i.ibb.co/d0NZMC5/portrait-handsome-caucasian-man-formal-260nw-2142820441.webp" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-20'>
                    <p>
                    "Tea perfection! The Red Rooibos Organic, Fair Trade is a comforting choice, and the Chamomile Botanical Blend Sachets are a true gem. The teas not only meet but exceed expectations. Premium quality, delightful aromas, and an absolute joy to taste. Highly recommended!"
                    </p>
                    <div>
                    <img className="w-16 h-16 rounded-full mt-4" src="https://i.ibb.co/d0NZMC5/portrait-handsome-caucasian-man-formal-260nw-2142820441.webp" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
  
            
             
            </Swiper>
            </div>
         

        </div>
    );
};

export default Testimonials;