const Careers = () => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-teal-400 to-blue-300 bg-cover pt-24">
            <h3 className="text-darkblue bg-transparent text-xl font-medium">
                Join Skill Revolution Platform
            </h3>

            {[
                "HR Associate",
                "Graphic Designer",
                "Full Stack Developer",
                "Content",
                "Digital Marketing",
                "Sales",
            ].map((role) => (
                <div
                    key={role}
                    className="my-4 flex w-96 justify-between gap-2 rounded-lg border border-gray-300 bg-white p-4 shadow-md"
                >
                    <h4 className="text-lg">{role}</h4>
                    <a href="https://airtable.com/app8mmy650SSrbZWy/pagiwmghHbjSG2Baq/form">
                        <button className="rounded-sm bg-blue-600 px-4 py-2 text-xs text-white hover:border-2 hover:border-blue-600 hover:bg-transparent hover:text-blue-600">
                            Apply
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Careers;
