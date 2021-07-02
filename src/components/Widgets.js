import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import "../css/Widgets.css";

function Widgets() {
  // create news article
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="article-left">
        <TurnedInIcon />
      </div>
      <div className="article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Top Trends</h2>
        <InfoIcon />
        
        
      </div>
     
      {newsArticle("New Puma RS ", "Trending")}
      {newsArticle("Covid19 Finished ", "Trending")}
      {newsArticle("New Years ", "hot")}
      {newsArticle("React JS too Lit ", "Trending")}
    </div>
    
  );
}

export default Widgets;
