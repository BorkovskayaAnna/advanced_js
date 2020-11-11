import React from 'react';

const styleH3 = {
    fontSize: '16px'
}

const User = ({ teacher }) => (
    <div className="mt-3">
        <h3 style={styleH3}>{teacher}</h3>
    </div>
)
export default User;
