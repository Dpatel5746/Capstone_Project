import React from 'react';

import { Navigate, Route } from 'react-router';

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
    return(
        <div>
            <Route 
                {...rest} render={(props)=>{
                if(auth) { return <Component {...props} /> }
                else { return <Navigate replace to={{path: '/', state : {from : props.location}}} /> }
            }} />
        </div>
    );
}

export default ProtectedRoute;




