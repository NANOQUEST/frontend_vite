import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { webinarDetails } from "../constants";
import Carousel from "./carousel";
import { format, isAfter } from "date-fns";
import Loader from "./loader";

const UpcomingWebinar = () => {
    const [upcomingWebinars, setUpcomingWebinars] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUpcomingWebinars = () => {
        setLoading(true);
        const currentDate = new Date();
        const filteredWebinars = webinarDetails.filter((webinar) => {
            const webinarDateTime = new Date(
                `${webinar.date}T${webinar.startTime}`,
            );
            return isAfter(webinarDateTime, currentDate);
        });
        setUpcomingWebinars(filteredWebinars);
        setLoading(false);
    };

    useEffect(() => {
        fetchUpcomingWebinars();
    }, []);

    const handleClick = (url) => {
        window.location.href = url;
    };

    const renderCustomCarouselWebinarCard = (item, index) => {
        const webinarStartTime = new Date(`${item.date}T${item.startTime}`);
        const webinarEndTime = new Date(`${item.date}T${item.endTime}`);
        const formattedDate = format(webinarStartTime, "EEEE, MMMM do, yyyy");
        const formattedStartTime = format(webinarStartTime, "h:mm a");
        const formattedEndTime = format(webinarEndTime, "h:mm a");

        return (
            <div
                key={index}
                className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md"
            >
                <img
                    className="w-full object-cover"
                    src={item.img}
                    alt={item.title}
                />

                <div className="flex min-h-56 flex-col justify-between p-6">
                    <div>
                        <h2 className="text-xl font-bold capitalize text-black">
                            {item.title}
                        </h2>
                        <p className="mt-3 capitalize text-gray-400">
                            {item.description}
                        </p>
                        <p className="mt-1 text-gray-500">
                            Date: {formattedDate}
                        </p>
                        <p className="text-gray-500">
                            Time: {formattedStartTime} - {formattedEndTime}
                        </p>
                    </div>

                    <button
                        className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
                        onClick={() => handleClick(item.registerUrl)}
                    >
                        Register NOW!!
                    </button>
                </div>
            </div>
        );
    };

    const renderUpcomingWebinars = () => {
        if (loading) {
            return <Loader />;
        }
        return (
            <>
                {upcomingWebinars.length > 0 ? (
                    <Carousel
                        data={upcomingWebinars}
                        renderCard={renderCustomCarouselWebinarCard}
                    />
                ) : (
                    <p className="text-center text-gray-500">
                        No upcoming webinars available
                    </p>
                )}
            </>
        );
    };
    if (upcomingWebinars?.length === 0) return null;
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
                className="mb-4 text-center text-3xl font-semibold capitalize text-gray-500"
            >
                Upcoming Webinars
            </motion.h1>
            {renderUpcomingWebinars()}
        </div>
    );
};

export default UpcomingWebinar;
