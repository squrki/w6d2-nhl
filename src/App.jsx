import React, { useState, useEffect } from 'react'



const teams = ["ANA", "ARI", "BOS", "BUF", "CAR", "CBJ", "CGY", "CHI", "COL", "DAL", "DET", "EDM", "FLA", "LAK", "MIN", "MTL", "NJD", "NSH", "NYI", "NYR",
  "OTT", "PHI", "PIT", "SEA", "SJS", "STL", "TBL", "TOR", "VAN", "VGK", "WPG", "WSH"]

// const [info, setInfo] = useState([])
// https://records.nhl.com/site/api/franchise?include=teams.active&include=teams.logos



function App() {
  // const [count, setCount] = useState(0)
  const [team, setTeam] = useState("ANA")
  // const [info, setInfo]
  const url = "https://api-web.nhle.com/v1/club-stats-season/"



  // const getButtons = () => {
  //   const url = "https://records.nhl.com/site/api/franchise?include=teams.active&include=teams.logos"
  //   const data = fetch(url, { mode: 'no-cors' })
  //   console.log(data)
  // }
  useEffect(() => {
    fetch(url + team).then((response) => response.json())
      .then((data) => {
        console.log(data.results)
      })
  }, [])
  // getButtons()
  // const url = "https://records.nhl.com/site/api/franchise?include=teams.active&include=teams.logos"
  // const data = fetch(url, { mode: 'no-cors' })
  //   .then(res => res.json())

  // console.log(data)


  let element = teams.map(function (val) {
    return (
      <>
        <button onClick={setTeam(val)} title={val}>{val}</button>
      </>
    );
  })

  return (
    <div>
      <h1>NHL Records</h1>
      {element}
    </div>
  )
}

export default App


// GET https://api-web.nhle.com/v1/club-stats-season/TEAM_ABBR

// https://records.nhl.com/site/api/franchise?include=teams.id&include=teams.active&include=teams.triCode&include=teams.placeName&include=teams.commonName&include=teams.fullName&include=teams.logos&include=teams.conference.name&include=teams.division.name&include=teams.franchiseTeam.firstSeason.id&include=teams.franchiseTeam.lastSeason.id&include=teams.franchiseTeam.teamCommonName

// https://records.nhl.com/site/api/franchise?include=teams.id&include=teams.active&include=teams.triCode&include=teams.logos

// https://records.nhl.com/site/api/franchise?include=teams.active&include=teams.logos
