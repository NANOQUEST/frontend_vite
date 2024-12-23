import { useState, useEffect } from "react";
import { webinarDetails } from "../constants";
import { format, isBefore, compareDesc } from "date-fns";

const Webinars = () => {
    const [pastWebinars, setPastWebinars] = useState([]);

    const fetchPastWebinars = () => {
        const currentDate = new Date();
        // Filter webinars that have already ended
        const filteredWebinars = webinarDetails.filter((webinar) => {
            const webinarEndDateTime = new Date(
                `${webinar.date}T${webinar.endTime}`,
            );
            return isBefore(webinarEndDateTime, currentDate);
        });

        // Sort webinars by date in descending order (most recent first)
        const sortedWebinars = filteredWebinars.sort((a, b) => {
            const aEndDateTime = new Date(`${a.date}T${a.endTime}`);
            const bEndDateTime = new Date(`${b.date}T${b.endTime}`);
            return compareDesc(aEndDateTime, bEndDateTime);
        });

        setPastWebinars(sortedWebinars);
    };

    useEffect(() => {
        fetchPastWebinars();
    }, []);

    return (
        <div className="mt-20">
            <h1 className="text-center text-3xl font-semibold capitalize text-gray-500">
                Past Webinars
            </h1>

            {pastWebinars.length > 0 ? (
                <div className="grid grid-cols-1 justify-items-center gap-8 p-5 sm:grid-cols-2 md:grid-cols-3 md:p-4">
                    {pastWebinars.map((webinar, index) => {
                        const webinarStartTime = new Date(
                            `${webinar.date}T${webinar.startTime}`,
                        );
                        const webinarEndTime = new Date(
                            `${webinar.date}T${webinar.endTime}`,
                        );

                        const formattedDate = format(
                            webinarStartTime,
                            "EEEE, MMMM do, yyyy",
                        );
                        const formattedStartTime = format(
                            webinarStartTime,
                            "h:mm a",
                        );
                        const formattedEndTime = format(
                            webinarEndTime,
                            "h:mm a",
                        );

                        return (
                            <div
                                key={index}
                                className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md"
                            >
                                <img
                                    className="w-full object-cover"
                                    src={webinar.img}
                                    alt={webinar.title}
                                />

                                <div className="min-h-50 flex flex-col justify-between p-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-black">
                                            {webinar.title}
                                        </h2>
                                        <p className="mt-3 text-gray-400">
                                            {webinar.description}
                                        </p>
                                        <p className="mt-1 text-gray-500">
                                            Date: {formattedDate}
                                        </p>
                                        <p className="text-gray-500">
                                            Time: {formattedStartTime} -{" "}
                                            {formattedEndTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="text-center text-gray-500">
                    No past webinars available
                </p>
            )}
        </div>
    );
};

export default Webinars;
