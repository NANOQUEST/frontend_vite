// const Membership = () => {
//     const features = [
//         { id: "free_access", name: "Free access for 15 days*" },
//         { id: "custom_homepage", name: "Custom Homepage" },
//         { id: "email_chat_support", name: "Unlimited email and chat support" },
//         { id: "access_100_users", name: "Access for 100 users" },
//         { id: "access_500_users", name: "Access for 500 users" },
//     ];

//     const plans = [
//         {
//             title: "Freemium",
//             features: ["free_access", "custom_homepage", "email_chat_support"],
//         },
//         {
//             title: "Corporate",
//             features: [
//                 "free_access",
//                 "custom_homepage",
//                 "email_chat_support",
//                 "access_100_users",
//             ],
//         },
//         {
//             title: "Enterprise",
//             features: [
//                 "free_access",
//                 "custom_homepage",
//                 "email_chat_support",
//                 "access_500_users",
//             ],
//         },
//     ];

//     return (
//         <div className="">
//             <h1>Membership Plans</h1>
//             <div>
//                 {plans.map((plan, index) => (
//                     <div key={index}>
//                         <h2>{plan.title}</h2>
//                         <ul>
//                             {plan.features.map((featureId, index) => (
//                                 <li key={index}>
//                                     {
//                                         features.find(
//                                             (feature) =>
//                                                 feature.id === featureId
//                                         ).name
//                                     }
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Membership;

const Membership = () => {
    const features = [
        { id: "free_access", name: "Free access for 15 days*" },
        { id: "custom_homepage", name: "Custom Homepage" },
        { id: "email_chat_support", name: "Unlimited email and chat support" },
        { id: "access_100_users", name: "Access for 100 users" },
        { id: "access_500_users", name: "Access for 500 users" },
    ];

    const plans = [
        {
            title: "Freemium",
            features: ["free_access", "custom_homepage", "email_chat_support"],
            price: "Free",
            bgColor: "bg-gray-200",
        },
        {
            title: "Corporate",
            features: [
                "free_access",
                "custom_homepage",
                "email_chat_support",
                "access_100_users",
            ],
            price: "$49/month",
            bgColor: "bg-blue-200",
        },
        {
            title: "Enterprise",
            features: [
                "free_access",
                "custom_homepage",
                "email_chat_support",
                "access_500_users",
            ],
            price: "$99/month",
            bgColor: "bg-green-200",
        },
    ];

    return (
        <div className="mt-16 min-h-screen py-10">
            <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
                Membership Plans
            </h1>
            <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`${plan.bgColor} w-full max-w-md rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl`}
                    >
                        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
                            {plan.title}
                        </h2>
                        <p className="mb-4 text-center text-xl font-bold text-gray-800">
                            {plan.price}
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            {plan.features.map((featureId, index) => (
                                <li key={index} className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-5 w-5 text-green-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {
                                        features.find(
                                            (feature) =>
                                                feature.id === featureId,
                                        ).name
                                    }
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full rounded-lg bg-gray-800 py-2 font-medium text-white transition-colors hover:bg-gray-900">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Membership;
