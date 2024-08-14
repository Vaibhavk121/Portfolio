import React from 'react';

function Projects() {
  return (
    <section id="projects" className="container mx-auto p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Vena AI</h3>
          <p className="text-gray-600">A multi-functional AI tool with video creation, image generation, and code creation capabilities.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Pdf.info</h3>
          <p className="text-gray-600">A tool that allows users to chat with PDFs, making document interaction intuitive.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Projects;
