"use client";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [apiData, setApiData] = useState([]); // to store the fetched data
  const [loading, setLoading] = useState(true); // to show loading while data is being fetched
  const [error, setError] = useState(null); // to store any error message

  const API_URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((apiData) => {
        setApiData(apiData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error.message);
    });
  }, []);

  if(loading) return <p> Loading...</p>
  if(error) return <p>{error.message}</p>
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

export default FetchData;
