"use client"; // Add this at the top of the file

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/auth/user', { withCredentials: true })
            .then((response) => setUser(response.data))
            .catch(() => setUser(null));
    }, []);

    if (!user) return <div>Not logged in</div>;

    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <img src={user.profilePhoto} alt="Profile" />
        </div>
    );
};

export default UserInfo;
