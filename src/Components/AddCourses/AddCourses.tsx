import axios from "axios";
import React, { useEffect, useRef, useState } from 'react';
import './AddCourses.css';



const AddCourse = () => {
    const addcourseRef: React.MutableRefObject<any> = useRef(null);

    const [data, setData] = useState({
        courseName: "",
        class: "",
        duration: "",
        details: "",
        img: ""
    });

    useEffect(() => {
        executeScroll();
    }, [])

    const executeScroll = () => addcourseRef.current.scrollIntoView();

    const handleAddCourse = (e: React.SyntheticEvent) => {
        //console.log(courseName, class, duration, details, image);
        e.preventDefault();
        const userData = {
            courseName: data.courseName,
            class: data.class,
            duration: data.duration,
            details: data.details,
            img: data.img,
        };
        axios.post('https://safe-atoll-27425.herokuapp.com/addcourses', userData)
            .then(res => {
                console.log(res);
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
        console.log(value);

    };


    // const inputCourseName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setCourseName(e.target.value);
    // }
    // const inputClassNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setClassNumber(e.target.value);
    // }
    // const inputDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setDuration(e.target.value);
    // }
    // const inputDetails = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setDetails(e.target.value);
    // }
    // const inputImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setImage(e.target.value);
    // }

    return (
        <div className="add__course__body" ref={addcourseRef}>
            <h2>Add IELTS Courses</h2>
            <div className="add-Course">
                <form onSubmit={handleAddCourse}>
                    <input onChange={handleChange} type="course" name="courseName" value={data.courseName} id="data" placeholder='Course Name' />
                    <input onChange={handleChange} type="classes" name="class" value={data.class} id="data" placeholder='Class' />
                    <input onChange={handleChange} type="duration" name="duration" value={data.duration} id="data" placeholder='Duration' />
                    <textarea onChange={handleChange} name="details" value={data.details} id="data" placeholder='Description' ></textarea>
                    <input onChange={handleChange} type="url" name="img" value={data.img} id="data" placeholder='Image' />
                    <button className='btn btn-primary w-50 mb-3' type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;