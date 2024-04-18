import React, { useState, useEffect } from 'react'
import usePromise from 'react-promise'

const buttons = ["Human", "Humanoid", "Robot", "Alien", "Animal", "Mythological Creature"]

function App() {
  const url = "https://rickandmortyapi.com/api/character/"
  const [species, setSpecies] = useState("")
  const [charData, setCharData] = useState([])
  // let images = []

  useEffect(() => {

    console.log(species)

    const getRandom = (max) => {
      const minCeiled = Math.ceil(1);
      const maxFloored = Math.floor(max);
      return (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled))
    }

    const getData = () => fetch(url + "/?species=" + species).then((response) => response.json())
      .then((data) => {
        setSpecies("")
        return (data.results[getRandom(20)])
      })
    if (species != "") {
      getData().then((x) => setCharData(x))
    }
  }, [species])

  let element = buttons.map(function (val) {
    return (
      <>
        <button onClick={() => setSpecies(val)} key={val} title={val}>{val}</button>
      </>
    );
  })

  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      {element}
      {/* {picture} */}
      <div>
        <h2>{charData.name}</h2>
        <img src={charData.image} />
      </div>
    </div>
  )
}

export default App