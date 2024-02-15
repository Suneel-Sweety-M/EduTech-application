import React from 'react';
import Back from '../components/common/Back';
import OnlineCourses from '../components/allcources/OnlineCources';
import CoursesCard from '../components/allcources/CoursesCard';

const Cources = () => {
  return (
    <>
    <Back title='Explore Courses' />
    <CoursesCard />
    <OnlineCourses />
    <br />
  </>
  )
}

export default Cources;