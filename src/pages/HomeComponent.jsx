import React, { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import axios from 'axios';
import { HomeContainer, TopSection, ListSecton } from '../styledComponents/Pokemon.styled';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../components/shared/Card';
import Spinner from '../components/shared/Spinner';
import Header from '../components/widgets/HeaderComponent';
import Details from './DetailsComponent';
import { colorOptions } from '../assets/data/Colors';

// Lazy Loading
const Modal = lazy(() => import("../components/shared/Modal"));

// CSS Styling for Virtual Scrolling
const InfiniteScrolling = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px'
}

const Home = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const [modalToggle, setModalToggle] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const [currentIndex, setSetCurrentIndex] = useState();
    const [searchData, setSearchData] = useState();
    const [filterData, setFilterData] = useState();

    // Modal open/close buttons
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const toggleModal = () => setModalToggle(handleOpen);

    // Goto next/prev page buttons
    const handlePrev = () => setModalInfo(pokemonData[currentIndex - 1]);
    const handleNext = () => setModalInfo(pokemonData[currentIndex + 1]);

    const getAllPokemons = async () => {
        setLoading(true)
        const res = await fetch(pokemonUrl)
        const data = await res.json()

        // Virtual scrolling
        setPokemonUrl(data.next)

        async function createPokemonObject(results) {
            const pokemons = results.map(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                return await res.json()
            })
            const getPokemons = await Promise.all(pokemons)
            setPokemonData(previousState => [...previousState, ...getPokemons.sort((a, b) => a.id - b.id)])
        }
        setLoading(false)
        createPokemonObject(data.results);
    }

    useEffect(() => {
        getAllPokemons();
    }, [])


    // Pagination 
    useEffect(() => {
        const index = pokemonData.findIndex(pokemon => pokemon.id === modalInfo.id && modalInfo.id) === 0
            ? pokemonData.length - 1 : pokemonData.findIndex(pokemon => pokemon.id === modalInfo.id && modalInfo.id) === pokemonData.length - 1
                ? 0 : pokemonData.findIndex(pokemon => pokemon.id === modalInfo.id);
        setSetCurrentIndex(index)
    }, [modalInfo])

    // Show Pokemon Detals
    const showDetails = (info) => {
        setModalInfo(info);
        toggleModal();
    }

    // Search by Name/Id
    const handleOnSearch = (e) => {
        const pokemonSearch = pokemonData.filter(pokemon => pokemon.name.includes(e.target.value) || pokemon.id.toString().includes(e.target.value));
        setSearchData(pokemonSearch);
    }

    // Filter by Types
    const handleOnFilter = (filters) => {
        if (filters.typeSelected.length > 0) {
            const showType = (poke) => {
                const types = filters.typeSelected.map(item => item.value)
                return poke.types.filter(item => types.includes(item.type.name)).length > 0;
            }
            const pokemonType = pokemonData.filter(poke => showType(poke))
            setFilterData(pokemonType);
        } 
        if (filters.statsSelected.length > 0) {
            const showStats = (poke) => {
                const stats = filters.statsSelected.map(item => item.value)
                return poke.stats.filter(item => stats.includes(item.stat.name)).length > 0;
            }
            const pokemonStats = pokemonData.filter(poke => showStats(poke))
            setFilterData(pokemonStats);
        }
    }

    // Reset 
    const handleReset = () => {
        setFilterData([]);
    }

    return (
        <HomeContainer data-testid="homeRootElement">
            <TopSection>
                <Header appTitle="Pokedex" appSubTitle="Search for any Pokemon that exists on the planet" onSearch={handleOnSearch} onChangeFilter={handleOnFilter} reset={handleReset} />
            </TopSection>
            <ListSecton>
                <InfiniteScroll style={InfiniteScrolling} dataLength={pokemonData.length} next={() => (searchData || filterData || pokemonData).length ? getAllPokemons() : null} hasMore={true} loader={!!(searchData || filterData || pokemonData).length && <Spinner />}>
                    {loading ? (
                        <Spinner />
                    ) : (
                        !!(searchData || filterData || pokemonData).length > 0 ?
                            (searchData || filterData || pokemonData).map((item, index) => {
                                const cardBgColor = {
                                    background: `linear-gradient(180deg, ${colorOptions[item.types[0].type.name]} 0%, ${colorOptions[item.types[1] && item.types[1].type.name] || 'transparent'} 100%)`
                                }
                                return <Card cardBackgroundColor={cardBgColor}
                                    key={index}
                                    image={item.sprites.other.dream_world.front_default}
                                    name={item.name}
                                    id={item.id}
                                    openModal={() => showDetails(item)}
                                />
                            })
                            : <h1>Data not Found</h1>
                    )}
                </InfiniteScroll>

                {show ?
                    <Suspense fallback={<div>Loading</div>}>
                        <Modal show={show}>
                            <Details
                                selectedPokemon={modalInfo}
                                onClose={handleClose}
                                prevPoke={handlePrev}
                                nextPoke={handleNext}
                            />
                        </Modal>
                    </Suspense>
                    : null}
            </ListSecton>
        </HomeContainer>
    )
}

export default Home;