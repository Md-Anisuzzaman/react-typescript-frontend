import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

interface dataType {
    _id: number,
    name: string,
    class: number,
    duration: string | number,
    details: string,
    img?: string,
}


const Details = () => {
    const [courses, setCourses] = useState<any>({})
    const { courseId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/singleCourse/${courseId}`)
            .then(res => res.json())
            .then(data => setCourses(data));
        console.log(courses);

    }, []);
    return (
        <div className="details-container mt-5 mb-5 p-5">
            <div className="row container">
                <div className="col-md-12">
                    <img className="w-50" src={courses.img} alt="" />
                    <h4 className='mt-3'>{courses.name}</h4>
                    <p>Duation: {courses.duration}</p>
                    <h6><span className='text-success fs-5'>Description:</span> {courses.details}</h6>
                    <button className='btn btn-primary text-light w-25 mt-3'>Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default Details