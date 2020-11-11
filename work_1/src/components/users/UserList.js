import React, {Fragment} from 'react';
import User from './User';
import withToggled from '../../hoc/withToggleId';

const styleList = {
    marginLeft: '40px',
}

const UserList  = ({ teachers, toggle, openId  }) => {
    return (
        <div style={styleList}>
            <button onClick={() => toggle(teachers._id)} className="btn">
                {openId === teachers._id ? "Hide teachers" : "Show teachers"}
            </button>
            {openId === teachers._id ?
                <Fragment>
                    {teachers.map(teacher => (
                        teacher.teachers.map(el => (
                            <User key={el._id} teacher={el.name} />
                        ))
                    ))}
                </Fragment>
                :
                null}

        </div>
    )
}


export default withToggled(UserList);
