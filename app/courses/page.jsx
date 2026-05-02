"use client";

import { useState } from "react";
import Link from "next/link";
import { coursesData } from "@/data/coursesData";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(coursesData.map((course) => course.category)),
  ];

  // Filter courses based on category and search
  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-lg text-blue-100">
            Explore {coursesData.length} amazing courses and start your learning journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Courses
                </label>
                <input
                  type="text"
                  placeholder="Search by title, instructor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== "All" || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchTerm("");
                  }}
                  className="w-full mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content - Courses Grid */}
          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-lg text-gray-600">
                    Showing <span className="font-bold">{filteredCourses.length}</span> courses
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      {/* Course Image */}
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {course.category}
                        </span>
                      </div>

                      {/* Course Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {course.title}
                        </h3>

                        <p className="text-sm text-gray-600 mb-3">
                          <span className="font-semibold">By:</span> {course.instructor}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={
                                    i < Math.floor(course.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="font-bold text-sm">{course.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            ({course.students.toLocaleString()})
                          </span>
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-4 pb-4 border-b">
                          <span>⏱️ {course.duration}</span>
                          <span>📊 {course.level}</span>
                        </div>

                        {/* Price and Button */}
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-blue-600">
                            ${course.price}
                          </span>
                          <Link
                            href={`/courses/${course.id}`}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Courses Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchTerm("");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
