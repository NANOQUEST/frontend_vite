import { useEffect, useState } from "react";
import axios from "../axios";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import logo from "../assets/NqLogo.png";

const Cart = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const receiptId = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const currency = "INR";
    const amount = totalAmount * 100;

    useEffect(() => {
        const amount = enrolledCourses.reduce(
            (acc, course) => acc + parseInt(course.course_price),
            0,
        );
        setTotalAmount(amount);
    }, [enrolledCourses]);

    const onRemove = (course_id) => {
        axios
            .delete(
                `/enroll/removecourse?email=${email}&course_id=${course_id}`,
            )
            .then((res) => {
                if (res && res.data && res.data.success) {
                    fetchEnrolledCourses();
                    console.log("Course removed successfully");
                } else {
                    console.error("Failed to remove course:", res.data.message);
                }
            })
            .catch((err) => {
                console.error("Error removing course:", err);
            });
    };

    const clearCart = () => {
        axios
            .delete(`/enroll/clearcart`, {
                data: { email },
            })
            .then((res) => {
                if (res && res.data && res.data.success) {
                    console.log("Cart cleared successfully");
                    setEnrolledCourses([]);
                } else {
                    console.error("Failed to clear cart:", res.data.message);
                }
            })
            .catch((err) => {
                console.error("Error clearing cart:", err);
            });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/order", {
                amount,
                currency,
                receipt: receiptId,
            });

            const order = response.data;

            const options = {
                key: "rzp_live_nFbyXwX5uLy23R",
                amount,
                currency,
                name: "NANOQUEST LLP",
                description: "Test Transaction",
                image: { logo },
                order_id: order.id,
                handler: async function (response) {
                    const body = { ...response };

                    const validateRes = await axios.post(
                        "/order/validate",
                        body,
                    );
                    console.log(validateRes.data);
                    const jsonRes = validateRes.data;
                    if (jsonRes.msg == "success") {
                        await enrolledUserCourses(
                            jsonRes.orderId,
                            jsonRes.paymentId,
                        );
                        clearCart();
                        setPopupMessage("Successfully enrolled in courses!");
                    } else {
                        setPopupMessage(
                            "Payment validation failed. Please try again.",
                        );
                    }
                    setShowPopup(true);
                    setTimeout(() => setShowPopup(false), 3000);
                },
                prefill: {
                    name,
                    email,
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                console.error("Payment failed:", response.error);
                setPopupMessage("Payment failed. Please try again.");
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            });
            rzp1.open();
        } catch (error) {
            console.error("Error during order creation:", error);
            setPopupMessage(
                "An error occurred during order creation. Please try again.",
            );
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
        }
    };

    const enrolledUserCourses = async (orderId, paymentId) => {
        try {
            const email = localStorage.getItem("email");
            const course_ids = enrolledCourses.map(
                (course) => course.course_id,
            );
            const order_id = orderId;
            const payment_id = paymentId;

            await axios.post("/enroll/createpaidcourses", {
                email,
                course_ids,
                order_id,
                payment_id,
            });
        } catch (err) {
            console.error(
                "Error adding enrolled courses to the database:",
                err,
            );
        }
    };

    useEffect(() => {
        fetchEnrolledCourses();
    }, []);

    const fetchEnrolledCourses = () => {
        axios
            .get(`/enroll/enrolledcourses?email=${email}`)
            .then((res) => {
                if (res && res.data && res.data.success) {
                    setEnrolledCourses(res.data.enrolledCourses);
                } else {
                    console.error(
                        "Failed to fetch enrolled courses:",
                        res.data.message,
                    );
                }
            })
            .catch((err) => {
                console.error("Error fetching enrolled courses:", err);
            });
    };

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-6xl px-4 pt-20">
                <h2 className="mb-6 text-center text-2xl text-gray-800">
                    Bag Your Skills
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="grid grid-cols-1 gap-4">
                            {enrolledCourses.length <= 0 ? (
                                <h4 className="text-center text-xl text-gray-500">
                                    Your Cart is Empty
                                </h4>
                            ) : (
                                <>
                                    <h3 className="mb-4 text-xl font-semibold text-zinc-700">
                                        Course Name
                                    </h3>
                                    {enrolledCourses.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md"
                                        >
                                            <h4 className="text-sm font-semibold text-gray-400">
                                                {item.course_name}
                                            </h4>
                                            <div className="flex flex-row justify-between gap-5">
                                                <p className="text-xl text-gray-600">
                                                    Rs.{item.course_price}
                                                </p>
                                                <FaTrash
                                                    onClick={() =>
                                                        onRemove(item.course_id)
                                                    }
                                                    className="cursor-pointer text-red-500 hover:text-red-600"
                                                    size={24}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                            <p>
                                Total: <FontAwesomeIcon icon={faRupeeSign} />{" "}
                                {totalAmount}
                            </p>
                            <Link to="/skills">
                                <button className="mx-1 mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                                    Add More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="rounded border border-gray-300 bg-amber-200 p-4 shadow-md lg:max-h-[300px]">
                        <h3 className="bg-transparent text-xl font-semibold text-gray-800">
                            Summary
                        </h3>
                        <p>
                            Total Enrolled Skills:{" "}
                            <span className="bg-transparent">
                                {enrolledCourses.length}
                            </span>
                        </p>
                        <div className="flex flex-col items-center bg-transparent lg:flex-row">
                            <button
                                className="mx-1 mb-2 mt-2 flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 lg:mb-0 lg:mt-0"
                                onClick={handleCheckout}
                                disabled={enrolledCourses.length <= 0}
                            >
                                <FaShoppingCart className="mr-2 bg-transparent" />
                                Checkout
                            </button>
                            <button
                                onClick={clearCart}
                                className="mb-2 mt-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                                disabled={enrolledCourses.length <= 0}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="rounded bg-white p-6 shadow-md">
                        <h3 className="mb-4 text-xl font-semibold">
                            {popupMessage}
                        </h3>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
