import { motion } from "framer-motion";
import Carousel from "./carousel";

const trendingSkills = [
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349097/Default_artificial_inteliigence_1_eui3pb.jpg",
        title: "Artificial Intelligence",
        description: "Description for Artificial Intelligence",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349179/Default_internetof_things_1_x8jdr0.jpg",
        title: "Full Stack Development",
        description: "Description for Full Stack Development",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349750/Default_fintech_0_lpvjrj.jpg",
        title: "Fintech",
        description: "Description for Fintech",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716347189/Default_virtual_reaity_1_v4tgtp.jpg",
        title: "Game Tech",
        description: "Description for Game Tech",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349240/Default_gaming_technology_1_zrlzc1.jpg",
        title: "Generative AI",
        description: "Description for Generative AI",
    },
];

const TrendingSkills = () => {
    const renderCustomCarouselTrendingSkillsCard = (item) => (
        <div className="flex h-full flex-col gap-2 overflow-hidden rounded-xl bg-white p-2 shadow-md">
            <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl object-cover"
            />
            <h2 className="mt-2 truncate text-nowrap text-center text-lg sm:text-xl">
                {item.title}
            </h2>
        </div>
    );

    return (
        <div className="mt-20">
            <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                className="text-center text-3xl font-semibold capitalize text-gray-500"
            >
                Trending Skills
            </motion.h1>

            <Carousel
                data={trendingSkills}
                renderCard={renderCustomCarouselTrendingSkillsCard}
            />
        </div>
    );
};

export default TrendingSkills;
