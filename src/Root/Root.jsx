import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root; 