// import React, { useState } from "react";
// import axios from "../../axios";
// import { toast } from "react-toastify";
// import "./index.css";

// const INITIAL_FORM_DATA = {
//     name: "",
//     mobile: "",
//     skill: "",
// };

// const RegisterBanner = () => {
//     const [userData, setUserData] = useState(INITIAL_FORM_DATA);
//     const [name, setName] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [skill, setSkill] = useState("");
//     const [availableOptions, setAvailableOptions] = useState([]);

//     const courses = [
//         {
//             skill: "BFSI",
//             options: [
//                 "Accounting",
//                 "Banking",
//                 "Finance",
//                 "Fintech",
//                 "Insurance",
//                 "Investment",
//             ],
//         },
//         {
//             skill: "IT-ITES",
//             options: [
//                 "Programming and Web Development",
//                 "Data Analysis and Analytics",
//                 "Artificial Intelligence",
//                 "Cybersecurity",
//                 "Internet Of Things",
//                 "Blockchain",
//                 "Mobile Applications Development",
//             ],
//         },
//         {
//             skill: "Animation",
//             options: [
//                 "SpGraphic Design and Multimedia",
//                 "Augmented Realty",
//                 "VFX",
//                 "Game tech",
//             ],
//         },
//         {
//             skill: "Science",
//             options: [
//                 "Mathematics",
//                 "Science",
//                 "VFX",
//                 "Game techCritical Thinking and Problem Solving",
//             ],
//         },
//         { skill: "Arts", option: ["Art and Creativity", "Social Studies"] },
//         {
//             skill: "Soft Skills",
//             option: ["Soft Skills and Personal Development"],
//         },
//         { skill: "Entreprenuer", option: ["Business and Entrepreneurship"] },
//         { skill: "Digital Marketing", option: ["Digital Marketing"] },
//         { skill: "Life Skills", option: ["Life Skills"] },
//         {
//             skill: "Kids",
//             option: ["Tech Skills", "Emotional Skills", "English Literacy"],
//         },
//         { skills: "Languages", option: ["Foreign languages"] },
//     ];

//     const handleSkillChange = (e) => {
//         const selectedSkill = e.target.value;
//         setSkill(selectedSkill);

//         const selectedCourse = courses.find(
//             (course) => course.skill === selectedSkill
//         );
//         if (selectedCourse) {
//             setAvailableOptions(selectedCourse.options);
//         } else {
//             setAvailableOptions([]);
//         }
//     };

//     const onRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("/users/register", {
//                 name,
//                 mobile,
//                 skill,
//             });
//             setName("");
//             setMobile("");
//             setSkill("");
//             toast.success("Successfully registered!");
//         } catch (error) {
//             console.error("Error registering:", error);
//         }
//     };

//     return (
//         <div className="w-full">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//                 Online Registration
//             </h2>
//             <p className="text-sm text-gray-400 text-center">
//                 Register now to unlock your potential with our online courses
//             </p>
//             <form onSubmit={onRegister}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         placeholder="Enter your name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Mobile
//                     </label>
//                     <input
//                         type="text"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         placeholder="Enter your mobile number"
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Skill
//                     </label>
//                     <select
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         value={skill}
//                         onChange={handleSkillChange}
//                     >
//                         <option value="">Select a skill</option>
//                         {courses.map((course, index) => (
//                             <option key={index} value={course.skill}>
//                                 {course.skill}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {skill && (
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Options
//                         </label>
//                         <select
//                             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                             disabled={!skill}
//                         >
//                             <option value="">Select an option</option>
//                             {availableOptions.map((option, index) => (
//                                 <option key={index} value={option}>
//                                     {option}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 )}

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RegisterBanner;

// import React, { useState } from "react";
// import axios from "../../axios";
// import { toast } from "react-toastify";
// import "./index.css";

// const INITIAL_FORM_DATA = {
//     name: "",
//     mobile: "",
//     skill: "",
// };

