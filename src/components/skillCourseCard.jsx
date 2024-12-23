const SkillCourseCard = ({ item, addToCart, toggleReadMore }) => {
    const { _id, title, description, price, isDescriptionExpanded } = item;
    const maxLength = 150;

    return (
        <div className="rounded-lg bg-white p-3 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
            <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
            <p className="mb-3 text-sm capitalize text-gray-700">
                {isDescriptionExpanded
                    ? description
                    : `${description.slice(0, maxLength)}`}

                {description.length > maxLength && !isDescriptionExpanded
                    ? "..."
                    : ""}
                {description.length > maxLength && (
                    <span
                        onClick={() => toggleReadMore(_id)}
                        className="ml-1 cursor-pointer text-blue-500"
                    >
                        {isDescriptionExpanded ? "Show less" : "Read more"}
                    </span>
                )}
            </p>
            <div className="mt-4 flex items-center justify-between">
                <p className="font-semibold text-blue-600">
                    {price !== 0 ? `Rs. ${price}` : "Free"}
                </p>
                <button
                    onClick={() => addToCart(_id, title, price)}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                >
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default SkillCourseCard;
