import React from "react";
import MainCourseList from "./MainCourseList";
import NavigationTabs from "../components/NavigationTabs";
import Footer from "../components/Footer";

const CourseDetailsPopUp = () => {
  return (
    <div className="w-screen h-screen ">
      < MainCourseList />
      <NavigationTabs />
      <Footer/>
    </div>
  )
}

export default CourseDetailsPopUp