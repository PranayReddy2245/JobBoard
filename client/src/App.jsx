import React, { useState, useRef } from 'react'; // Import useRef for scrolling

// Main App component
function App() {
  // State to manage the list of jobs
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120,000 - $160,000',
      description: 'Join our team to build cutting-edge React applications with modern technologies. We are looking for a highly motivated and experienced Senior Frontend Developer to join our growing team. You will be responsible for developing and maintaining our web applications, working closely with our design and backend teams.',
      type: 'Full-time',
      remote: true,
      postedDate: '1/15/2024',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovate Solutions',
      location: 'New York, NY',
      salary: '$100,000 - $130,000',
      description: 'Lead product development from conception to launch. Define product strategy, roadmap, and specifications. Work with cross-functional teams to deliver exceptional products.',
      type: 'Full-time',
      remote: false,
      postedDate: '1/20/2024',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Creative Minds',
      location: 'Remote',
      salary: '$90,000 - $110,000',
      description: 'Design intuitive and engaging user experiences for our web and mobile applications. Conduct user research, create wireframes, prototypes, and high-fidelity mockups.',
      type: 'Contract',
      remote: true,
      postedDate: '1/22/2024',
    },
  ]);

  // State for the new job form (kept for "Post Job" functionality)
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '', // Added location
    salary: '',   // Added salary
    type: '',     // Added job type
    remote: false, // Added remote checkbox
    description: '',
  });

  // State for search filters (for demonstration, inputs are present but not fully functional)
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    location: '',
    jobType: '',
    remote: false,
  });

  // State for managing the job details modal
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Refs for scrolling to sections
  const featuredJobsRef = useRef(null);
  const postJobRef = useRef(null);

  // Handle changes in the new job form input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox input
    }));
  };

  // Handle changes in the search input fields
  const handleSearchChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission to add a new job
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add a unique ID and default values for type, remote, and postedDate
    setJobs((prevJobs) => [...prevJobs, {
      ...newJob,
      id: Date.now(),
      postedDate: new Date().toLocaleDateString(), // Current date
    }]);
    // Clear the form fields after submission
    setNewJob({
      title: '',
      company: '',
      location: '',
      salary: '',
      type: '',
      remote: false,
      description: '',
    });
    // Scroll to the new job in the featured jobs section
    if (featuredJobsRef.current) {
      featuredJobsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to open the job details modal
  const openJobDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // Function to close the job details modal
  const closeJobDetails = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  // Function to scroll to the Featured Jobs section
  const scrollToFeaturedJobs = () => {
    if (featuredJobsRef.current) {
      featuredJobsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the Post Job form
  const scrollToPostJob = () => {
    if (postJobRef.current) {
      postJobRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Main container with a subtle background and font
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center space-x-2">
          {/* JobBoard Logo/Title */}
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
          <span className="text-xl font-bold text-gray-900">JobBoard</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollToFeaturedJobs} // Added onClick handler
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            Jobs
          </button>
          <button
            onClick={scrollToPostJob} // Added onClick handler
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            Post Job
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Find Your Dream Job
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing opportunities from top companies. Your next career move starts here.
        </p>
        <div className="flex justify-center space-x-6 text-gray-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path></svg>
            <span>{jobs.length} Jobs Available</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            <span>5 Locations</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2h2v2H6V6zm0 3h2v2H6V9zm0 3h2v2H6v-2zm3-3h2v2H9V9zm0 3h2v2H9v-2zm3-3h2v2h-2V9z" clipRule="evenodd"></path></svg>
            <span>5 Companies</span>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="max-w-5xl mx-auto -mt-8 relative z-10 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="md:col-span-2 relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            <input
              type="text"
              name="keyword"
              placeholder="Search jobs, companies..."
              value={searchFilters.keyword}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>
          <div className="relative">
            <select
              name="location"
              value={searchFilters.location}
              onChange={handleSearchChange}
              className="w-full pr-8 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              <option value="">Location</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Remote">Remote</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
            </div>
          </div>
          <div className="relative">
            <select
              name="jobType"
              value={searchFilters.jobType}
              onChange={handleSearchChange}
              className="w-full pr-8 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              <option value="">Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="checkbox"
              name="remote"
              checked={searchFilters.remote}
              onChange={handleSearchChange}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remote" className="text-gray-700">Remote</label>
          </div>
        </div>
      </div>

      {/* Main content area below search bar */}
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Featured Jobs Section */}
        <h2 ref={featuredJobsRef} className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="inline-block w-3 h-6 bg-green-500 rounded-sm mr-2"></span>
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200 ease-in-out"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {job.type}
                  </span>
                  {job.remote && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Remote
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 text-sm flex items-center mb-3">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                {job.location}
              </p>
              <p className="text-gray-700 font-semibold text-base mb-4">{job.salary}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{job.description.substring(0, 100)}...</p> {/* Truncate description */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Posted: {job.postedDate}</span>
                <button
                  onClick={() => openJobDetails(job)} // Added onClick handler
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Original Post Job Form */}
        <div ref={postJobRef} className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-5">Post a New Job</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={newJob.title}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={newJob.company}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
            <input
              type="text"
              name="location" // New field
              placeholder="Location (e.g., San Francisco, CA)"
              value={newJob.location}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
            <input
              type="text"
              name="salary" // New field
              placeholder="Salary (e.g., $80,000 - $100,000)"
              value={newJob.salary}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
            <div className="relative mb-4"> {/* New field for job type dropdown */}
              <select
                name="type"
                value={newJob.type}
                onChange={handleChange}
                required
                className="w-full pr-8 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
            <div className="flex items-center mb-6"> {/* New field for remote checkbox */}
              <input
                type="checkbox"
                name="remote"
                checked={newJob.remote}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remote" className="text-gray-700">Remote Position</label>
            </div>
            <input
              type="text"
              name="description"
              placeholder="Job Description"
              value={newJob.description}
              onChange={handleChange}
              required
              className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
            <button
              onClick={closeJobDetails}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedJob.title}</h2>
            <p className="text-blue-600 font-medium mb-2">{selectedJob.company}</p>
            <p className="text-gray-500 text-sm flex items-center mb-4">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              {selectedJob.location}
            </p>
            <p className="text-gray-700 font-semibold text-base mb-4">{selectedJob.salary}</p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">{selectedJob.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
              <span>Posted: {selectedJob.postedDate}</span>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {selectedJob.type}
                </span>
                {selectedJob.remote && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Remote
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={closeJobDetails}
              className="mt-6 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
