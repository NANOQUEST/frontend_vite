import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { useSkills } from "../contexts/skillsContext";

const quickLinks = [
    { title: "Skills", link: "/products/skills" },
    { title: "Blogs" },
    { title: "About Us" },
    { title: "Careers" },
];

const legal = [
    { title: "Privacy Policy" },
    { title: "Terms and Conditions" },
    { title: "Refund and Cancellation" },
];

const socialIcons = [
    { icon: FaFacebook, link: "https://www.facebook.com/nanoquestet" },
    {
        icon: FaInstagram,
        link: "https://www.instagram.com/nanoquesttech/?locale=us&hl=am-et",
    },
    { icon: FaYoutube, link: "https://www.youtube.com/@NANOQUESTEDTECH" },
    { icon: FaXTwitter, link: "https://x.com/nanoquestedtech" },
    {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/company/nanoquesttech",
    },
    {
        icon: FaWhatsapp,
        link: "https://wa.me/918062181169",
    },
];

const cities = [
    "Hyderabad",
    "Bangalore",
    "Pune",
    "Mumbai",
    "Delhi",
    "Ahmedabad",
    "Coimbatore",
    "Chennai",
    "Chandigarh",
    "Noida",
    "Kolkata",
    "Kochi",
    "Bhubaneswar",
    "Visakhapatnam",
    "Vijayawada",
    "Gurgaon",
    "Jaipur",
    "Indore",
    "Kanpur",
    "Nagpur",
    "Madurai",
    "Bhopal",
    "Trivandrum",
    "Guwahati",
    "Patna",
    "Aurangabad",
    "Trichy",
    "Salem",
    "Thane",
    "Kerala",
    "Mysore",
];

const getItemLink = (item) =>
    item?.link ? item.link : `/${item.title.toLowerCase()}`;

const Footer = () => {
    const { skills, skillsLoading } = useSkills();

    return (
        <footer className="mt-20 w-full bg-slate-900 text-gray-300 ~p-3/7">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                <div>
                    <h6 className="mb-3 font-bold capitalize text-gray-400">
                        Quick Links
                    </h6>
                    <ul className="flex flex-col gap-1.5 p-0">
                        {quickLinks.map((item, i) => (
                            <li
                                key={i}
                                className="text-gray-500 hover:text-white"
                            >
                                <Link
                                    to={getItemLink(item)}
                                    className="capitalize text-gray-500 no-underline hover:text-white"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h6 className="mb-3 font-bold capitalize text-gray-400">
                        Legal
                    </h6>
                    <ul className="flex flex-col gap-1.5 p-0">
                        {legal.map((item, i) => (
                            <li
                                key={i}
                                className="text-gray-500 hover:text-white"
                            >
                                <Link
                                    to={getItemLink(item)}
                                    className="capitalize text-gray-500 no-underline hover:text-white"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h6 className="mb-2 font-bold capitalize text-gray-400">
                        Contact Us
                    </h6>
                    <ul className="flex flex-col gap-1.5 p-0">
                        <li className="text-gray-500 hover:text-white">
                            <Link className="flex items-start gap-0.5 text-gray-500 no-underline hover:text-white">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                &nbsp;Wework, Roshini Tech Hub, Bengaluru,
                                Karnataka 560037, India.
                            </Link>
                        </li>

                        <li className="text-gray-500 hover:text-white">
                            <Link className="flex items-center gap-0.5 text-gray-500 no-underline hover:text-white">
                                <FontAwesomeIcon icon={faPhone} />
                                &nbsp; +91-8062181169
                            </Link>
                        </li>

                        <li className="text-gray-500 hover:text-white">
                            <Link className="flex items-center gap-0.5 text-gray-500 no-underline hover:text-white">
                                <FontAwesomeIcon icon={faEnvelope} />
                                &nbsp; support@nanoquesttech.in
                            </Link>
                        </li>
                        <li>
                            <ul className="mt-2 flex items-center p-0 text-2xl ~gap-3/6">
                                {socialIcons.map(
                                    ({ icon: Icon, link }, index) => (
                                        <li
                                            key={index}
                                            className="cursor-pointer bg-slate-900 text-white hover:text-gray-400"
                                        >
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white"
                                            >
                                                <Icon />
                                            </a>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {!skillsLoading && (
                <div className="mt-2">
                    <h6 className="mb-3 font-bold capitalize text-gray-400">
                        Trending Skills
                    </h6>

                    <ul className="space-y-4 p-0">
                        {skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="text-gray-500">
                                <p className="mb-3 text-left font-bold capitalize text-gray-400">
                                    {skill.name}
                                </p>
                                <ul className="flex flex-wrap gap-3 p-0">
                                    {cities.map((city, index) => (
                                        <li
                                            key={index}
                                            className={twMerge(
                                                "pr-2 text-gray-500 hover:text-white",
                                                index === cities.length - 1
                                                    ? "border-0"
                                                    : "border-r-2 border-gray-500",
                                            )}
                                        >
                                            <Link
                                                to={`/products/skills/${skill._id}`}
                                                className="capitalize text-gray-500 no-underline hover:text-white"
                                            >
                                                online skills in {skill.name}{" "}
                                                {city}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mt-4">
                <p className="capitalize text-gray-400">
                    © {new Date().getFullYear()} Nanoquest All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
