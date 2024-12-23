import { useLocation, useNavigate, useParams } from "react-router";
import axios from "../axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Pagination from "../components/pagination";
import SkillCourseCard from "../components/skillCourseCard";

const SkillCategory = () => {
    const [categoryCourses, setCategoryCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageCount, setPageCount] = useState(1);
    const location = useLocation();
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        return params.get("page");
    };

    const [currentPage, setCurrentPage] = useState(getQueryParams() || 1);
    const navigate = useNavigate();
    const { categoryId, skillId } = useParams();
    const coursesPerPage = 10;

    const formateData = (data) => ({
        ...data,
        skills: {
            ...data.skills,
            items: data.skills.items.map((course) => ({
                ...course,
                isDescriptionExpanded: false,
            })),
        },
    });

    const fetchCategoryCourses = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `/skills/${skillId}/${categoryId}`,
                {
                    params: {
                        itemsPage: currentPage,
                        itemsLimit: coursesPerPage,
                    },
                },
            );
            const formattedData = formateData(response.data.data);
            setCategoryCourses(formattedData);
            setPageCount(
                Math.ceil(formattedData.skills.totalItems / coursesPerPage),
            );
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to fetch data.",
            );
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
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
        const courseId = parseInt(customId.split("-")[2]);
        setCategoryCourses((prev) => ({
            ...prev,
            skills: {
                ...prev.skills,
                items: prev.skills.items.map((course, courseIndex) =>
                    courseIndex === courseId
                        ? {
                              ...course,
                              isDescriptionExpanded:
                                  !course.isDescriptionExpanded,
                          }
                        : course,
                ),
            },
        }));
    };

    const handlePageClick = (data) => {
        const selected = data.selected;
        setCurrentPage(selected + 1);
        navigate(`?page=${selected + 1}`);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchCategoryCourses();
    }, [currentPage, skillId]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader />
            </div>
        );
    }

    const { name, items } = categoryCourses?.skills || {};

    return (
        <div className="mt-10 min-h-screen px-4 py-12 md:px-8 lg:px-12">
            <h1 className="mt-10 text-center text-2xl font-bold">
                {name} Courses
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((course) => (
                    <SkillCourseCard
                        item={course}
                        addToCart={addToCart}
                        toggleReadMore={toggleReadMore}
                    />
                ))}
            </div>
            <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
        </div>
    );
};

export default SkillCategory;
