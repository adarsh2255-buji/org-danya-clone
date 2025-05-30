import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
// import Ecllipse from './components/Ecllipse';
import WatchvideoSection from './Pages/Watchvideo';
import AddCourseForm from './Pages/AddCourseForm';
import CourseList from './Pages/CourseList';
import CourseDetailsPopUp from './Pages/CourseDetailsPopUp';
import MainAssessment from './Pages/MainAssessment';
import HelpCenter from './Pages/HelpCenter';
import Faq from './Pages/Faq';
import AssessmentFirstPopup from './Pages/AssessmentFirstPopup';
import AssessmentPassedPopup from './Pages/AssessmentPassedPopup';
import AssessmentFailedPopup from './Pages/AssessmentFailedPopup';
import AssesmentTimeUpPopup from './Pages/AssesmentTimeUpPopup';
import Discoverus from './Pages/Discoverus';
import StartCourse from './Pages/StartCourse';

function App() {
  return (
    <Router>
      <div className="flex justify-center">
        <Background />
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Discoverus />} />
        <Route path="/startCourse" element={<StartCourse />} />
        <Route path="/Watchvideo/:id" element={<WatchvideoSection />} />
        <Route path="/addCourse" element={<AddCourseForm />} /> 
        <Route path="/viewCourse" element={<CourseList />} />
        <Route path="/courseDetailsPopUp" element={<CourseDetailsPopUp />} />
        <Route path="/MainAssessment" element={<MainAssessment />} />
        <Route path="/Assessmententer-popup" element={<AssessmentFirstPopup />} />
        <Route path="/AssessmentPassedPopup" element={<AssessmentPassedPopup />} />
        <Route path="/AssessmentFailedPopup" element={<AssessmentFailedPopup />} />
        <Route path="/AssessmentTimupPopup" element={<AssesmentTimeUpPopup />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/faq" element={<Faq />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

