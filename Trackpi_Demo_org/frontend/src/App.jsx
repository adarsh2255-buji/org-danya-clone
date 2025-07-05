import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Background from "./components/Background";
import Background2 from "./components/Background2";

import AddCourseForm from "./Pages/AddCourseForm";
import CourseDetailsPopUp from "./Pages/CourseDetailsPopUp";
import MainAssessment from "./Pages/MainAssessment";
import HelpCenter from "./Pages/HelpCenter";
import AssessmentFirstPopup from "./Pages/AssessmentFirstPopup";
import AssessmentPassedPopup from "./Pages/AssessmentPassedPopup";
import AssessmentFailedPopup from "./Pages/AssessmentFailedPopup";
import AssesmentTimeUpPopup from "./Pages/AssesmentTimeUpPopup";
import Discoverus from "./Pages/Discoverus";
import AssessmentTimupCongrats from "./Pages/AssessmentTimupCongrats";
import AssessmentFeedback from "./Pages/AssessmentFeedback";
import AssessmentFeedbackEnter from "./Pages/AssessmentFeedbackEnter";

import ViewCourses from "./Pages/ViewCourse";
import NewPage from "./Pages/newpage";
import Home from "./Pages/Homepage";
import Faq2 from "./Pages/Faq2";
import PrivateRoute from "./routes/PrivateRoutes";
import CourseSection from "./Pages/CourseSection";
import CourseSectionForm from "./Pages/CourseSectionForm";
import CourseSectionList from "./Pages/CourseSectionList";
import CloudinaryTest from "./Pages/CloudinaryTest";
import SimpleTest from "./Pages/SimpleTest";
import StartCourse from "./Pages/StartCourse";
import ContactUsPage from "./Pages/ContactUsPage";
import About from "./Pages/Aboutpage";
import UpdateCourseSection from "./Pages/UpdateCourseSection";

function Layout() {
const location = useLocation();
const path = location.pathname;
  const isHome = path === "/";
  const isContact = path === "/contactUs";

  return (
    <div className="relative min-h-screen min-w-full">
      {/* Conditionally render background */}
      {!isContact && (isHome ? <Background2 /> : <Background />)}

      {/* Conditionally render header */}
      {!isHome && !isContact && <Header />}

      <Routes>
        {/* public route */}
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/about" element={<About />} />

        {/* protected route */}
        <Route element={<PrivateRoute />}>
            <Route path="/discoverUs" element={<Discoverus />} />
            
            <Route path="/startCourse" element={<StartCourse />} />
            <Route path="/courseSection" element={<CourseSection />} />
            <Route path="/courseSectionForm" element={<CourseSectionForm />} />
            <Route path="/courseSectionList" element={<CourseSectionList />} />
            <Route path="/updateCourse" element={<UpdateCourseSection />} />
            <Route path="/cloudinaryTest" element={<CloudinaryTest />} />
            <Route path="/simpleTest" element={<SimpleTest />} />
            <Route path="/viewCourse" element ={<ViewCourses/>}/> {/** admin course view route for temporary use*/}
            <Route path="/addCourse" element={<AddCourseForm />} />  {/** admin course adding route for temporary use*/}
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
            <Route path="/video/:courseId" element={<NewPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Layout;
