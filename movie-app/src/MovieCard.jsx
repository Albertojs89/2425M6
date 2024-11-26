import movies from "./movies";
import React from "react";


export function enviarPelicula(e){
  console.log(e.target.movie)
}

export function MovieCard(){
  return (
    <div onClick={enviarPelicula} className="container my-4">
      <div className="row justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="card" style={{ width: "20rem" }}>
            <h1>{movie.title}</h1>
            <div>
              <img src={movie.poster} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <p className="card-text">{movie.description}</p>
            </div>
            <div className="btnes">
              <button>+</button>
              <button>-</button>
            </div>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}