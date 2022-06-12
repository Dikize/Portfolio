import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <p>Boxe Anglaise</p>
                </li>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <p>Culture générale</p>
                </li>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <p>développement personnel</p>
                </li>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <p>Introspection</p>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <p>Sport</p>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;