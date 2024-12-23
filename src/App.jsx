import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Contactus from "./pages/contactUs";
import Skills from "./pages/skills";
import SkillItem from "./components/skillItem";
import Cart from "./pages/cart";
import Resetpassword from "./pages/ResetPassword";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog/Blog1";
import Blog2 from "./pages/Blog/Blog2";
import Blog3 from "./pages/Blog/Blog3";
import Aboutus from "./pages/aboutUs";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsAndConditions from "./pages/termsAndConditions";
import ReturnsAndRefunds from "./pages/returnAndRefunds";
import Teams from "./pages/teams";
import Careers from "./pages/careers";
import NotFound from "./pages/notFound";
import BackgroundVideo from "./components/backgroundVideo";
import Webinars from "./components/webinars";
import AuthProvider from "./contexts/authContext";
import SkillsProvider from "./contexts/skillsContext";
import ProtectedRoute from "./components/protectedRoute";
import SkillCategory from "./pages/skillCategory";
import Layout from "./components/layout";
import DigitalProducts from "./pages/digitalProducts";
import Membership from "./pages/membership";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const [cartCourses, setCartCourses] = useState([]);

    const addToCart = (course) => {
        setCartCourses([...cartCourses, course]);
    };

    return (
        <AuthProvider>
            <SkillsProvider>
                <BrowserRouter>
                    <ToastContainer />
                    <BackgroundVideo />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/blogs" element={<Blog />} />
                            <Route path="/contact us" element={<Contactus />} />

                            <Route path="/about us" element={<Aboutus />} />
                            <Route
                                path="/privacy policy"
                                element={<PrivacyPolicy />}
                            />
                            <Route
                                path="/terms and conditions"
                                element={<TermsAndConditions />}
                            />
                            <Route
                                path="/refund and cancellation"
                                element={<ReturnsAndRefunds />}
                            />
                            <Route path="/blog1" element={<Blog1 />} />
                            <Route path="/blog2" element={<Blog2 />} />
                            <Route path="/blog3" element={<Blog3 />} />

                            {/* Protected Routes */}
                            <Route element={<ProtectedRoute />}>
                                {/* <Route path="/skills">
                                    <Route index element={<Skills />} />
                                    <Route path=":skillId">
                                        <Route index element={<SkillItem />} />
                                        <Route
                                            path=":categoryId"
                                            element={<SkillCategory />}
                                        />
                                    </Route>
                                </Route> */}

                                <Route
                                    path="/cart"
                                    element={<Cart courses={cartCourses} />}
                                />
                                <Route
                                    path="/resetpassword"
                                    element={<Resetpassword />}
                                />
                                <Route path="/teams" element={<Teams />} />
                                <Route path="/careers" element={<Careers />} />

                                <Route path="products">
                                    <Route
                                        path="webinars"
                                        element={<Webinars />}
                                    />

                                    <Route path="skills">
                                        <Route index element={<Skills />} />
                                        <Route path=":skillId">
                                            <Route
                                                index
                                                element={<SkillItem />}
                                            />
                                            <Route
                                                path=":categoryId"
                                                element={<SkillCategory />}
                                            />
                                        </Route>
                                    </Route>

                                    <Route
                                        path="digital products"
                                        element={<DigitalProducts />}
                                    />
                                    <Route
                                        path="membership"
                                        element={<Membership />}
                                    />
                                </Route>
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFound status={404} />} />
                    </Routes>
                </BrowserRouter>
            </SkillsProvider>
        </AuthProvider>
    );
};

export default App;
