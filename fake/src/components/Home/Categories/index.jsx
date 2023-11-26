import React from 'react';
import './style.css';

const CourseCategories = (props) => {

    return (
        <div className="course-body px-3">
            <p className="course-cat">
                Categories
            </p>
            {props.CHECKBOX.map((ele) => {
                return (
                    <div className="align-items-center bg-white d-flex mb-2 py-1 rounded" >
                        <input type="checkbox" value={ele.title} defaultChecked={false} className="mx-2" onChange={(event) => {
                            props.setFilteredCards(event.target.value)
                        }} />
                        <span className="course-font">{ele.title}</span>
                       
                    </div>
                   
                )
            })}
           
        </div>
    )
}

export default CourseCategories;

