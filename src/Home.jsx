import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import CardData from "./CardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosWater } from "react-icons/io";
import { BsSunFill } from "react-icons/bs";
import { GiPineTree } from "react-icons/gi";

const heroSlides = [
  {
    image:
      "https://thumbs.dreamstime.com/b/young-plant-cradled-hands-symbolizing-growth-nurturing-nature-s-embrace-ai-pair-gently-holds-small-vibrant-345262811.jpg",
    slogan: "Nurture Nature, One Leaf at a Time",
  },
  {
    image:
      "http://media.architecturaldigest.com/photos/5dcde00380598800086215f6/master/pass/Osofsky_Oct19-5.jpg",
    slogan: "Indoor Plants for Healthier Spaces",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/U6iv4N7sVynhSMF9qfSeHd.jpg",
    slogan: "Eco-Friendly Care Starts Here",
  },
];

const careTips = [
  {
    title: "Watering Wisely",
    description:
      "Water your plants when the top inch of soil feels dry. Overwatering is a common mistake—let them breathe!",
    icon: <IoIosWater className="flex justify-center mx-auto text-blue-600" />,
  },
  {
    title: "Sunlight Essentials",
    description:
      "Most indoor plants thrive in bright, indirect light. Rotate them weekly for even growth.",
    icon: <BsSunFill className="flex justify-center mx-auto text-yellow-200" />,
  },
  {
    title: "Fertilizing Fundamentals",
    description:
      "Feed your plants every 4-6 weeks during growing season with a balanced fertilizer. Less is more!",
    icon: <GiPineTree className="flex justify-center mx-auto text-green-300" />,
  },
];

const experts = [
  {
    image:
      "https://media.istockphoto.com/id/1213127421/photo/botanist-examining-the-plants.jpg?s=170667a&w=is&k=20&c=kNFBJ6rxC_XcVNk5zOY3HWxaudGb1hsBagYfvHRxPxE=",
    name: "Dr. Elena Leaf",
    specialization: "Indoor Tropical Plants",
  },
  {
    image:
      "https://www.stevehughesphotography.co.uk/wp-content/uploads/2014/06/portrait-of-man-kissing-cactus-plants.jpg",
    name: "Prof. Marcus Root",
    specialization: "Succulents & Cacti",
  },
  {
    image:
      "https://previews.123rf.com/images/tatyanagl/tatyanagl2004/tatyanagl200400005/143591298-woman-working-at-garden-female-gardener-outdoors-gardening.jpg",
    name: "Ms. Sophia Bloom",
    specialization: "Flowering Houseplants",
  },
  {
    image:
      "http://www.floretflowers.com/wp-content/uploads/2023/03/Floret-interview-sunflower-steve-kaufer-banner.jpg",
    name: "Mr. Theo Vine",
    specialization: "Climbing & Trailing Plants",
  },
];

const Home = () => {
  const data = useLoaderData();
  const plants = data?.plants || [];

  const topRatedPlants = plants
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 6);

  return (
    <div className="container mx-auto p-4">
      
      <section className="mb-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center text-white"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 text-center px-4">
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    {slide.slogan}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90">
                    Explore our collection of vibrant plants today.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

  
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Top Rated Indoor Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRatedPlants.map((plant) => (
            <CardData key={plant.plantId} data={plant} />
          ))}
        </div>
        {topRatedPlants.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No plants available yet.
          </p>
        )}
      </section>

     
      <section className="mb-12 bg-green-50 py-8 rounded-xl">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Plant Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {careTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Meet Our Green Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {expert.name}
              </h3>
              <p className="text-gray-600 italic">{expert.specialization}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
