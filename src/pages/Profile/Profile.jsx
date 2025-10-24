import React from "react";
import "./Profile.css";
import { AiOutlineUser, AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Profile = () => {
  const navigate = useNavigate();

  const user = {
    username: "John Doe",
    email: "john@example.com",
  };

  // const handleLogout = () => {
  //   navigate("/", { replace: true }); // just go home
  // };

  return (
    <div className="profile-banner">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <AiOutlineUser size={50} />
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            className="profile-avatar"
          />
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>

        {/* Quick Actions */}
        <div className="profile-actions">
          <div className="action-card">
            <MdOutlineComputer size={40} />
            <h3>My Orders</h3>
            <p>Manage your orders, wishlist, and purchases.</p>
            <button onClick={() => navigate("/products")}>Visit Store</button>
          </div>

          <div className="action-card">
            <FaBookOpen size={40} />
            <h3>🎓 IT Academy</h3>
            <p>Track your enrolled courses and progress.</p>
            <button onClick={() => navigate("/academy")}>Go to Academy</button>
          </div>

          <div className="action-card">
            <AiOutlineSetting size={40} />
            <h3>Settings</h3>
            <p>Update account info and preferences.</p>
            <button>Edit Profile</button>
          </div>
        </div>

        {/* Logout */}
        <div className="logout-bttn" style={{ display: "flex" }}>
          <button
           onClick={() => navigate("/")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center"
          >
            Home
            <AiOutlineHome className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
