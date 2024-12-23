import { Dropdown, Space, Spin, Avatar, Drawer, Collapse } from "antd";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAuth } from "../contexts/authContext";
import { useSkills } from "../contexts/skillsContext";
import { UserOutlined } from "@ant-design/icons";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/NqLogo.png";

const NavLinkItem = ({ label, to = `/${label.toLowerCase()}` }) => (
    <Link to={to} className="text-decoration-none text-black">
        <li className="rounded-md p-1.5 capitalize hover:bg-gray-100">
            {label}
        </li>
    </Link>
);

const NavBar = () => {
    const {
        currentUser,
        userLoggedIn,
        authLoading,
        getUserSessionData,
        handleLogout,
        setLoginPopupVisibility,
    } = useAuth();
    const { email, username } = getUserSessionData();
    const { skills, skillsLoading } = useSkills();
    const [isOpen, setOpen] = useState(false);

    const appendViewAllItem = (items) => [
        ...items,
        { label: "View All", link: "" },
    ];

    const createDropdownItems = (items, baseLink) => {
        if (!userLoggedIn) {
            return [
                {
                    key: "login",
                    label: (
                        <button
                            className="capitalize"
                            onClick={() => {
                                setLoginPopupVisibility(true);
                            }}
                        >
                            Login to see
                        </button>
                    ),
                },
            ];
        }

        return items.map((item, index) => ({
            key: `${item.label}-${index}`,
            label: item.subItems ? (
                <Dropdown
                    menu={{
                        items: item.loading
                            ? [
                                  {
                                      key: "loading",
                                      label: (
                                          <div className="flex w-full items-center justify-center">
                                              <Spin size="small" />
                                          </div>
                                      ),
                                  },
                              ]
                            : item.subItems.map((subItem, subIndex) => ({
                                  key: `${item.label}-${subIndex}`,
                                  label: (
                                      <Link
                                          to={`${baseLink}/${item.link}/${subItem.link}`}
                                          className="text-decoration-none capitalize"
                                      >
                                          {subItem.label}
                                      </Link>
                                  ),
                              })),
                    }}
                    arrow
                    trigger={["click", "hover"]}
                >
                    <Space className="flex w-full items-center justify-between capitalize">
                        {item.label}
                        <MdKeyboardArrowRight />
                    </Space>
                </Dropdown>
            ) : (
                <Link
                    to={`${baseLink}/${item.link}`}
                    className="text-decoration-none capitalize"
                >
                    {item.label}
                </Link>
            ),
        }));
    };

    const navLgItems = [
        { label: "Home", link: "/" },
        {
            label: "Products",
            baseLink: "/products",
            dropdownItems: [
                {
                    label: "Skills",
                    link: "skills",
                    loading: skillsLoading,
                    subItems: skillsLoading
                        ? []
                        : appendViewAllItem(
                              skills.map((skill) => ({
                                  label: skill.name,
                                  link: skill._id,
                              })),
                          ),
                },
                { label: "Digital Products", link: "Digital Products" },
                { label: "Membership", link: "Membership" },
                {
                    label: "Skill Learners Community",
                    link: "Skill Learners Community",
                },
                { label: "Webinars", link: "webinars" },
            ],
        },
        {
            label: "Company",
            dropdownItems: ["About Us", "Contact Us", "Careers", "Teams"].map(
                (item) => ({ label: item, link: item.toLowerCase() }),
            ),
        },
    ];

    const navSmItems = [
        {
            key: "1",
            label: "Products",
            children: (
                <ul className="flex flex-col gap-1.5 p-0">
                    {[
                        "nast",
                        "natage",
                        "napin",
                        "elytics",
                        "skill intelligence",
                    ].map((product) => (
                        <NavLinkItem
                            key={product}
                            label={product}
                            to={`/products/${product}`}
                        />
                    ))}
                    <li>
                        <Collapse
                            className="border-none bg-transparent"
                            items={[
                                {
                                    key: "2",
                                    label: "Skills",
                                    children: (
                                        <ul className="flex flex-col gap-1.5 p-0">
                                            {skills.map((skill) => (
                                                <NavLinkItem
                                                    key={skill._id}
                                                    label={skill.name}
                                                    to={`/products/skills/${skill._id}`}
                                                />
                                            ))}
                                            <NavLinkItem
                                                label="View All"
                                                to="/products/skills"
                                            />
                                        </ul>
                                    ),
                                },
                            ]}
                        />
                    </li>
                    <NavLinkItem label="Webinars" to="/products/webinars" />
                </ul>
            ),
        },
        {
            key: "2",
            label: "Company",
            children: (
                <ul className="p-0">
                    {["about us", "contact us", "careers", "teams"].map(
                        (item) => (
                            <NavLinkItem
                                key={item}
                                label={item}
                                to={`/${item}`}
                            />
                        ),
                    )}
                </ul>
            ),
        },
    ];

    const userProfileDropDownItems = [
        {
            key: 0,
            label: (
                <p className="m-0 p-0 capitalize text-black">Hi, {username}</p>
            ),
        },
        {
            key: 1,
            label: (
                <Link
                    to="/user/profile"
                    className="text-decoration-none capitalize"
                >
                    Profile
                </Link>
            ),
        },
        {
            key: 2,
            label: (
                <Link
                    to="/cart"
                    className="text-decoration-none flex items-center gap-1.5 capitalize"
                >
                    <span>Cart</span>
                    <AiOutlineShoppingCart />
                </Link>
            ),
        },
        {
            key: 3,
            label: (
                <button
                    onClick={handleLogout}
                    className="w-full rounded-md bg-red-600 px-2 py-1 capitalize text-white transition-colors duration-300 hover:bg-red-700"
                >
                    Logout
                </button>
            ),
        },
    ];

    const DrawerContent = () => (
        <Drawer
            title="Basic Drawer"
            placement="top"
            onClose={() => setOpen(false)}
            open={isOpen}
            key="top"
            className="bg-white"
        >
            <ul className="m-0 flex flex-col p-0 outline">
                <NavLinkItem label="Home" to="/" />
                <Collapse
                    items={navSmItems}
                    className="border-none bg-transparent"
                />

                {userLoggedIn ? (
                    <Dropdown
                        menu={{ items: userProfileDropDownItems }}
                        trigger={["click", "hover"]}
                        arrow
                    >
                        <Space>
                            <Avatar
                                icon={<UserOutlined />}
                                className="cursor-pointer"
                            />
                        </Space>
                    </Dropdown>
                ) : (
                    <li
                        className="cursor-pointer rounded-lg bg-blue-800 px-4 py-2 capitalize text-white hover:bg-blue-900"
                        onClick={() => setLoginPopupVisibility(true)}
                    >
                        Register for new Skills
                    </li>
                )}
            </ul>
        </Drawer>
    );

    return (
        <nav className="bg-light fixed top-0 z-50 flex w-full items-center justify-between bg-white shadow-sm ~px-2/4 ~py-2/4">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                </Link>
            </div>
            <ul className="m-0 hidden items-center p-0 md:flex md:~gap-4/6">
                {navLgItems.map((item) => (
                    <li key={item.label}>
                        {item.dropdownItems ? (
                            <Dropdown
                                menu={{
                                    items: createDropdownItems(
                                        item.dropdownItems,
                                        item.baseLink ?? "",
                                    ),
                                }}
                                trigger={["click", "hover"]}
                                arrow
                            >
                                <Space className="group">
                                    {item.label}
                                    <IoIosArrowDown className="transform transition-transform delay-75 duration-300 group-hover:rotate-180" />
                                </Space>
                            </Dropdown>
                        ) : (
                            <Link
                                to={item.link}
                                className="text-decoration-none capitalize"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
                {userLoggedIn ? (
                    <li>
                        <Dropdown
                            menu={{ items: userProfileDropDownItems }}
                            trigger={["click", "hover"]}
                            arrow
                        >
                            <Space>
                                <Avatar
                                    icon={<UserOutlined />}
                                    className="cursor-pointer"
                                />
                            </Space>
                        </Dropdown>
                    </li>
                ) : (
                    <li
                        className="cursor-pointer rounded-lg bg-blue-800 px-4 py-2 capitalize text-white hover:bg-blue-900"
                        onClick={() => setLoginPopupVisibility(true)}
                    >
                        Register for new Skills
                    </li>
                )}
            </ul>
            <button className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <DrawerContent />
            </button>
        </nav>
    );
};

export default NavBar;
