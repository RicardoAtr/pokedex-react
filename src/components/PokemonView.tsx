import { IPokemonList } from "../interfaces/pokemon.interface";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import usePokemons from "../hooks/usePokemons";
import { PokemonInfo } from "../interfaces/pokemon.interface";

interface PokemonViewProps {
  pokemon: IPokemonList;
}

export const PokemonView = ({ pokemon }: PokemonViewProps) => {
  const { fetchPokemonInfo, pokemonDetails, handleTypeColor } = usePokemons();
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
                        <div className="mt-3 sm:mt-0 sm:text-left text-2xl capitalize font-bold ">
                          <div className="flex space-x-2 w-full justify-between ">
                            <div>{pokemon.name}</div>
                            <div>#{pokemon.id}</div>
                          </div>
                          <div>
                            <div>
                              <img
                                className="p-8 rounded-t-lg"
                                src={pokemon.image}
                                alt={pokemon.name}
                              />
                            </div>
                            <div className="flex flex-col font-mono ">
                              <div className="mt-2 ">
                                <div className="mt-2 flex space-x-2 uppercase font-bold ">
                                  <div className="text-sm text-gray-500 text-xl text-gray-800">
                                    Height:&nbsp;{pokemonInfo.height}"
                                  </div>
                                  <div className="text-sm text-gray-500 text-xl text-gray-800">
                                    Weight:&nbsp;{pokemonInfo.weight}Kg
                                  </div>
                                </div>
                                <div className="text-lg text-gray-500 font-medium">
                                  {pokemonInfo.stats.map((stat) => (
                                    <div
                                      key={stat.stat.name}
                                      className="mt-1 text-base"
                                    >
                                      {stat.stat.name}
                                      <div className="w-full bg-gray-200 rounded-full dark:bg-white-700 font-bold">
                                        <div
                                          className="bg-green-600 text-xs font-bold text-green-100 text-center p-0.5 leading-none rounded-full"
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
                          </div>
                          <div>
                            <div className="mt-2 flex space-x-2 w-full font-bold  ">
                              <div className="text-sm text-gray-500 w-full font-medium text-center  rounded-lg p-2 ">
                                Skills
                                {pokemonInfo.abilities.map((ability) => (
                                  <div
                                    className="font-mono font-bold text-start bg-gray-200 rounded-md p-1 m-1 pl-2 "
                                    key={ability.ability.name}
                                  >
                                    {ability.ability.name}
                                  </div>
                                ))}
                              </div>
                              <div className="text-sm text-gray-500 w-full font-medium text-center rounded-lg p-2 ">
                                Type
                                {pokemonInfo.types.map((type) => (
                                  <div
                                    className="font-mono font-bold text-start rounded-md p-1 m-1 text-white pl-2 "
                                    key={type.type.name}
                                    style={{
                                      backgroundColor: handleTypeColor(
                                        type.type.name
                                      ),
                                    }}
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
                        Back
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
