import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
    const heroNames = heroes.map(hero => (
        <li key={hero.id}>
            {hero.superhero}
        </li>
    ))

    return (
        <>
            <ul>
                {heroNames}

            </ul>

        </>
    )

}

