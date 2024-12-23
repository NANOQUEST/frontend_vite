import { useContext, createContext, useEffect, useState } from "react";
import axios from "../axios";
import { toast } from "react-toastify";
import { useAuth } from "./authContext";

const SkillsContext = createContext();

export const useSkills = () => useContext(SkillsContext);

const SkillsProvider = ({ children }) => {
    const { userLoggedIn } = useAuth();
    const [skills, setSkills] = useState([]);
    const [skillsLoading, setSkillsLoading] = useState(true);
    const fetchSkills = async () => {
        setSkillsLoading(true);
        try {
            const response = await axios.get("/skills");
            const formattedSkills = response.data.data.courses.map((skill) => ({
                name: skill.category,
                imageUrl: skill.imgUrl,
                _id: skill._id,
            }));
            setSkills(formattedSkills);
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Error fetching skills data",
            );
            console.error("Error fetching skills data:", error);
        } finally {
            setSkillsLoading(false);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return (
        <SkillsContext.Provider value={{ skills, skillsLoading }}>
            {children}
        </SkillsContext.Provider>
    );
};

export default SkillsProvider;
