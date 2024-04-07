import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const page = () => {
    return (
        <div className='text-center flex m-10 mt-2 pt-5 justify-center'>
            <Form/>
            <Card/>
        </div>
    );
};

export default page;