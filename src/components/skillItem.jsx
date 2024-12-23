// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import axios from "../axios";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import Loader from "./loader";

// const SkillItem = () => {
//     const { id } = useParams();
//     const [subCourse, setSubCourse] = useState({});
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchSubCourses();
//     }, [id]);

//     const addToCart = async (course_id, course_name, course_price) => {
//         const email = localStorage.getItem("email");
//         try {
//             const response = await axios.post("/enroll/enroll", {
//                 email,
//                 course_id: course_id.toString(),
//                 course_name,
//                 course_price,
//             });
//             if (response.data.success === true) {
//                 toast.success("Added to cart successfully!");
//                 navigate("/cart");
//             } else {
//                 toast.error("Failed to add to cart.");
//             }
//         } catch (error) {
//             toast.error("Error adding to cart.");
//             console.error("Error:", error);
//         }
//     };

//     const fetchSubCourses = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`/skills/${id}`);
//             const formattedSkillsData = {
//                 ...response.data.data,
//                 skills: response.data.data.skills.map((skill) => ({
//                     ...skill,
//                     items: skill.items.map((item) => ({
//                         ...item,
//                         isDescriptionExpanded: false,
//                     })),
//                 })),
//             };

//             setSubCourse(formattedSkillsData);
//         } catch (error) {
//             toast.error(
//                 error?.response?.data?.message || "Error fetching data"
//             );
//             console.error("Error fetching total data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const { category = "", skills = [] } = subCourse;
//     const toggleReadMore = (skillCategoryId, id) => {
//         const updatedSkills = skills.map((skill) => {
//             if (skill._id === skillCategoryId) {
//                 return {
//                     ...skill,
//                     items: skill.items.map((item) => {
//                         if (item._id === id) {
//                             return {
//                                 ...item,
//                                 isDescriptionExpanded:
//                                     !item.isDescriptionExpanded,
//                             };
//                         }
//                         return item;
//                     }),
//                 };
//             }
//             return skill;
//         });

//         setSubCourse({ category, skills: updatedSkills });
//     };

//     const renderSkillCard = (skillCategoryId, item) => {
//         const { _id, title, description, price, isDescriptionExpanded } = item;

//         return (
//             <div className="shadow-lg rounded-lg p-3 bg-white hover:shadow-xl transition-all duration-300 ease-in-out">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     {title}
//                 </h3>
//                 <p className="text-sm text-gray-700 mb-3 capitalize">
//                     {isDescriptionExpanded
//                         ? description
//                         : `${description.slice(0, 150)} ${
//                               description.length > 105 ? "..." : ""
//                           }`}
//                     {description.length > 100 && (
//                         <span
//                             onClick={() => toggleReadMore(skillCategoryId, _id)}
//                             className="text-blue-500 cursor-pointer ml-1"
//                         >
//                             {isDescriptionExpanded ? "Show less" : "Read more"}
//                         </span>
//                     )}
//                 </p>
//                 <div className="flex justify-between items-center mt-4">
//                     <p className="text-blue-600 font-semibold">
//                         {price !== 0 ? `Rs. ${price}` : "Free"}
//                     </p>
//                     <button
//                         onClick={() => addToCart(_id, title, price)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//                     >
//                         Enroll Now
//                     </button>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="min-h-screen py-12">
//             <div className="px-4 mt-10 md:px-8 lg:px-12">
//                 {loading ? (
//                     <div className="min-h-screen flex justify-center items-center">
//                         <Loader />
//                     </div>
//                 ) : (
//                     <>
//                         <h1 className="text-3xl font-bold text-blue-700 text-center mb-7">
//                             {category} Courses
//                         </h1>
//                         {skills.length > 0 ? (
//                             <div className="space-y-7">
//                                 {skills.map((skill) => (
//                                     <div key={skill._id}>
//                                         <h2 className="text-xl font-semibold mb-4 border-b py-2 capitalize">
//                                             {skill.name}
//                                         </h2>
//                                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                                             {skill.items.map((item) => (
//                                                 <>
//                                                     {renderSkillCard(
//                                                         skill._id,
//                                                         item
//                                                     )}
//                                                 </>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <p>No sub-courses available at the moment.</p>
//                         )}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SkillItem;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router";
import axios from "../axios";
import { toast } from "react-toastify";
import Loader from "./loader";
import { MdNavigateNext } from "react-icons/md";
import Pagination from "./pagination";
import SkillCourseCard from "./skillCourseCard";

