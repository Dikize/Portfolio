import React from 'react';
import NavBar from '../components/NavBar';
import Language from '../components/knoweldges/Language';
import Hobbies from '../components/knoweldges/Hobbies';
import OtherSkills from '../components/knoweldges/OtherSkills';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <NavBar />
            <div className="knowledgesContent">
                <Language />
                <div className="container-other-hobbie">
                    <OtherSkills />
                    <Hobbies />
                </div>
            </div>
        </div>
    );
};

export default Knowledges;