import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Background from './components/Background';
import Background2 from './components/Background2';
import AddCourseForm from './Pages/AddCourseForm';
import CourseDetailsPopUp from './Pages/CourseDetailsPopUp';
import MainAssessment from './Pages/MainAssessment';
import HelpCenter from './Pages/HelpCenter';
import AssessmentFirstPopup from './Pages/AssessmentFirstPopup';
import AssessmentPassedPopup from './Pages/AssessmentPassedPopup';
import AssessmentFailedPopup from './Pages/AssessmentFailedPopup';
import AssesmentTimeUpPopup from './Pages/AssesmentTimeUpPopup';
import Discoverus from './Pages/Discoverus';
import StartCourse2 from './Pages/StartCourse2';
import AssessmentTimupCongrats from './Pages/AssessmentTimupCongrats';
<<<<<<< Updated upstream

import AssessmentFeedback from './Pages/AssessmentFeedback';
import AssessmentFeedbackEnter from './Pages/AssessmentFeedbackEnter';

import NewPage from './Pages/newpage';
=======
import NewPage from './Pages/VideoMain';
>>>>>>> Stashed changes
import Home from './Pages/Homepage';
import Faq2 from './Pages/Faq2';
import PrivateRoute from './routes/PrivateRoutes';
import CourseSection from './Pages/CourseSection';
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen min-w-full">
      {/* Conditionally render background */}
      {isHome ? <Background2 /> : <Background />}

      {/* Conditionally render header */}
      {!isHome && <Header />}

      <Routes>
        {/* public route */}
        <Route path="/" element={<Home />} />

        {/* protected route */}
        <Route element={<PrivateRoute />}>
            <Route path="/discoverUs" element={<Discoverus />} />
            <Route path="/startCourse" element={<StartCourse2 />} />
            <Route path="/courseSection" element={<CourseSection />} />
            
            <Route path="/addCourse" element={<AddCourseForm />} />
            <Route path="/courseDetailsPopUp" element={<CourseDetailsPopUp />} />
            <Route path="/MainAssessment" element={<MainAssessment />} />
            <Route path="/Assessmententer-popup" element={<AssessmentFirstPopup />} />
            <Route path="/AssessmentPassedPopup" element={<AssessmentPassedPopup />} />
            <Route path="/AssessmentFailedPopup" element={<AssessmentFailedPopup />} />
            <Route path="/AssessmentTimupPopup" element={<AssesmentTimeUpPopup />} />
            <Route path="/AssessmentTimupCongrats" element={<AssessmentTimupCongrats />} />
            <Route path="/HelpCenter" element={<HelpCenter />} />
            <Route path="/AssessmentfeedbackEnter" element={<AssessmentFeedbackEnter />} />
             <Route path="/Assessmentfeedbackpopup" element={<AssessmentFeedback />} />
            <Route path="/faq" element={<Faq2 />} />
<<<<<<< Updated upstream
            <Route path="/new/:id" element={<NewPage />} />
=======
            <Route path="/video" element={<NewPage />} />
            
>>>>>>> Stashed changes
        </Route>


        
      </Routes>
    </div>
  );
}



export default Layout;