// const RegisterBanner = () => {
//     const [userData, setUserData] = useState(INITIAL_FORM_DATA);
//     const [availableOptions, setAvailableOptions] = useState([]);

//     const courses = [
//         {
//             skill: "BFSI",
//             options: [
//                 "Accounting",
//                 "Banking",
//                 "Finance",
//                 "Fintech",
//                 "Insurance",
//                 "Investment",
//             ],
//         },
//         {
//             skill: "IT-ITES",
//             options: [
//                 "Programming and Web Development",
//                 "Data Analysis and Analytics",
//                 "Artificial Intelligence",
//                 "Cybersecurity",
//                 "Internet Of Things",
//                 "Blockchain",
//                 "Mobile Applications Development",
//             ],
//         },
//         {
//             skill: "Animation",
//             options: [
//                 "SpGraphic Design and Multimedia",
//                 "Augmented Realty",
//                 "VFX",
//                 "Game tech",
//             ],
//         },
//         {
//             skill: "Science",
//             options: [
//                 "Mathematics",
//                 "Science",
//                 "VFX",
//                 "Game techCritical Thinking and Problem Solving",
//             ],
//         },
//         { skill: "Arts", options: ["Art and Creativity", "Social Studies"] },
//         {
//             skill: "Soft Skills",
//             options: ["Soft Skills and Personal Development"],
//         },
//         { skill: "Entrepreneur", options: ["Business and Entrepreneurship"] },
//         { skill: "Digital Marketing", options: ["Digital Marketing"] },
//         { skill: "Life Skills", options: ["Life Skills"] },
//         {
//             skill: "Kids",
//             options: ["Tech Skills", "Emotional Skills", "English Literacy"],
//         },
//         { skill: "Languages", options: ["Foreign languages"] },
//     ];

//     const handleSkillChange = (e) => {
//         const selectedSkill = e.target.value;
//         const foundSkill = courses.find(
//             (course) => course.skill === selectedSkill
//         );
//         setUserData((prevData) => ({
//             ...prevData,
//             skill: selectedSkill,
//         }));
//         setAvailableOptions(foundSkill ? foundSkill.options : []);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const onRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("/users/register", userData);
//             setUserData(INITIAL_FORM_DATA);
//             toast.success("Successfully registered!");
//         } catch (error) {
//             console.error("Error registering:", error);
//             toast.error("Registration failed!");
//         }
//     };

//     return (
//         <div className="w-full">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//                 Online Registration
//             </h2>
//             <p className="text-sm text-gray-400 text-center">
//                 Register now to unlock your potential with our online courses
//             </p>
//             <form onSubmit={onRegister}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         name="name"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         placeholder="Enter your name"
//                         value={userData.name}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Mobile
//                     </label>
//                     <input
//                         type="text"
//                         name="mobile"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         placeholder="Enter your mobile number"
//                         value={userData.mobile}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Skill
//                     </label>
//                     <select
//                         name="skill"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                         value={userData.skill}
//                         onChange={handleSkillChange}
//                     >
//                         <option value="" className="capitalize" disabled>
//                             Select a skill
//                         </option>
//                         {courses.map((course, index) => (
//                             <option
//                                 key={index}
//                                 value={course.skill}
//                                 className="capitalize"
//                             >
//                                 {course.skill}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {userData.skill && (
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">
//                             Options
//                         </label>
//                         <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
//                             <option value="" className="capitalize" disabled>
//                                 Select an option
//                             </option>
//                             {availableOptions.map((option, index) => (
//                                 <option
//                                     key={index}
//                                     value={option}
//                                     className="capitalize"
//                                 >
//                                     {option}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 )}

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RegisterBanner;

import { useState } from "react";
import axios from "../axios";
import { toast } from "react-toastify";

const INITIAL_FORM_DATA = {
    name: "",
    mobile: "",
    skill: "",
};

