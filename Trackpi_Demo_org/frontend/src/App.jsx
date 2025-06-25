import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Background from './components/Background';
import Background2 from './components/Background2';

import WatchvideoSection from './Pages/Watchvideo';
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
import NewPage from './Pages/newpage';
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
            <Route path="/Watchvideo/:id" element={<WatchvideoSection />} />
            <Route path="/addCourse" element={<AddCourseForm />} />
            <Route path="/courseDetailsPopUp" element={<CourseDetailsPopUp />} />
            <Route path="/MainAssessment" element={<MainAssessment />} />
            <Route path="/Assessmententer-popup" element={<AssessmentFirstPopup />} />
            <Route path="/AssessmentPassedPopup" element={<AssessmentPassedPopup />} />
            <Route path="/AssessmentFailedPopup" element={<AssessmentFailedPopup />} />
            <Route path="/AssessmentTimupPopup" element={<AssesmentTimeUpPopup />} />
            <Route path="/AssessmentTimupCongrats" element={<AssessmentTimupCongrats />} />
            <Route path="/HelpCenter" element={<HelpCenter />} />
            <Route path="/faq" element={<Faq2 />} />
            <Route path="/new" element={<NewPage />} />
        </Route>


        
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
