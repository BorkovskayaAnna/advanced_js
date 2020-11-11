import React, { Component } from 'react';
import CoursesList from './components/courses/CoursesList';
import UserList from './components/users/UserList';
import data from './data';

class App extends Component {
    render() {
        return (
            <div className="container">
                <CoursesList courses={data} />
            </div>
        )
    }
}

export default App;
