import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const history = useNavigate();

    const logout = async () => {
        try{ 
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accent : "application/json",
                    "Content-type" : "application/json"
                },
                credentials : "include"
                });

            if(res.status === 400 || !res){
                window.alert("Please Logout Later")
            }else{
                window.alert("Logged Out!");
                history('/');
                window.location.reload();
            }
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>

        </div>
    );
}

export default Logout;