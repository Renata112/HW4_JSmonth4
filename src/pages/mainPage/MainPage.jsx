import React, {useEffect, useState} from 'react';

function MainPage  ()  {
    const [state, setState] = useState({name:'', lastname:''});
    useEffect(()=>{
        let userName = prompt("What is your name?");
        let userLastName = prompt("What is your lastname?");

        setState({name: userName, lastname: userLastName});
    }, [])
    return (
        <div>
            {state.name && state.lastname &&(
                <h1>"Добро пожаловать {state.name}{state.lastname}, мы тебя ждали!"</h1>)}
        </div>
    );
};

export default MainPage;