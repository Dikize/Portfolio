import React, { Component } from 'react'
import Swal from "sweetalert2";
import MediaQuery from 'react-responsive' 
import { AiFillLinkedin } from "react-icons/ai"; 

import CvParcour from '../components/curriculum/CvParcour';
import Skills from '../components/curriculum/Skills';
// import NavBar from '../components/NavBar';

const linkedinBackground = "#0a66c2";
export default class Curriculum extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        Swal.fire({
            // title: 'Contact!',
            html:
            "<div className='contact-cv'>" +
                "<h1>Contact</h1>" +
                "<address>" +
                    "<p><a href='mailto:dikize@icloud.com?subject=Contact%20depuis%20Kabore.com'>dikize@icloud.com</a></p>" +
                    "<p><a href='tel:+33650272120'>06 50 27 20 21</a></p>" +
                    "<p>63 Allée Angel Testa</p>" +
                    "<p>93390 Clichy-sous-Bois</p>" +
                    "<p><a href='https://dikize-portfolio.netlify.app/' target='_blank' rel='noopener noreferrer'>Portfolio</a></p>" +
                    "<p><a href='https://www.linkedin.com/in/lucien-kabore-a25102223' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>" +
                "</address>" +
            "</div>" 
            ,
        })
    }


    render() {
        return (
            <div className="container-curriculum">
                <div className="container-skills">
                    <Skills />
                </div>

                <div className="cvContente">
                    <MediaQuery maxWidth={970}>
                        <div className="ContentHeaderMobile">
                            <img src="./media/profile.png" alt="profil-pic"/>
                            <h3>Kabore Lucien</h3>
                            <p>Développeur web Full Stack</p>
                            
                            <div className="contact-cv">
                                <h2 className="">Contact</h2>
                                <address>
                                    <p><a href="mailto:dikize@icloud.com?subject=Contact%20depuis%20Kabore.com" target="_blank" rel="noopener noreferrer">dikize@icloud.com</a></p>
                                    <p><a href="tel:+33650272120">06 50 27 20 21</a></p>
                                    <p>63 Allée Angel Testa</p>
                                    <p>93390 Clichy-sous-Bois</p>
                                    <p><a href="https://portfolio-kabore.herokuapp.com/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} target="_blank" rel="noopener noreferrer"><h4 style={{fontSize: 'large', color: 'black'}}>Portfolio</h4></a></p>
                                    <p><a href="https://www.linkedin.com/in/lucien-kabore/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} target="_blank" rel="noopener noreferrer">
                                        {/* <i className="fab fa-linkedin"></i> */}
                                        <AiFillLinkedin style={{fontSize: 'xx-large', marginRight: '10px'}} color={linkedinBackground}/>
                                        <h4 style={{fontSize: 'large', color: 'white'}}>LinkedIn</h4>
                                    </a></p>
                                </address>
                            </div>
                        </div>
                    </MediaQuery>

                    <h1>Expérience professionnelle</h1>
                    <CvParcour />
                </div>

                
            </div>
        )
    }
}
