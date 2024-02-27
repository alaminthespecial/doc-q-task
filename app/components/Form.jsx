"use client";

import React from 'react';

const Form = () => {
  return (
    <div className="max-w-md mx-auto m-8 p-6 bg-gray-100 rounded-md shadow-md">

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Job Registration Form</h2>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-800 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-800 text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-800 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your email address"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-800 text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-800 text-sm font-medium">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the job title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qualifications" className="block text-gray-800 text-sm font-medium">
            Qualifications
          </label>
          <input
            type="text"
            id="qualifications"
            name="qualifications"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter required qualifications"
          />
        </div>

      

       
      

      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-800 text-sm font-medium">
          Upload CV/Resume
        </label>
        <input type="file" id="resume" name="resume" className="mt-1" />
      </div>

      <button
        type="submit"
        className="w-1/3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;


