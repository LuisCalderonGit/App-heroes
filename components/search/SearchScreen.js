import React, { useMemo } from 'react';
import queryString  from "query-string";
import { useLocation } from 'react-router';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    
    const { q=' '}=queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchtext:q
    });
    
    const { searchtext } = formValues;
    

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchtext}`)
    }
    const heroesFiltered= useMemo(() =>getHeroesByName(q) , [q])
     


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row" >
                <div className="col-5">
                    <h4>Search Form</h4>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="find your hero"
                            className="form-control"
                            name="searchtext"
                            autoComplete="off"
                            value={searchtext}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"    
                            className="btn m-1 btn-block btn-outline-primary"
                        >Search</button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>

                    {(q !== '' && heroesFiltered.length===0) && <div className="alert alert-danger">
                            There is no a hero with {q}
                    </div>}
                    
                    {(q === '') &&
                        <div className="alert alert-info">
                        Search a Hero
                    </div>}
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                       )) 
                        }

                </div>

            </div>
        </div>
    )
}
