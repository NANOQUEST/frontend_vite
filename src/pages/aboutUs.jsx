import React from "react";
import aboutUs from "../assets/aboutus.jpg";

const AboutUs = () => {
    return (
        <section className="mt-10 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between space-y-10 md:flex-row md:space-x-10 md:space-y-0">
                    <div className="space-y-6 md:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold leading-snug text-gray-900">
                            Welcome to Nanoquest
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            At Nanoquest, we are dedicated to fostering skill
                            enhancement for online learners in a way that's
                            engaging, inspiring, and effective. Our interactive
                            platform is crafted to help individuals unlock their
                            potential, tailored for a wide range of learning
                            needs—whether you're advancing in your career,
                            exploring new hobbies, or expanding your knowledge.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Our culture revolves around innovation,
                            collaboration, and a passion for learning. We aim to
                            create an inclusive environment where everyone can
                            thrive. Join us on this journey and discover the
                            limitless possibilities that Nanoquest offers.
                        </p>
                        <div>
                            <h3 className="mb-2 mt-8 text-2xl font-semibold text-gray-800">
                                Our Vision
                            </h3>
                            <p className="text-lg text-gray-700">
                                To create a world where everyone can develop the
                                skills necessary to succeed in the digital age.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 mt-8 text-2xl font-semibold text-gray-800">
                                Our Mission
                            </h3>
                            <p className="text-lg text-gray-700">
                                We are committed to providing accessible,
                                high-quality education that empowers individuals
                                to achieve their goals. By bridging the skills
                                gap, we support learners throughout their career
                                journeys with diverse resources and courses.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center md:w-1/2">
                        <img
                            src={aboutUs}
                            alt="About Nanoquest"
                            className="transform rounded-lg shadow-lg transition duration-500 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
