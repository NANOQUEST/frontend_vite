import "./index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "../../axios";
import Loader from "../../components/loader";
import { toast } from "react-toastify";

const Skills = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/skills");
            setCourses(response.data.data.courses);
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Error fetching skills",
            );
            console.error("Error fetching total data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <>
            <div className="courses-container">
                <h1 className="mb-10 text-center text-2xl font-bold text-blue-700 sm:mt-0">
                    Nanoquest Skills Categories
                </h1>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="card__container">
                        {courses.map((item) => (
                            <article key={item._id} className="card__article">
                                <img
                                    src={item.imgUrl}
                                    alt="image"
                                    className="card__img"
                                />
                                <div className="card__data">
                                    <h2 className="card__title">
                                        {item.category}
                                    </h2>
                                    <Link
                                        to={item._id}
                                        className="card__button"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Skills;
