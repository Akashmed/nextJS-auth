import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptons } from '../api/auth/[...nextauth]/route';

const aboutPage = async () => {
    const session = await getServerSession(authOptons);
    console.log({session})
    return (
        <div>
            About Page
            
        </div>
    );
};

export default aboutPage;