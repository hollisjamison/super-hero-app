import React, { useEffect, useState } from "react";
import HeroesList from '../heroeslist/heroeslist'
import HeroesSearch from '../heroessearch/heroessearch'
import './superheroes.css'
import axios from "axios";

const Superheroes = () => {
  const [slug, setSlug] = useState("");
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      let fetch = await axios.get("/api/heroes");

      setHeroes(fetch.data);
    };

    fetchHeroes();
  }, []);

  const slugFilter = (hero) => hero.name.toLowerCase().includes(slug.toLowerCase())

  return (
    <div className="page">
      <div className="title">Meet the Heroes v3</div>
      <div className="subtitle">
        A searchable list of all your favorite heroes
      </div>
      <HeroesSearch slug={slug} setSlug={setSlug}/>
      <HeroesList heroes={heroes.filter(slugFilter)} />
    </div>
  );
};

export default Superheroes
