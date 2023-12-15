import { Link } from "react-router-dom"

export const HeroCard = ({
    id, superhero, publisher, alter_ego, first_appearance, characters

}) => {

    // const heroImageUrl = `assets/heroes/${id}.jpg`;

    const characterByHero = (<p className="text-muted">{characters}</p>)
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && characterByHero
                                
                            }

                            <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
