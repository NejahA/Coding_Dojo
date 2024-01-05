import React from "react";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
const Display = () => {
    const [item, setItem] = useState("");
    const { category, id } = useParams();
    const [planetid, setPlanetId] = useState(0)
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${category}/${id}/`)
            .then((response) => setItem(response.data))
            
            
    }, [category,id]);
    console.log(item);

    const Homeworld = (item) => {
        const [planet, setPlanet] = useState("")
        useEffect(() => {
            
            axios
            .get(`${item.homeworld}`)
            .then((response) => setPlanet(response.data))
            .then (()=>setPlanetId(item.homeworld.match(/(\d+)/)[0]))
            .catch("Loading")
        }, [id]);
        return planet.name;
    };
    const People = () => {

        if (category === "people") {
            return (
                <>
                    <h4>Character name: </h4> <p> {item.name} </p>
                    <h4>Character gender: </h4> <p> {item.gender} </p>
                    <h4>Character birth year: </h4> <p> {item.birth_year} </p>
                    <h4>Character homeworld: </h4> <Link to={`/planets/${planetid}`} >  <p>  {Homeworld(item)} </p></Link>
                    
                </>
            );
        }
    };
    const Planets = () => {
        if (category === "planets") {
            return (
                <>
                    <h4>Planet name: </h4><p> {item.name} </p>
                    <h4>Planet gravity:</h4><p>  {item.gravity} </p>
                    <h4>Planet terrain: </h4><p> {item.terrain} </p>
                    <h4>Planet population:</h4><p>  {item.population} </p>
                </>
            );
        }
    };
    return (<>
    <People />
    <Planets />
    </>)
};

export default Display;
