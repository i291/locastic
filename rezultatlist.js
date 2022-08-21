import React, { Component, useEffect, useState, useId } from 'react';
import rezultatServer from './services/rezultat';
import Rezultat from './Rezultati';

export const RezultatList = () => {
  const [stanjeRezLong, prominiStanjeRezLong] = useState([])
  const [stanjeRezMedium, prominiStanjeRezMedium] = useState([])

  useEffect(() => {
    rezultatServer.dohvatiSveRezultatelong()
      .then(response => {
        prominiStanjeRezLong(response.data)
        console.log("RES: ", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    rezultatServer.dohvatiSveRezultatemedium()
      .then(response => {
        prominiStanjeRezMedium(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Stanje Long</h1>
      {
        stanjeRezLong.sort(function (a, b) {
          return a.raceTime.localeCompare(b.raceTime);
        }).map(currentrez => {
          return <Rezultat rezultat={currentrez} key={currentrez._id} />;
        })
      }

      <br></br>

      <h1>Stanje Medium</h1>
      {
        stanjeRezMedium.sort(function (a, b) {
          return a.raceTime.localeCompare(b.raceTime);
        }).map(currentrez => {
          return <Rezultat rezultat={currentrez} key={currentrez._id} />;
        })
      }
    </div>
  )
}
