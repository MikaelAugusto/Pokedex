import PokemonCard from "./PokemonCard";
import { useState } from "react";

const POKEMONS = [
  {
    id: 563,
    name: "Cofragrigus",
    type: "Fantasma",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
  },
  {
    id: 823,
    name: "Corviknight",
    type: "Voador/Metal",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
  },
  {
    id: 937,
    name: "Ceruledge",
    type: "Fogo/Fantasma",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
  },
];

function PokemonList() {
  const [pokemons] = useState(POKEMONS);
  const [filtro, setFiltro] = useState("");

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase()),
  );

  return (
    <section className="pokemon-catalog" id="catalogo" aria-labelledby="catalogo-titulo">
      <div className="pokemon-catalog__head">
        <h2 id="catalogo-titulo" className="pokemon-catalog__title">
          Catálogo
        </h2>
          <div className="pokemon-toolbar">

            <label htmlFor="busca">Buscar por nome: </label>
            <input
              id="busca"
              type="search"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Ex.: char"
            />
            </div>
      </div>

      {/* Essa bosta é um IF em um jsx */}
      {listaFiltrada.length === 0 ? (
          <label>Nenhum pokemon encontrado para essa busca...</label>
      ) : (
        <label>Mostrando {listaFiltrada.length} pokemon(s)!</label>
      )}
      

      {listaFiltrada.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </section>
  );
}

export default PokemonList;
