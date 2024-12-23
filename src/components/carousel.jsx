// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Static Next Arrow
// const CustomNextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//         <div
//             className={`${className} custom-arrow slick-next mr-3`}
//             onClick={onClick}
//             style={{
//                 background: "rgba(0, 0, 0, 0.2)",
//                 color: "white",
//                 borderRadius: "50%",
//                 zIndex: 1,
//             }}
//         ></div>
//     );
// };

// // Static Previous Arrow
// const CustomPrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//         <div
//             className={`${className} custom-arrow slick-prev ml-3`}
//             onClick={onClick}
//             style={{
//                 background: "rgba(0, 0, 0, 0.2)",
//                 color: "white",
//                 borderRadius: "50%",
//                 zIndex: 1,
//             }}
//         ></div>
//     );
// };

// // Reusable Carousel Component
// const Carousel = ({
//     data = [], // Array of data for the carousel items
//     renderCard, // Custom layout function for each carousel item
//     settings = {}, // Optional custom slider settings
// }) => {
//     // Determine the maximum slides to show based on the data length
//     const maxSlidesToShow = Math.min(4, data.length); // Default 4 slides, but only show as many as data items

//     // Default slider settings
//     const defaultSettings = {
//         dots: false,
//         Infinite: true,
//         speed: 500,
//         slidesToShow: maxSlidesToShow,
//         slidesToScroll: Math.min(4, data.length), // Ensure slidesToScroll doesn't exceed data length
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: data.length > maxSlidesToShow,
//         nextArrow: <CustomNextArrow />,
//         prevArrow: <CustomPrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1600,
//                 settings: {
//                     slidesToShow: Math.min(4, data.length),
//                     slidesToScroll: Math.min(4, data.length),
//                 },
//             },
//             {
//                 breakpoint: 900,
//                 settings: {
//                     slidesToShow: Math.min(2, data.length),
//                     slidesToScroll: Math.min(2, data.length),
//                 },
//             },
//             {
//                 breakpoint: 540,
//                 settings: {
//                     slidesToShow: Math.min(1, data.length),
//                     slidesToScroll: Math.min(1, data.length),
//                 },
//             },
//         ],
//         ...settings,
//     };

//     return (
//         <div className="slider-container">
//             <Slider {...defaultSettings}>
//                 {data.map((item, index) => (
//                     <div key={index} className="w-full p-3 bg-white">
//                         {renderCard(item, index)}
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Carousel;

// import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Static Next Arrow
// const CustomNextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//         <div
//             className={`${className} custom-arrow slick-next mr-3`}
//             onClick={onClick}
//             style={{
//                 background: "rgba(0, 0, 0, 0.2)",
//                 color: "white",
//                 borderRadius: "50%",
//                 zIndex: 1,
//             }}
//         ></div>
//     );
// };

// // Static Previous Arrow
// const CustomPrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//         <div
//             className={`${className} custom-arrow slick-prev ml-3`}
//             onClick={onClick}
//             style={{
//                 background: "rgba(0, 0, 0, 0.2)",
//                 color: "white",
//                 borderRadius: "50%",
//                 zIndex: 1,
//             }}
//         ></div>
//     );
// };

// // Reusable Carousel Component
// const Carousel = ({
//     data = [], // Array of data for the carousel items
//     renderCard, // Custom layout function for each carousel item
//     settings = {}, // Optional custom slider settings
// }) => {
//     const [showCarousel, setShowCarousel] = useState(true);
//     console.log("data", data);

//     // Function to update the layout based on screen size and number of items
//     const updateLayout = () => {
//         const screenWidth = window.innerWidth;

//         // Define max slides for different screen sizes
//         const maxSlidesToShow =
//             screenWidth >= 1600
//                 ? 4
//                 : screenWidth >= 900
//                 ? 2
//                 : screenWidth >= 540
//                 ? 1
//                 : 1;

//         // If the number of items is less than or equal to max slides, show grid layout
//         console.log(maxSlidesToShow, data.length);
//         console.log(data);

//         if (data.length <= maxSlidesToShow) {
//             setShowCarousel(false);
//         } else {
//             setShowCarousel(true);
//         }
//     };

//     // Update layout on mount and on window resize
//     useEffect(() => {
//         updateLayout();
//         window.addEventListener("resize", updateLayout);
//         return () => {
//             window.removeEventListener("resize", updateLayout);
//         };
//     }, [data.length]);

//     // Default slider settings
//     const defaultSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: Math.min(4, data.length), // Show up to 4 slides
//         slidesToScroll: Math.min(4, data.length),
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: true,
//         nextArrow: <CustomNextArrow />,
//         prevArrow: <CustomPrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1600,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                 },
//             },
//             {
//                 breakpoint: 900,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                 },
//             },
//             {
//                 breakpoint: 540,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//         ...settings,
//     };

//     return showCarousel ? (
//         <div className="slider-container">
//             <Slider {...defaultSettings}>
//                 {data.map((item, index) => (
//                     <div key={index} className="w-full p-3 bg-white">
//                         {renderCard(item, index)}
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {data.map((item, index) => (
//                 <div key={index} className="w-full p-3 bg-white">
//                     {renderCard(item, index)}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Carousel;

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Static Next Arrow
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow slick-next mr-3`}
            onClick={onClick}
            style={{
                background: "rgba(0, 0, 0, 0.2)",
                color: "white",
                borderRadius: "50%",
                zIndex: 1,
            }}
        ></div>
    );
};

// Static Previous Arrow
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow slick-prev ml-3`}
            onClick={onClick}
            style={{
                background: "rgba(0, 0, 0, 0.2)",
                color: "white",
                borderRadius: "50%",
                zIndex: 1,
            }}
        ></div>
    );
};

const Carousel = ({
    data = [], // Array of data for the carousel items
    renderCard, // Custom layout function for each carousel item
    settings = {}, // Optional custom slider settings
}) => {
    const [showCarousel, setShowCarousel] = useState(true);

    // Function to update the layout based on screen size and number of items
    const updateLayout = () => {
        const screenWidth = window.innerWidth;

        // Define max slides for different screen sizes
        const maxSlidesToShow =
            screenWidth >= 1600
                ? 4
                : screenWidth >= 900
                  ? 2
                  : screenWidth >= 540
                    ? 1
                    : 1;

        // Show grid layout if the number of items is less than or equal to max slides
        if (data.length <= maxSlidesToShow) {
            setShowCarousel(false);
        } else {
            setShowCarousel(true);
        }
    };

    // Debounce resize to limit how often updateLayout is called
    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(
                () => func.apply(this, arguments),
                delay,
            );
        };
    };

    useEffect(() => {
        updateLayout();
        const handleResize = debounce(updateLayout, 300);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [data.length]);

    // Default slider settings
    const defaultSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(4, data.length), // Show up to 4 slides
        slidesToScroll: Math.min(4, data.length),
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        ...settings,
    };

    return showCarousel ? (
        <div className="slider-container">
            <Slider {...defaultSettings}>
                {data.map((item, index) => (
                    <div key={index} className="w-full p-3">
                        {renderCard(item, index)}
                    </div>
                ))}
            </Slider>
        </div>
    ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, index) => (
                <div key={index} className="w-full p-3">
                    {renderCard(item, index)}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
