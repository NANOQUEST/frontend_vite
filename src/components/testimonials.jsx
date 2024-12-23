import { motion } from "framer-motion";

const testimonials = [
    "If you do the job badly enough, sometimes you don't get asked to do it again.",
    "I'm killing time while I wait for life to shower me with meaning and happiness.",
    "The only skills I have the patience to learn are those that have no real application in life.",
];

const Testimonials = () => {
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
                Testimonials
            </motion.h1>

            <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <motion.figure
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className="relative w-full rounded-lg border-t-4 border-[#253e86] bg-white text-center shadow-lg md:max-w-sm"
                    >
                        <figcaption className="relative px-[10%] pb-[12%] pt-[13%]">
                            <div className="absolute left-1/2 top-[-36px] flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-white text-2xl text-[#081F62] shadow-lg">
                                <i className="fa fa-quote-right"></i>
                            </div>

                            <blockquote className="text-base italic text-gray-600">
                                <p className="capitalize text-black">
                                    {testimonial}
                                </p>
                            </blockquote>
                        </figcaption>
                    </motion.figure>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
