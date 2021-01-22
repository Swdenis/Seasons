import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer :{seasonText: "Let's hit the beach",iconName: "sun" },
    winter: {seasonText: "Brr, it's chilly", iconName: "snowflake"}
}


const getSeason = (lat, month) => {
    if (month >2 && month<9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {return lat > 0 ? 'winter' : 'season';
}
};

const SeasonDisplay = (props) =>
{   const season = getSeason(props.lat, new Date().getMonth());
    const {seasonText, iconName} = seasonConfig[season];


    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{seasonText}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
    );
};

export default SeasonDisplay;