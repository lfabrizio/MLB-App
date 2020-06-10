import React from 'react';
import './Title.css';


function Title() {
  return (
<header>
  <div className="container">

    <p className="main">MLB ⚾ APP</p>
    
  </div>
  <ul>
    <li><a href="https://github.com/lfabrizio/MLB-App"><span data-text="News">News</span></a></li>
    <li><a href="https://www.mlb.com/scores"><span data-text="Scores">Scores</span></a></li>
    <li><a href="https://www.mlb.com/standings"><span data-text="Standings">Standings</span></a></li>
    <li><a href="https://www.baseball-reference.com/"><span data-text="Statistics">Statistics</span></a></li>
    <li><a href="https://www.cbssports.com/fantasy/baseball/rankings/"><span data-text="Fantasy">Fantasy Baseball</span></a></li>
  </ul>
</header>

  )}



 
export default Title