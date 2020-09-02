/*
* 
* Class page only has nav bar to allow navigation between class 
* syllabus, assignments, and grades for now.
*   - Assignments button only functional one for now since that is the only page ready to be loaded.
*/

import React from 'react';
import './ClassPage.css';
import NavBar from '../Header/NavBar.js';

function ClassPage() {
    return (
        <div className="ClassPage">
            <NavBar/>
        </div>
    );
}
    
export default ClassPage;