const RegisterBanner = () => {
    const [userData, setUserData] = useState(INITIAL_FORM_DATA);
    const [availableOptions, setAvailableOptions] = useState([]);
    const [errors, setErrors] = useState({});
    const courses = [
        {
            skill: "BFSI",
            options: [
                "Accounting",
                "Banking",
                "Finance",
                "Fintech",
                "Insurance",
                "Investment",
            ],
        },
        {
            skill: "IT-ITES",
            options: [
                "Programming and Web Development",
                "Data Analysis and Analytics",
                "Artificial Intelligence",
                "Cybersecurity",
                "Internet Of Things",
                "Blockchain",
                "Mobile Applications Development",
            ],
        },
        {
            skill: "Animation",
            options: [
                "SpGraphic Design and Multimedia",
                "Augmented Realty",
                "VFX",
                "Game tech",
            ],
        },
        {
            skill: "Science",
            options: [
                "Mathematics",
                "Science",
                "VFX",
                "Game techCritical Thinking and Problem Solving",
            ],
        },
        { skill: "Arts", options: ["Art and Creativity", "Social Studies"] },
        {
            skill: "Soft Skills",
            options: ["Soft Skills and Personal Development"],
        },
        { skill: "Entrepreneur", options: ["Business and Entrepreneurship"] },
        { skill: "Digital Marketing", options: ["Digital Marketing"] },
        { skill: "Life Skills", options: ["Life Skills"] },
        {
            skill: "Kids",
            options: ["Tech Skills", "Emotional Skills", "English Literacy"],
        },
        { skill: "Languages", options: ["Foreign languages"] },
    ];

    const handleSkillChange = (e) => {
        const selectedSkill = e.target.value;
        const foundSkill = courses.find(
            (course) => course.skill === selectedSkill,
        );
        setUserData((prevData) => ({
            ...prevData,
            skill: selectedSkill,
        }));
        setAvailableOptions(foundSkill ? foundSkill.options : []);
        setErrors((prevErrors) => ({ ...prevErrors, skill: "" })); // Reset skill error if fixed
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Reset specific field error if fixed
    };

    const validateForm = () => {
        const newErrors = {};
        if (!userData.name.trim()) newErrors.name = "Name is required.";
        if (!userData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required.";
        } else if (!/^[0-9]{10}$/.test(userData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }
        if (!userData.skill) newErrors.skill = "Please select a skill.";
        return newErrors;
    };

    const onRegister = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            await axios.post("/users/register", userData);
            setUserData(INITIAL_FORM_DATA);
            setAvailableOptions([]);
            toast.success("Successfully registered!");
        } catch (error) {
            console.error("Error registering:", error);
            toast.error("Registration failed!");
        }
    };

    return (
        <div className="w-full">
            <h2 className="mb-6 text-center text-2xl font-bold">
                Online Registration
            </h2>
            <p className="text-center text-sm text-gray-400">
                Register now to unlock your potential with our online courses
            </p>
            <form onSubmit={onRegister}>
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className={`w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring ${
                            errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        Mobile
                    </label>
                    <input
                        type="text"
                        name="mobile"
                        className={`w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring ${
                            errors.mobile ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your mobile number"
                        value={userData.mobile}
                        onChange={handleInputChange}
                    />
                    {errors.mobile && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.mobile}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        Skill
                    </label>
                    <select
                        name="skill"
                        className={`w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring ${
                            errors.skill ? "border-red-500" : ""
                        }`}
                        value={userData.skill}
                        onChange={handleSkillChange}
                    >
                        <option value="" disabled>
                            Select a skill
                        </option>
                        {courses.map((course, index) => (
                            <option key={index} value={course.skill}>
                                {course.skill}
                            </option>
                        ))}
                    </select>
                    {errors.skill && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.skill}
                        </p>
                    )}
                </div>

                {userData.skill && (
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-bold text-gray-700">
                            Options
                        </label>
                        <select className="w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring">
                            <option value="" disabled>
                                Select an option
                            </option>
                            {availableOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterBanner;
