"use client";
import React, { useEffect, useState } from "react";

const FetchUserData = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const fetchdata = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch User Data");
      }
      const apiData = await response.json();
      setApiData(apiData);
      setLoading(false);
    } catch (error) {
      console.info(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchdata();
  },[]);
  
  if (loading) return <p> Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <table className="w-full text-center border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">UserId</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr key={data.id} className="border-b">
                <td className="border px-4 py-2">{data.id}</td>
                <td className="border px-4 py-2">{data.name}</td>
                <td className="border px-4 py-2">{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchUserData;
