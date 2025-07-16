import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import User from './User'; // 👈 import the component

const Test = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/auth/user/${id}`);
        if (response.data && response.data.user) {
          setUser(response.data.user);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="test-container">
      <User user={user} />
    </div>
  );
};

export default Test;
