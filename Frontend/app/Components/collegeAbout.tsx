// component for displaying the about page for college

import React from "react";
interface objectProps {
    Highlights : string,
    Courses : string,
    Fees : string,
    Placements : string,
    Scholarships : string,
    Reviews : string
    AdmissionProcess : string,
}

export default function CollegeAbout(
    {
        Highlights,
        Courses,
        AdmissionProcess,
        Fees,
        Placements,
        Scholarships,
        Reviews
    }: objectProps

) {
    return (
      <div>

          <div id="college-info" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">IIIT Delhi Highlights 2024</h2>
              <p className="mt-2 text-gray-300 text-justify">{Highlights}</p>
          </div>

          {/* Courses  */}

          <div id="courses" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">Courses</h2>
              <p className="mt-2 text-gray-300 text-justify">{Courses}</p>
          </div>

          {/* Admission Process */}
          <div id="admissions" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">IIIT Delhi Admission Process and Important Dates 2024</h2>
              <p className="mt-2 text-gray-300 text-justify">{AdmissionProcess}</p>
          </div>

          {/* Fees */}

          <div id="fees" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">Fees</h2>
              <p className="mt-2 text-gray-300 text-justify">{Fees}</p>
          </div>

          {/* Placements */}

          <div id="placements" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">Placements</h2>
              <p className="mt-2 text-gray-300 text-justify">{Placements}</p>
          </div>

          {/* Scholarships */}

          <div id="scholarships" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">Scholarships</h2>
              <p className="mt-2 text-gray-300 text-justify">{Scholarships}</p>
          </div>

          {/* reviews */}

          <div id="reviews" className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
              <h2 className="text-xl font-semibold">reviews</h2>
              <p className="mt-2 text-gray-300 text-justify">{Reviews}</p>
          </div>
      </div>

    );

}