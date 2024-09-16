import React, {useEffect, useState} from 'react';
import MainPage from "../mainPage/MainPage";
import ErrorPage from "../errorPage/ErrorPage";

function AboutPage() {
        const [user, setUser] = useState({name: "", surname: ""});
        const [mainPage, setMainPage] = useState(false);
        const [errorPage, setErrorPage] = useState(false);

        useEffect(() => {
            let userName = prompt("What is your name?");
            let userLastName = prompt("What is your lastname?");
            if (userName === "John" && userLastName === "Johns") {
                setUser({name: userName, surname: userLastName});
                setMainPage(true);
            } else {
                setErrorPage(true);
            }
        }, [])

        if (errorPage) {
            return <ErrorPage/>
        }
        return (
            <div>
                {mainPage ? <MainPage user={user}/> : null}
            </div>
        );


}

export default AboutPage;