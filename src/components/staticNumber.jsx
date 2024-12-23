import React from "react";
import CountUp from "react-countup";

const CounterProducts = () => {
    return (
        <div className="text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            <CountUp end={5} duration={1} suffix="+" />
        </div>
    );
};

const CounterSkills = () => {
    return (
        <div className="text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            <CountUp end={250} duration={3} suffix="+" />
        </div>
    );
};

const CounterProjects = () => {
    return (
        <div className="text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            <CountUp end={10} duration={3} suffix="+" />
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="my-20 flex justify-around">
            <div className="text-center">
                <h3 className="sm:text-sm md:text-lg lg:text-2xl">Products</h3>
                <CounterProducts />
            </div>
            <div className="text-center">
                <h3 className="sm:text-sm md:text-lg lg:text-2xl">Skills</h3>
                <CounterSkills />
            </div>
            <div className="text-center">
                <h3 className="sm:text-sm md:text-lg lg:text-2xl">
                    Industries
                </h3>
                <CounterProjects />
            </div>
        </div>
    );
};

export default Dashboard;
