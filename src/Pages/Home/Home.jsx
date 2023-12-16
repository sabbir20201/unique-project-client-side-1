import Accordion from "../../Components/Accordion/Accordion";
import Banner from "../../Components/Banner/Banner";
import TeaCard from "../../Components/TeaCard/TeaCard";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
          
          <Banner></Banner>
         <TeaCard></TeaCard>
         <Testimonials></Testimonials>
         <Accordion></Accordion>
      
        </div>
    );
};

export default Home;