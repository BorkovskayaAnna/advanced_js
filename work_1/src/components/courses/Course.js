import React, { Fragment } from 'react';
import UserList from '../users/UserList';
import data from "../../data";

const Course = ({ course, toggle, openId }) => (
    <div className="mt-3">
        {/*{console.log(course)}*/}
        <h3>{course.title}</h3>
        <button onClick={() => toggle(course._id)} className="btn btn-primary">
            {openId === course._id ? "Hide description" : "Show description"}
        </button>

        {openId === course._id ?
            <Fragment>
                <div>{course.description}</div>
                <UserList teachers={data} />
            </Fragment>
            :
            null}

    </div>
)

export default Course;
