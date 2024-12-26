import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import desktopImg from "../assets/desktop-landing-image.jpg";
import serviceImg1 from "../assets/service-img-1.avif";
import serviceImg2 from "../assets/service-img-2.avif";
import serviceImg3 from "../assets/service-img-3.avif";
import wcu1 from "../assets/wcu-1.avif";
import wcu2 from "../assets/wcu-2.avif";
import { useNavigate } from "react-router";
import StaticNumber from "../components/staticNumber";
import UpcomingWebinar from "../components/upcomingWebinars";
import TrendingSkills from "../components/trendingSkills";
import Testimonials from "../components/testimonials";
import { useAuth } from "../contexts/authContext";

const Hero = () => {
    const navigate = useNavigate();
    const { setLoginPopupVisibility, userLoggedIn } = useAuth();

    const blognavigate = (event) => {
        const btnid = event.target.id;
        if (btnid === "button1") {
            navigate("/blog1");
        } else if (btnid === "button2") {
            navigate("/blog2");
        }
    };

    const handleUpgradeSkills = () => {
        if (userLoggedIn) {
            navigate("/products/skills");
        } else {
            setLoginPopupVisibility(true);
        }
    };

    const typeWriter = () => {
        const text = ["NanoQuest", "skill learning platform"];
        return (
            <Typewriter
                words={text}
                loop={true}
                cursor
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        );
    };

    return (
        <div className="relative overflow-hidden px-4 md:px-8 lg:px-16">
            <div className="my-14 flex flex-col sm:mt-28 sm:flex-row sm:items-center sm:justify-around">
                {/* <div className="self-center sm:order-1">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        src={desktopImg}
                        alt="dresses to be noticed"
                        className="w-full max-w-lg"
                        loading="lazy"
                    />
                </div> */}

                <div className="mt-3 sm:mt-0 sm:w-2/3 sm:max-w-screen-md">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-3xl font-bold capitalize text-blue-900 md:text-4xl lg:text-5xl"
                    >
                        Welcome To{" "}
                        <span className="capitalize">{typeWriter()}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="mt-4 text-lg text-gray-500 md:text-xl"
                    >
                        Explore our wide range of skill courses to enhance your
                        knowledge and expertise. Learn at your own pace with our
                        E-learning platform.
                    </motion.p>
                    <div className="flex items-center gap-4">
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                x: { type: "string", stiffness: 60 },
                                opacity: { duration: 0.6 },
                                ease: "easeIn",
                                duration: 1,
                            }}
                            className="glow-on-hover mt-4 rounded-lg bg-blue-900 px-6 py-2 text-sm text-white"
                            type="button"
                            onClick={handleUpgradeSkills}
                        >
                            Upgrade Your Skills
                        </motion.button>

                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                x: { type: "string", stiffness: 60 },
                                opacity: { duration: 0.6 },
                                ease: "easeIn",
                                duration: 1,
                            }}
                            className="glow-on-hover mt-4 rounded-lg bg-blue-900 px-6 py-2 text-sm text-white"
                            type="button"
                        >
                            Corporate/Universities/Colleges/Schools
                        </motion.button>
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                x: { type: "string", stiffness: 60 },
                                opacity: { duration: 0.6 },
                                ease: "easeIn",
                                duration: 1,
                            }}
                            className="glow-on-hover mt-4 rounded-lg bg-blue-900 px-6 py-2 text-sm text-white"
                            type="button"
                        >
                            Partner with us
                        </motion.button>
                    </div>
                </div>
            </div>

            <StaticNumber />
            <UpcomingWebinar />
            <TrendingSkills />

            <div className="mt-20 bg-blue-950 p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-3 rounded-lg sm:flex-row sm:items-center">
                        <div className="sm:order-1">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg1}
                                alt="service-img"
                                className="h-auto w-full rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Skill Courses
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base text-white"
                            >
                                Choose from a wide range of skill courses
                                designed to help you develop and master new
                                skills.
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 rounded-lg sm:flex-row sm:items-center">
                        <div className="">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg2}
                                alt="service-img"
                                className="h-auto w-full rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Real-time Feedback
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base text-white"
                            >
                                Get instant feedback and personalized
                                recommendations to improve your learning.
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 rounded-lg sm:flex-row sm:items-center">
                        <div className="sm:order-1">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg3}
                                alt="service-img"
                                className="h-auto w-full rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Interactive Quizzes
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base text-white"
                            >
                                Test your knowledge and track your progress with
                                our interactive quizzes.
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 rounded-lg sm:flex-row sm:items-center">
                        <div className="">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg1}
                                alt="service-img"
                                className="h-auto w-full rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Personalized and invent new learning experience
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base text-white"
                            >
                                Personalized skill learner experience with high
                                relevant content and products
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Testimonials /> */}

            {/* card section */}
            {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 p-6 gap-4 justify-items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="rounded-lg p-4 shadow-md max-w-lg bg-white"
                >
                    <img
                        alt="Skillbased elearning"
                        src={wcu1}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-foreground">
                        Why Choose NanoQuest for Skillbased elearning
                    </h2>
                    <p className="text-black mb-2">
                        Discover the power of skillbased interactive elearning
                        with NanoQuest. Enhance your knowledge and expertise in
                        a fun and engaging way. Join our platform today!
                    </p>
                    <span className="text-muted-foreground">
                        <button
                            id="button1"
                            onClick={blognavigate}
                            className="bg-blue-500 text-white p-2 rounded-xl 
                            hover:bg-blue-700
                            "
                        >
                            Read More
                        </button>
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="rounded-lg p-4 shadow-md max-w-lg bg-white"
                >
                    <img
                        alt="Revolutionizing e-learning"
                        src={wcu2}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-foreground">
                        How NanoQuest Revolutionizes learning
                    </h2>
                    <p className="text-black mb-2">
                        Experience a new era of e-learning with NanoQuest. Our
                        skillbased interactive platform offers a unique and
                        effective way to learn. Discover the features that make
                        NanoQuest the leading choice for online education.
                    </p>
                    <span className="text-muted-foreground">
                        <button
                            id="button2"
                            onClick={blognavigate}
                            className="bg-blue-500 text-white p-2 rounded-xl 
                            hover:bg-blue-700
                            "
                        >
                            Read More
                        </button>
                    </span>
                </motion.div>
            </div> */}
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Hero;
