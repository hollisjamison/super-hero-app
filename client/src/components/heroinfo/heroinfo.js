/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

const HeroInfo = (props) => {
  const [hero, setHero] = useState({})
  const { heroSlug } = useParams();

  useEffect(() => {
    const fetchHero = async () => {
      let { data } = await axios.get(`/api/heroes/${heroSlug}`);

      setHero(data);
    };

    fetchHero();
  }, [heroSlug]);


  return (
    <div className="page">
      <div className="title">Hero Information</div>
      <div className="subtitle">
        Details about our hero.
      </div>
      <strong>Name: </strong>
      <span>{hero.name}</span>
      <br />
      <strong>Real Name: </strong>
      <span>{hero.realname}</span>
      <br />
      <strong>First Appearance: </strong>
      <span>{hero.firstappearance}</span>
      <br />
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}

export default HeroInfo