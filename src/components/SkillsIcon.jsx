import React from 'react';
import PropTypes from 'prop-types';

function SkillsIcon(prop) {
    return(
        <div className="skill-container">
            <div className="skill-item">
                <img
                    src={prop.source}
                    alt={prop.altName}
                    className="skill-icon"
                />
                <span className="skill-name">{prop.iconName}</span>
            </div>
        </div>
    );
}


export default SkillsIcon