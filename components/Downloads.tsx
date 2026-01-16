'use client';

import { useState } from 'react';

interface Download {
  id: number;
  title: string;
  fileType: string;
  fileSize: string;
}

interface DownloadsProps {
  downloads: Download[];
}

interface FormData {
  country: string;
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  newsletter: boolean;
}

const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'India',
  'Germany',
  'France',
  'Japan',
  'China',
  'Other',
];

export default function Downloads({ downloads }: DownloadsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDownload, setSelectedDownload] = useState<Download | null>(null);
  const [formData, setFormData] = useState<FormData>({
    country: '',
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    newsletter: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [downloadStarted, setDownloadStarted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company must be at least 2 characters';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First Name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleDownloadClick = (download: Download) => {
    setSelectedDownload(download);
    setIsModalOpen(true);
    setDownloadStarted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Show download started message
    setDownloadStarted(true);
    console.log('Form submitted:', formData);
    console.log('Starting download for:', selectedDownload?.title);

    // Reset form
    setFormData({
      country: '',
      company: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      newsletter: true,
    });

    // Close modal after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };

  const closeModal = () => {
    if (!downloadStarted) {
      setIsModalOpen(false);
      setErrors({});
    }
  };

  return (
    <div className="mx-auto w-[80%] my-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Downloads</h2>

      <div className="space-y-4">
        {downloads.map((download) => (
          <div
            key={download.id}
            className="flex justify-between items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">{download.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {download.fileType} • {download.fileSize}
              </p>
            </div>
            <button
              onClick={() => handleDownloadClick(download)}
              className="text-red-500 hover:text-red-600 transition-colors hover:cursor-pointer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2V22M16 22L8 14M16 22L24 14M2 28H30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-[470px] max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-[#0d285d] text-white p-3 sm:p-4 flex items-center justify-between rounded-t-lg sticky top-0">
              <h2 className="text-sm sm:text-lg font-bold">Fill the form below to begin download</h2>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v4a2 2 0 002 2h12a2 2 0 002-2v-4m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 bg-[#e7e7f1]">
              {downloadStarted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                  Download started! Your file will download shortly.
                </div>
              )}

              {/* Country and Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="country" className="block text-xs font-bold text-gray-900 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                      errors.country ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Country</option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-gray-900 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your Company Name"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                  )}
                </div>
              </div>

              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-gray-900 mb-1">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter Your First Name..."
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-gray-900 mb-1">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter Your Last Name..."
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-900 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter Your Email..."
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-900 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter Your Phone..."
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Newsletter Checkbox */}
              <div className="mb-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-3 h-3 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="text-xs font-semibold text-gray-900">
                  I would like to receive news from Geocomp
                </label>
              </div>

              {/* Required Fields Note */}
              <p className="text-xs text-gray-600 mb-4">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={downloadStarted}
                  className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg bg-[#f3f4f6] hover:bg-[#d1d5db] transition-colors disabled:opacity-50 w-full sm:w-auto order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={downloadStarted}
                  className="px-4 sm:px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 w-full sm:w-auto order-1 sm:order-2"
                >
                  Submit
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
