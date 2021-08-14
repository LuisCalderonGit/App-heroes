import { heroes } from "../../data/Heroes";

export const getHeroresById = (id) => {

    return heroes.find(hero => hero.id === id);
}