import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                          alt="React development team"
                          className="rounded-xl shadow-lg w-full object-cover"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Building modern, responsive, and high-performance web applications using standard component architecture, clean code practices, and reactive state management.
                      </p>
                      <p className="mt-4 text-gray-600">
                          Focusing on seamless user experiences, scalable design systems, and efficient routing to deliver fast and reliable web solutions.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}