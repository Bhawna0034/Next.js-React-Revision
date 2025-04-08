"use client";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [apiData, setApiData] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((apiData) => setApiData(apiData))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return <div>
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
                return <tr key={data.id} className="border-b">
                    <td className="border px-4 py-2">{data.id}</td>
                    <td className="border px-4 py-2">{data.name}</td>
                    <td className="border px-4 py-2">{data.email}</td>
                </tr>
            })}
        </tbody>
    </table>
  </div>;
};

export default FetchData;
