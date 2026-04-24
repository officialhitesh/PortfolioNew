import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-10 bg-gray-800 fixed top-0">
        <h1 className="text-2xl font-bold text-blue-400">Hitesh</h1>
        <ul className="flex gap-6">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li> 
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-32">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Hitesh Kumar</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Machine Learning Enthusiast | Web Developer | B.Tech IT Student
        </p>

        <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          View Projects
        </button>
      </div>

      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          <span className="bg-gray-800 px-4 py-2 rounded">Java</span>
          <span className="bg-gray-800 px-4 py-2 rounded">Python</span>
          <span className="bg-gray-800 px-4 py-2 rounded">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded">Machine Learning</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        © 2026 Hitesh Kumar. All rights reserved.
      </footer>

    </div>
  );
}

export default Home;