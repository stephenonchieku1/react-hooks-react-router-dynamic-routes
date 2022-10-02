import React from "react";
import { Route useRouteMatch} from "react-router-dom";
import MoviesList from "./MoviesList";
import MoviesPage from "./MoviesShow"
function MoviesPage({ movies }) {
 const match=useRouteMatch();
  return (
    <div>
       <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path= {`${match.url}/:movieId`}>
      <MovieShow movies={movies}></MovieShow>
      </Route>
    </div>
  );
}
export default MoviesPage;
