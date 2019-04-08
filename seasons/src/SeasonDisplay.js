import './SeasonDisplay.css';
import React from "react";

const seasons = {
  SUMMER: 'summer',
  WINTER: 'winter'
}


const seasonConfig = {
  [seasons.SUMMER]: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  [seasons.WINTER]: {
    text: 'Burr, it\'s chilly!',
    iconName: 'snowflake'
  }
}

export default class SeasonDisplay extends React.Component {
  getSeason(currentMonth, lat) {
    // If southern
    if (lat <= 0) {
      return currentMonth <= 2 || currentMonth >= 9 ? seasons.SUMMER : seasons.WINTER;
    }

    // If northern
    return currentMonth >= 3 && currentMonth <= 8 ? seasons.SUMMER : seasons.WINTER;
  }

  render() {
    const currentMonth = new Date().getMonth();
    const lat = this.props.lat;
    const season = this.getSeason(currentMonth, lat);
    const { text, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive icon ${iconName}`}/>
        <h1>
          {text}
        </h1>
        <i className={`icon-right massive icon ${iconName}`}/>
      </div>
    );
  }
}
