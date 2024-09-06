"use client"


import React, { useEffect, useState } from "react";
import { fetchCourses } from "../data/dataService"; // Adjust the path as necessary

const CoursesPage = () => {
  const [courses, setCourses] = useState({ gfg: [], leetcode: [], github: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        
      </div>
      {Object.keys(courses).map((source) => (
        <div key={source} className="mb-8">
          <h2 className="text-2xl font-semibold bg-gray-100 p-4 border border-gray-300 rounded-lg">
            {source.toUpperCase()}
          </h2>
          <ul className="list-none p-0 mt-4">
            {courses[source].map((course) => (
              <li
                key={course.id}
                className="bg-white border border-gray-300 rounded-lg p-4 mb-2 flex justify-between items-center shadow-sm"
              >
                <span className="font-semibold">{course.title}</span>
                <span className="text-gray-600 italic">
                  Progress: {course.progress}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
