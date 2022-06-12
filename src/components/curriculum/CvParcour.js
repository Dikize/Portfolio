import React, { Component } from 'react';
import { dataCurriculum } from '../../data/dataCurriculumDev';
import { TiTickOutline } from "react-icons/ti";
// import Project from './Project';

class CvParcour extends Component {
    state = {
        dataCv: dataCurriculum,
    }

    render() {
        const TiTickOutlineBackground = "#16BFFD";
        let { dataCv } = this.state;
        return (
            <div className="content-parcour">
                {
                    dataCv
                        .map(item => {

                            return (
                                <div key={item.id} className="data-cv">
                                    <div className="title">
                                        <span>{item.dateEntre}</span>
                                        <h3><u>{item.name}</u> <br/><p>{item.entreprise}</p></h3>
                                        <span>{item.dateSorti}</span>
                                    </div>

                                    <table className="table-cv">
                                        <tbody>
                                            <tr>
                                                {/* <td>{item.tache.map(t => t.texte)} <br/></td> */}
                                                
                                                <td>{item.tache ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache ? '10px' : 'none'}}>{item.tache}</p></td>
                                                <td>{item.tache2 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache2 ? '10px' : 'none'}}>{item.tache2}</p></td>
                                                <td>{item.tache3 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache3 ? '10px' : 'none'}}>{item.tache3}</p></td>
                                                <td>{item.tache4 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache4 ? '10px' : 'none'}}>{item.tache4}</p></td>
                                                <td>{item.tache5 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache5 ? '10px' : 'none'}}>{item.tache5}</p></td>
                                                <td>{item.tache6 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache6 ? '10px' : 'none'}}>{item.tache6}</p></td>
                                                <td>{item.tache7 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache7 ? '10px' : 'none'}}>{item.tache7}</p></td>
                                                <td>{item.tache8 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache8 ? '10px' : 'none'}}>{item.tache8}</p></td>
                                                <td>{item.tache9 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache9 ? '10px' : 'none'}}>{item.tache9}</p></td>
                                                <td>{item.tache10 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache10 ? '10px' : 'none'}}>{item.tache10}</p></td>
                                                <td>{item.tache11 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache11 ? '10px' : 'none'}}>{item.tache11}</p></td>
                                                <td>{item.tache12 ? <TiTickOutline style={{fontSize: 'large', alignSelf: 'baseline'}} color={TiTickOutlineBackground}/> : null} <p style={{marginBottom: item.tache12 ? '10px' : 'none'}}>{item.tache12}</p></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            )
                        })
                }
            </div>
        );
    }
}

export default CvParcour;