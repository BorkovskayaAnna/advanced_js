import React from 'react';
import Course from './Course';
import withToggled from '../../hoc/withToggleId';

const CourseList = ({ courses, ...rest }) => {
    return (
        <div>
            {courses.map(course => (
                <Course key={course._id} course={course} {...rest} />
            ))}
        </div>
    )
}

export default withToggled(CourseList);
