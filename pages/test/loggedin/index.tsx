import React from 'react'
import { useSession } from 'next-auth/react';



export default function index() {
    const { data: session, status } = useSession();

    console.log(session, status)

    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    // Check if session exists and render content accordingly
    if (session) {
      // User is logged in, render content for logged-in user
      return <div>{"hello " + session.user.name}</div>;
    } else {
      // User is not logged in, render content for logged-out user
      return <div>User is not logged in</div>;
    }
  };

