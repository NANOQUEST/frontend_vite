import linkedin from "../assets/linkedin.png";

const Teams = () => {
    return (
        <div className="h-screen">
            <h2 className="text-center text-2xl text-blue-600">Our Team</h2>
            <div className="mt-16 flex items-center justify-center space-x-16">
                <div className="group relative mb-8 w-72 border-2 border-black bg-white p-8 text-center">
                    <div className="relative mb-12 inline-block h-24 w-24">
                        <a href="https://www.linkedin.com/company/nanoquesttech">
                            <img
                                className="duration-900 h-auto w-full transform rounded-full transition-transform ease-in-out group-hover:scale-75 group-hover:shadow-xl"
                                src={linkedin}
                                alt="team-member"
                            />
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl">Umadevi</h3>
                        <h4 className="text-sm capitalize text-gray-600">
                            Co-Founder
                        </h4>
                    </div>
                </div>

                <div className="group relative mb-8 w-72 border-2 border-black bg-white p-8 text-center">
                    <div className="relative mb-12 inline-block h-24 w-24">
                        <a href="https://www.linkedin.com/company/nanoquesttech">
                            <img
                                className="duration-900 h-auto w-full transform rounded-full transition-transform ease-in-out group-hover:scale-75 group-hover:shadow-xl"
                                src={linkedin}
                                alt="team-member"
                            />
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl">Maheshwara Reddy</h3>
                        <h4 className="text-sm capitalize text-gray-600">
                            Founder and CEO
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;