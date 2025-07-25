import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [bgImage, setBgImage] = useState(null);
  const [videoDetails, setVideoDetails] = useState([]);

  const [videoTitle, setVideoTitle] = useState('');
  const [videoDesc, setVideoDesc] = useState('');
  const [videoId, setVideoId] = useState('');

  const [assessments, setAssessments] = useState([]);
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswers, setWrongAnswers] = useState(['', '', '']);

  const [showVideoForm, setShowVideoForm] = useState(false);
  const fileInputRef = useRef(null);

  const handleAddAssessment = () => {
    if (
      question.trim() &&
      correctAnswer.trim() &&
      wrongAnswers.every((ans) => ans.trim())
    ) {
      setAssessments([
        ...assessments,
        {
          question,
          correctAnswer,
          wrongAnswers,
        },
      ]);
      setQuestion('');
      setCorrectAnswer('');
      setWrongAnswers(['', '', '']);
    } else {
      alert('Please fill in all assessment fields.');
    }
  };

  const handleSaveVideo = () => {
    if (videoTitle && videoDesc && videoId && assessments.length === 30) {
      setVideoDetails([
        ...videoDetails,
        {
          title: videoTitle,
          description: videoDesc,
          videoId,
          assessments,
        },
      ]);

      // Reset current video form
      setVideoTitle('');
      setVideoDesc('');
      setVideoId('');
      setAssessments([]);
      setQuestion('');
      setCorrectAnswer('');
      setWrongAnswers(['', '', '']);
      setShowVideoForm(false);
    } else {
      alert('All video fields must be filled and have 30 assessments.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showVideoForm) {
      return alert('Please save the current video before submitting the course.');
    }

    if (videoDetails.length === 0) {
      return alert('Please add at least one video to the course.');
    }

    const formData = new FormData();
    formData.append('courseName', courseName);
    formData.append('CourseDescription', courseDescription);
    formData.append('bgImage', bgImage);
    formData.append('videoDetails', JSON.stringify(videoDetails));

    try {
      await axios.post('http://localhost:5000/admin/add-course', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Course added successfully!');
      // Reset all fields
      setCourseName('');
      setCourseDescription('');
      setBgImage(null);
      setVideoDetails([]);
      setVideoTitle('');
      setVideoDesc('');
      setVideoId('');
      setAssessments([]);
      setQuestion('');
      setCorrectAnswer('');
      setWrongAnswers(['', '', '']);
      setShowVideoForm(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      console.error(err);
      alert('Error adding course.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-amber-100 p-6 rounded-lg max-w-3xl mx-auto shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>

      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        required
        className="w-full p-2 rounded border"
      />

      <textarea
        placeholder="Course Description"
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
        required
        className="w-full p-2 rounded border"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setBgImage(e.target.files[0])}
        ref={fileInputRef}
        required
        className="w-full p-2"
      />

      <hr className="my-4" />

      {!showVideoForm && (
        <button
          type="button"
          onClick={() => setShowVideoForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Video
        </button>
      )}

      {showVideoForm && (
        <div className="space-y-4 border rounded bg-white p-4 mt-4">
          <input
            type="text"
            placeholder="Video Title"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Video Description"
            value={videoDesc}
            onChange={(e) => setVideoDesc(e.target.value)}
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Vimeo Video ID"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            className="w-full p-2 rounded border"
          />

          <h4 className="text-lg font-medium mt-2">Add Assessment (30 total)</h4>
          <input
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Correct Answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="w-full p-2 rounded border"
          />
          {wrongAnswers.map((wrong, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Wrong Answer ${i + 1}`}
              value={wrong}
              onChange={(e) => {
                const updated = [...wrongAnswers];
                updated[i] = e.target.value;
                setWrongAnswers(updated);
              }}
              className="w-full p-2 rounded border"
            />
          ))}

          <button
            type="button"
            onClick={handleAddAssessment}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            + Add Assessment ({assessments.length}/30)
          </button>

          <ul className="pl-5 list-disc mt-2">
            {assessments.map((a, i) => (
              <li key={i}>{i + 1}. {a.question}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={handleSaveVideo}
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
          >
            Save Video
          </button>
        </div>
      )}

      {/* Display added videos summary */}
      <ul className="mt-4 list-disc pl-5">
        {videoDetails.map((v, i) => (
          <li key={i}>
            <strong>{v.title}</strong> ({v.videoId}) - {v.assessments.length} questions
          </li>
        ))}
      </ul>

      <hr className="my-4" />
      <button
        type="submit"
        className="bg-green-700 text-white px-6 py-2 rounded text-lg"
      >
        Save Course
      </button>
    </form>
  );
};

export default AddCourseForm;
