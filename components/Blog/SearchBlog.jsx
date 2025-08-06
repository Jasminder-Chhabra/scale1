"use client";
import { useState } from "react";
import blogs from "@/lib/blog";

export default function BlogSearch() {
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredBlogs = blogs.filter((blog) =>
    blog.heading.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-full px-4 mt-10 relative" data-appear="fade-up" data-unload="fade-up">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)} // delay so click can register
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Search blogs..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-1.5 bg-[#7309dd]  focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {focused && (
        <div className="absolute  w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto z-50 text-left py-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.slug}
                className="px-10 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm"
                onMouseDown={() => {
    window.location.href = `/blogs/${blog.slug}`;
  }}
              >
                {blog.heading}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400 text-sm">
              No blogs found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
