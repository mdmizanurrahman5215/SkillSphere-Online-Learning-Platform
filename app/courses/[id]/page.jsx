"use client";

import { coursesData } from "@/data/coursesData";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CourseDetail() {
  const params = useParams();
  const courseId = parseInt(params.id, 10);
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/courses" className="text-blue-600 hover:underline">
              Courses
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold">{course.title}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-blue-100 mb-6">{course.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <p className="text-blue-100">Instructor</p>
                  <p className="font-bold text-lg">{course.instructor}</p>
                </div>
                <div>
                  <p className="text-blue-100">Duration</p>
                  <p className="font-bold text-lg">{course.duration}</p>
                </div>
                <div>
                  <p className="text-blue-100">Level</p>
                  <p className="font-bold text-lg">{course.level}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-xl shadow-xl"
              />
              <div className="bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600">Price</p>
                <p className="text-4xl font-bold text-blue-600 mb-4">
                  ${course.price}
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold hover:from-blue-700 hover:to-blue-900 transition transform hover:scale-105 mb-3">
                  Enroll Now
                </button>
                <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Course Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Students Enrolled</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {(course.students / 1000).toFixed(1)}K
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {course.rating}/5
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {course.duration}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Level</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {course.level}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-600">
                    Comprehensive understanding of core concepts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-600">
                    Hands-on practice with real-world projects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-600">
                    Industry best practices and standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-600">
                    Certification upon course completion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-600">
                    Lifetime access to course materials
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About the Instructor
              </h3>
              <div className="text-center mb-4">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                  alt={course.instructor}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {course.instructor}
                </h4>
                <p className="text-sm text-gray-600">Expert Instructor</p>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Course Rating
              </h3>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(course.rating)
                          ? "text-yellow-400 text-3xl"
                          : "text-gray-300 text-3xl"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {course.rating}
                </p>
                <p className="text-gray-600">
                  Based on {course.students.toLocaleString()} student reviews
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Course Details
              </h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-semibold text-gray-900">
                    {course.category}
                  </p>
                </li>
                <li>
                  <p className="text-sm text-gray-600">Level</p>
                  <p className="font-semibold text-gray-900">{course.level}</p>
                </li>
                <li>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-900">
                    {course.duration}
                  </p>
                </li>
                <li>
                  <p className="text-sm text-gray-600">Students Enrolled</p>
                  <p className="font-semibold text-gray-900">
                    {course.students.toLocaleString()}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
