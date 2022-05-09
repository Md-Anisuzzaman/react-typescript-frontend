import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'

interface dataType {
    _id: number,
    name: string,
    class: number,
    duration: string | number,
    details: string,
    img?: string,
}



const Courses = () => {
    const coursesRef:React.MutableRefObject<any>= useRef(null)
    const [courses, setCourses] = useState<dataType[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/allcourses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    useEffect(() => {
        executeScroll();
    }, [])
    
    const executeScroll = () => coursesRef.current.scrollIntoView();


    return (
        <div ref={coursesRef}  className="courses-body">
            <div className="container">
                <div className="row">
                    <h1 className='text-light'>Our Courses</h1>
                    {
                        // Using-map-function-to-show-data-in-cart

                        courses.map((course) =>
                            <div className="col-md-4" key={course._id}>
                                <div className="cart mt-5">
                                    <div className='img-size'>
                                        <img className="img-fluid" src={course.img} alt="" />
                                    </div>
                                    <div className="ps-3 pe-3 pb-4 mt-3">
                                        <h4 className='tittle-border'>{course.name}</h4>
                                        <div>
                                            <p className='mt-4'>Class: {course.class}</p>
                                            <p>Duraton: {course.duration}</p>
                                        </div>
                                        {/* <p><span className="fw-bold">Details:</span> {course.details}</p> */}
                                        <Link to={`/courses/${course._id}`}> <button className='btn btn-outline-light'>See More</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>

    );
};
export default Courses;