// import { useState, useEffect } from 'react';
// import api from './services/pokemonApi';

// function App() {
//   const [pokemonData, setPokemonData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await api.get('https://pokeapi.co/api/v2/pokemon?limit=20');
//         setPokemonData(response.data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Pokédex</h1>
//       <ul>
//         {pokemonData.map((pokemon) => (
//           <li key={pokemon.name}>{pokemon.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;