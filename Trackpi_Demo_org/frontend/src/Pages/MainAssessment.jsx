import React, { useState } from "react";
import AssessmentBubble from "./AssessmentBubble";
import Assessment from "./Assessment";


const MainAssessment = ()=> { 
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>

        <AssessmentBubble currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Assessment currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        
        
        
        
        
        
        </>
    )
}
export default MainAssessment;