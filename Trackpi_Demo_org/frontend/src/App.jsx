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


import StartCourse2 from './Pages/StartCourse2';
import AssessmentTimupCongrats from './Pages/AssessmentTimupCongrats';
import StartCourseDemo from './Pages/startCourseDemo';

function App() {
  return (
    <Router>
     <div className="relative min-h-full min-w-full">
  <Background />
  <Header />
  {/* <main className="relative z-10"> */}
      <Routes>
        <Route path="/" element={<Discoverus />} />
        <Route path="/startCourse" element={<StartCourse2 />} />
        <Route path="/Watchvideo/:id" element={<WatchvideoSection />} />
        <Route path="/addCourse" element={<AddCourseForm />} /> 
        {/* <Route path="/viewCourse" element={<CourseList />} />  */}
        <Route path="/courseDetailsPopUp" element={<CourseDetailsPopUp />} />
        <Route path="/MainAssessment" element={<MainAssessment />} />
        <Route path="/Assessmententer-popup" element={<AssessmentFirstPopup />} />
        <Route path="/AssessmentPassedPopup" element={<AssessmentPassedPopup />} />
        <Route path="/AssessmentFailedPopup" element={<AssessmentFailedPopup />} />
        <Route path="/AssessmentTimupPopup" element={<AssesmentTimeUpPopup />} />
        <Route path="/AssessmentTimupCongrats" element={<AssessmentTimupCongrats />} />

        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/faq" element={<Faq />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* </main> */}
      </div>
    </Router>
  );
}

export default App;

