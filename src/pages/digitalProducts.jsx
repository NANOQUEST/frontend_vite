import collaborativeLearning from "../assets/collabrative-interactive-learning.jpg";
import personalizedLearning from "../assets/personalized-ai-driven-learning.jpg";
import virtualLearning from "../assets/virtual-and-augment-skill-learning.jpg";
import gamifiedLearning from "../assets/gamified-learning.jpg";
import intelligentTutor from "../assets/intelligent-tutor-system.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
    {
        title: "Collaborative Interactive Learning",
        description:
            "Nanoquest learners work together in groups to actively engage with the learning material, share ideas, and solve problems.",
        image: collaborativeLearning,
    },
    {
        title: "Personalized AI-Driven Learning",
        description:
            "Nanoquest analyzes learners' strengths, weaknesses, and learning styles to create customized learning paths.",
        image: personalizedLearning,
    },
    {
        title: "Virtual and Augmented Skill Learning",
        description:
            "Immersive experiences enhance understanding and retention.",
        image: virtualLearning,
    },
    {
        title: "Gamified Learning",
        description:
            "Game-based learning elements are incorporated to make learning fun and motivating.",
        image: gamifiedLearning,
    },
    {
        title: "Intelligent Tutor System",
        description:
            "Nanoquest provides real-time feedback, answers questions, and offers explanations.",
        image: intelligentTutor,
    },
];

const DigitalProducts = () => {
    return (
        <div className="mt-24">
            <h1 className="mb-10 text-center text-4xl font-bold text-gray-800">
                Digital Products
            </h1>
            <div className="grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-md"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full object-cover object-center"
                        />
                        <div className="flex grow flex-col p-3">
                            <h2 className="mb-3 text-xl font-semibold text-blue-600">
                                {product.title}
                            </h2>
                            <p className="grow text-base text-gray-600">
                                {product.description}
                            </p>
                            <Link to="/products/membership">
                                <button className="mt-3 w-full rounded-md bg-blue-600 px-4 py-2 text-white">
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DigitalProducts;