const SkillItem = () => {
    const { skillId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [subCourse, setSubCourse] = useState({ category: "", skills: [] });
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(1);
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        return params.get("page");
    };
    const [currentPage, setCurrentPage] = useState(getQueryParams() || 1);
    const skillCategoryPerPage = 5;
    const skillsPerCategory = 4;

    const formateSkillCourses = (data) => ({
        ...data,
        skills: data.skills.map((skill) => ({
            ...skill,
            items: skill.items.map((item) => ({
                ...item,
                isDescriptionExpanded: false,
            })),
        })),
    });

    const fetchSkillCourses = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/skills/${skillId}`, {
                params: {
                    skillsPage: currentPage,
                    skillsLimit: skillCategoryPerPage,
                    itemsPage: 1,
                    itemsLimit: skillsPerCategory,
                },
            });

            const formattedData = formateSkillCourses(response.data.data);
            setPageCount(
                Math.ceil(formattedData.totalSkills / skillCategoryPerPage),
            );
            setSubCourse(formattedData);
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Error fetching data",
            );
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (course_id, course_name, course_price) => {
        try {
            const response = await axios.post("/enroll/enroll", {
                email: localStorage.getItem("email"),
                course_id: course_id.toString(),
                course_name,
                course_price,
            });
            if (response.data.success) {
                toast.success("Added to cart successfully!");
                navigate("/cart");
            } else {
                toast.error("Failed to add to cart.");
            }
        } catch (error) {
            toast.error("Error adding to cart.");
            console.error("Error:", error);
        }
    };

    const toggleReadMore = (customId) => {
        const skillCategoryId = parseInt(customId.split("-")[1]);
        const courseId = parseInt(customId.split("-")[2]);

        setSubCourse((prev) => ({
            ...prev,
            skills: prev.skills.map((skill, skillIndex) =>
                skillIndex === skillCategoryId
                    ? {
                          ...skill,
                          items: skill.items.map((item, itemIndex) =>
                              itemIndex === courseId
                                  ? {
                                        ...item,
                                        isDescriptionExpanded:
                                            !item.isDescriptionExpanded,
                                    }
                                  : item,
                          ),
                      }
                    : skill,
            ),
        }));
    };

    const handlePageClick = (data) => {
        const selected = data.selected;
        setCurrentPage(selected + 1);
        navigate(`?page=${selected + 1}`);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchSkillCourses();
    }, [skillId, currentPage]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="mt-10 min-h-screen px-4 py-12 md:px-8 lg:px-12">
            <h1 className="mb-7 text-center text-3xl font-bold text-blue-700">
                {subCourse.category} Courses
            </h1>
            {subCourse.skills.length > 0 ? (
                <div className="space-y-8">
                    {subCourse.skills.map((skill, skillCategoryIndex) => (
                        <div key={skillCategoryIndex} className="">
                            <div className="mb-3 flex items-center justify-between">
                                <h2 className="text-xl font-semibold capitalize">
                                    {skill.name}
                                </h2>
                                {skill.totalItems > skillsPerCategory && (
                                    <Link
                                        to={`${
                                            (currentPage - 1) *
                                                skillCategoryPerPage +
                                            skillCategoryIndex
                                        }`}
                                        replace={false}
                                        className="text-decoration-none text-black"
                                    >
                                        <button className="flex items-center capitalize">
                                            view all
                                            <span className="text-2xl">
                                                <MdNavigateNext />
                                            </span>
                                        </button>
                                    </Link>
                                )}
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {skill.items.map((course) => (
                                    <SkillCourseCard
                                        item={course}
                                        addToCart={addToCart}
                                        toggleReadMore={toggleReadMore}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    <Pagination
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                        currentPage={currentPage}
                    />
                </div>
            ) : (
                <p>No sub-courses available at the moment.</p>
            )}
        </div>
    );
};

export default SkillItem;
