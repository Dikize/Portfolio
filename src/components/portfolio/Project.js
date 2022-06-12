import React, { Component } from 'react';
import Swal from "sweetalert2";

class Project extends Component {
    state = {
        showInfo: false
    }

    
    handleInfo = () => {
        let {name , source, site, info} = this.props.item

        Swal.fire({
            title: `<strong>${name}</strong>`,
            html: ` <p>${info}</p> 
                <button><a className="swalButton" href=${source} rel="noopener noreferrer" className="button" target="_blank">Code source</a></button>
                <button><a className="swalButton" href=${site} rel="noopener noreferrer" className="button" target="_blank">Site</a></button>
            `,
        })
    }
    // handleInfo = () => {
    //     this.setState({ 
    //         showInfo: !this.state.showInfo
    //     })
    // }

    

    render() {
        let {name, languagesIcons, picture} = this.props.item
        
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}  />   
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo}/>
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>
            </div>
        );
    }
}

export default Project;