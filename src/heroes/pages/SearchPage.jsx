import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
            <input type="text" placeholder="Search Hero" className="form-control" name="SearchText" autoComplete="off" />
            <button className="btn btn-success mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary">
            Search a Hero!
          </div>

          <div className="alert alert-danger">
            <b>No hero Result</b>
          </div>

          {/* <HeroCard  /> */}
        </div>
      </div>


    </>
  )
}
