import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="homeContent">
                <div className="content text-center">
                    <h1>Kabore Lucien</h1>
                    <h2>Développeur</h2>
                    <div className="pdf">
                        <a href="./media/curriculum-vitae-Kabore.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;