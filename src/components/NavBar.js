import React from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/profile.png" alt="profil-pic"/>
                    <h3>Kabore Lucien</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink  exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  exact to="/curriculum" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Curriculum</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/lucien-kabore/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Dikize" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>DropCodes - 2021</p>
                </div>
            </div>

        </div>
    );
};

export default NavBar;