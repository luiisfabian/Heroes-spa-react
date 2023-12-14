import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
    const heroNames = heroes.map(hero => (
        <HeroCard key={hero.id} {...hero} />
    ))

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroNames}

            </div>

        </>
    )

}

