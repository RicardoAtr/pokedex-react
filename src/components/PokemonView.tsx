import { IPokemonList } from "../interfaces/pokemon.interface";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import usePokemons from "../hooks/usePokemons";
import { PokemonInfo } from "../interfaces/pokemon.interface";

interface PokemonViewProps {
  pokemon: IPokemonList;
}

export const PokemonView = ({ pokemon }: PokemonViewProps) => {
  const { fetchPokemonInfo, pokemonDetails } = usePokemons();
  const [open, setOpen] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    fetchPokemonInfo(pokemon.id);
  }, []);

  useEffect(() => {
    if (pokemonDetails) {
      setPokemonInfo(pokemonDetails);
    }
  }, [pokemonDetails]);

  return (
    <>
      {pokemonInfo && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="text-center items-center justify-center flex ">
                        <div className="mt-3  sm:ml-4 sm:mt-0 sm:text-left text-2xl capitalize font-bold ">
                          {pokemon.name}
                          <img
                            className="p-8 rounded-t-lg"
                            src={pokemon.image}
                            alt={pokemon.name}
                          />
                          <div className="flex flex-col font-mono font-medium">
                            <div className="mt-2 ">
                              <div className="mt-2 flex space-x-2 uppercase">
                                <div className="text-sm text-gray-500">
                                  Altura:&nbsp;{pokemonInfo.height}"
                                </div>
                                <div className="text-sm text-gray-500">
                                  Peso:&nbsp;{pokemonInfo.weight}Kg
                                </div>
                              </div>
                              <div className="text-lg text-gray-500">
                                {pokemonInfo.stats.map((stat) => (
                                  <div
                                    key={stat.stat.name}
                                    className="mt-1 text-base"
                                  >
                                    {stat.stat.name}
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-white-700">
                                      <div
                                        className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full"
                                        style={{
                                          width: `${stat.base_stat}%`,
                                          maxWidth: "100%",
                                        }}
                                      >
                                        {stat.base_stat}%
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mt-2 flex space-x-2 w-full font-bold  ">
                              <div className="text-sm text-gray-500 w-full font-medium text-center bg-gray-200 rounded-lg p-2 ">
                                Habilidades
                                {pokemonInfo.abilities.map((ability) => (
                                  <div
                                    className="font-mono font-medium text-start bg-red-200 rounded-md p-1 m-1 "
                                    key={ability.ability.name}
                                  >
                                    {ability.ability.name}
                                  </div>
                                ))}
                              </div>
                              <div className="text-sm text-gray-500 w-full font-medium text-center bg-gray-200 rounded-lg p-2">
                                Tipo
                                {pokemonInfo.types.map((type) => (
                                  <div
                                    className="font-mono font-medium text-start bg-red-200 rounded-md p-1 m-1"
                                    key={type.type.name}
                                  >
                                    {type.type.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Volver
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
};

export default PokemonView;
