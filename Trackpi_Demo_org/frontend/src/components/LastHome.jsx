import React from 'react';

const ResponsiveContainer = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Column 1: Text */}
          <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-md text-center">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="text-sm mt-2 text-gray-600">
              We are a dedicated team committed to innovation and excellence.
            </p>
          </div>
          {/* Column 2: Photo */}
          <div className="w-full sm:w-1/2 bg-gray-200 p-4 rounded-md text-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Photo 1"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Column 1: Photo */}
          <div className="w-full sm:w-1/2 bg-gray-200 p-4 rounded-md text-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Photo 2"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
          {/* Column 2: Text */}
          <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-md text-center">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="text-sm mt-2 text-gray-600">
              Empowering your ideas with creative solutions and passionate design.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResponsiveContainer;
