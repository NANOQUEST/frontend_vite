import { useParams } from "react-router";

const SkillDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Skill Details</h1>
            <h2>{id}</h2>
        </div>
    );
};

export default SkillDetails;
