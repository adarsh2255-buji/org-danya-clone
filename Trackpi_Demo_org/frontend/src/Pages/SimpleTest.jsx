import React, { useState } from 'react';
import axios from 'axios';

const SimpleTest = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testServerConnection = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.get('http://localhost:5000/test');
      setResult(response.data);
    } catch (err) {
      console.error('Server connection error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testCourseSectionsRoute = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.get('http://localhost:5000/admin/course-sections');
      setResult(response.data);
    } catch (err) {
      console.error('Course sections route error:', err);
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Server Connection Test
      </h1>
      
      <div className="space-y-4">
        <button
          onClick={testServerConnection}
          disabled={loading}
          className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Test Basic Server Connection
        </button>

        <button
          onClick={testCourseSectionsRoute}
          disabled={loading}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Test Course Sections Route
        </button>

        {loading && (
          <div className="text-center text-gray-600">
            Testing...
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-red-800 font-medium mb-2">Error:</h3>
            <pre className="text-red-600 text-sm overflow-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}

        {result && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-green-800 font-medium mb-2">Success!</h3>
            <pre className="text-green-600 text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleTest; 