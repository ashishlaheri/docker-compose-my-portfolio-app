import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Ashish Kumar Laheri</h1>
        <p className="text-center text-gray-600 mt-2">Azure & Cloud Enthusiast | React Developer</p>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
          <p className="text-gray-600 mt-2">
            Passionate about cloud computing and software development. Experienced in Azure, Docker, Kubernetes, and front-end technologies like React.
          </p>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Azure & Cloud Computing</li>
            <li>React & Frontend Development</li>
            <li>Docker & Kubernetes</li>
            <li>HR-related tasks in Azure</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Certifications</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Azure: Understanding the Big Picture</li>
            <li>Understanding Cloud Fundamentals</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Projects</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>React Application Deployment on Docker</li>
            <li>Step-by-step Guide on Docker to Kubernetes</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Contact</h2>
          <p className="text-gray-600 mt-2">Email: ashish@example.com</p>
          <p className="text-gray-600">LinkedIn: linkedin.com/in/ashishlaheri</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
