import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'kastastin',
      image: 'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      places: 3
    }
  ];

  return <UsersList items={USERS} />
};

export default Users;
