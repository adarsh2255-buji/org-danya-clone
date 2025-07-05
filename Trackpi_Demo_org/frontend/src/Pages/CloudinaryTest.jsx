import React, { useState } from 'react';
import axios from 'axios';

const CloudinaryTest = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const testUpload = async () => {
    if (!file) {
      setError('Please select a video file first');
      return;
    }

    setUploading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('courseTitle', 'Test Course Section');
      formData.append('courseDescription', 'This is a test course section for Cloudinary integration');
      formData.append('courseDuration', '10');
      formData.append('videos', JSON.stringify([{ title: 'Test Video', description: 'Test video upload' }]));
      formData.append('videos', file);

      const response = await axios.post('http://localhost:5000/admin/course-section', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setResult(response.data);
      alert('✅ Cloudinary integration is working! Video uploaded successfully.');
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.response?.data?.message || 'Upload failed. Check console for details.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Cloudinary Integration Test
      </h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Video File
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Supported: MP4, AVI, MOV, WMV, FLV, WebM, MKV (Max 100MB)
          </p>
        </div>

        {file && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Selected File:</h3>
            <p className="text-sm text-gray-600">Name: {file.name}</p>
            <p className="text-sm text-gray-600">Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            <p className="text-sm text-gray-600">Type: {file.type}</p>
          </div>
        )}

        <button
          onClick={testUpload}
          disabled={!file || uploading}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading...' : 'Test Cloudinary Upload'}
        </button>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-red-800 font-medium mb-2">Error:</h3>
            <p className="text-red-600 text-sm">{error}</p>
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

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-800 font-medium mb-2">Instructions:</h3>
          <ol className="text-blue-700 text-sm space-y-1">
            <li>1. Select a video file (any supported format)</li>
            <li>2. Click "Test Cloudinary Upload"</li>
            <li>3. If successful, your Cloudinary integration is working!</li>
            <li>4. Check the result to see the uploaded video details</li>
          </ol>
        </div>

        <div className="text-center">
          <a
            href="/courseSectionList"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            View All Course Sections →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CloudinaryTest; 