import React, { Children, use } from 'react';
import { AuthProvider } from './CreateContext';
import { Navigate } from 'react-router';
import Loading from '../Component/Loading';

const PrivetRouter = ({Children}) => {
    const {user, loading} = use(AuthProvider)

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    } 

    
    return Children
};

export default PrivetRouter;