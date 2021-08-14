import { heroes } from "../../data/Heroes"

export const getHeroesByName = (name='') => {
    
    if (name === '') {
        return [];
    }
    
    name = name.toLowerCase();
    return heroes.filter(hero=>hero.superhero.toLowerCase().includes(name))
}