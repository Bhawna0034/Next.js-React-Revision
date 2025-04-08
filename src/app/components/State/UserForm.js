"use client";
import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUser({
        ...user,
        [name]: value
    })
   
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);

  }
  return (
    <div
      className="bg-white p-4 w-[250px] "
      style={{
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Username"
            className="border border-gray-200 p-1 rounded-sm outline-none w-full"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Email"
            className="border border-gray-200 p-1 rounded-sm outline-none w-full"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Password"
            className="border border-gray-200 p-1 rounded-sm outline-none w-full"
          />
        </div>
        <button className="bg-blue-500 text-white w-full px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserForm;
