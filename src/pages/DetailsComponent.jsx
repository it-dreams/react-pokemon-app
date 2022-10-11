import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DetailsContainer, Column, PokemonDetail, ImageSection, Img, Button, DescSection, Header, Title, NaviSection, NaviButton, DetailsSeperator, Description, ReadMore, OtherDetailsSection, CategoryTitle, OtherDetail, KeyValue, LabelButton, Stats, StatsInfo, StatsReport, StatsName, EvaluationChain, ArrowSeperator, BottomNavigation } from '../styledComponents/Pokemon.styled';
import '../assets/css/modal.css';
import Card from '../components/shared/Card';
import Progressbar from '../components/shared/ProgressBar';
import ModalOverlay from '../components/shared/ModalOverlay';

import CapitalizeFirstLetter from '../helpers/CapitalizeFirstLetter';
import ConvertNumberIntoInches from '../helpers/ConvertNumberIntoInches';
import ShowNumberIntoThreeDigits from '../helpers/ShowNumberIntoThreeDigits';
import { colorOptions } from '../assets/data/Colors';


const Details = (props) => {
  let { wealAgainst, prevPoke, onClose, nextPoke, selectedPokemon } = props;

  // { console.log(selectedPokemon.types) }
  const [species, setSpecies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const fetchData = async () => {
    const endPoints = [
      `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon.id}`,
      `https://pokeapi.co/api/v2/evolution-chain/${selectedPokemon.id}`,
      `https://pokeapi.co/api/v2/type/${selectedPokemon.id}`
    ]

    setLoading(true);

    const response = await Promise.all(endPoints.map((points) => fetch(points)));
    const result = await Promise.all(response.map((response) => {
      if (response.status === 404) return null
      return response.json()
    }));
    const [pokemon_species, evolution_chain, weak_against] = result;


    // Description
    const description = pokemon_species.flavor_text_entries.reduce((flaverText, flavor) => {
      if (flavor.language.name === 'en') {
        flaverText += flavor.flavor_text;
      }
      return flaverText;
    }, '');


    // Genders
    const genderPoints = [
      `https://pokeapi.co/api/v2/gender/1`,
      `https://pokeapi.co/api/v2/gender/2`,
      `https://pokeapi.co/api/v2/gender/3`
    ]

    const genderResponse = await Promise.all(genderPoints.map((points) => fetch(points)));
    const genderResult = await Promise.all(genderResponse.map((response) => response.json()))
    const [female, male, genderless] = genderResult;

    const genderShow = (gender) => {
      return gender.map(({ pokemon_species }) => pokemon_species.name)
    }

    const pokemonGenders = {
      female: genderShow(female.pokemon_species_details),
      male: genderShow(male.pokemon_species_details),
      genderless: genderShow(genderless.pokemon_species_details)
    };

    const getGender = (name) => {
      let genders = []
      for (let key in pokemonGenders) {
        if (pokemonGenders[key].includes(name)) {
          genders.push(key)
        }
      }
      return genders.join(', ')
    }

    // Evaluation Chain
    const evolution = await axios.get(pokemon_species.evolution_chain.url);
    const getEvolution = async (evolutionData) => {

      let evolutions = [];
      await axios.get(evolutionData.species.url.replace('pokemon-species', 'pokemon')).then(response => {
        const urlImage = response.data.sprites.other.dream_world.front_default;

        const pokemonData = {
          pokeName: evolutionData.species.name,
          id: response.data.id,
          urlImage
        };
        evolutions.push(pokemonData)
      })
      if (evolutionData.evolves_to.length) {
        evolutions = [...evolutions, ...(await getEvolution(evolutionData.evolves_to[0]))]
      }
      return evolutions;
    }


    // Results Object
    var resultObj = {
      description,
      egg_groups: pokemon_species.egg_groups.map((data) => data.name).join(', '),
      evolutions: await getEvolution(evolution.data.chain),
      genders: getGender(selectedPokemon.name.toLowerCase()),
      weakness: weak_against ? weak_against.damage_relations.double_damage_from.map((weak) => weak.name) : null
    }

    setLoading(false);
    setSpecies(resultObj);
  }

  useEffect(() => {
    fetchData()
  }, [selectedPokemon])

  const overlayStyle = {
    position: 'absolute !important',
    top: '-3% !important'
  }

  const navigationButton = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    width: '30%',
    background: 'unset',
    color: 'unset'
  }

  const navigationImage = {
    maxWidth: '38px',
    maxHeight: '35px'
  } 

  return (
    <>
      {!selectedPokemon ? "" : (
        <>
          <DetailsContainer data-testid="detailsRootElement">
            <PokemonDetail>
              <ImageSection style={{ background: `linear-gradient(180deg, ${colorOptions[selectedPokemon.types[0] && selectedPokemon.types[0].type.name || 'unknown']} 0%, ${colorOptions[selectedPokemon.types[1] && selectedPokemon.types[1].type.name || 'unknown']} 100%)` }}>
                <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemon.id}.svg`} alt={selectedPokemon.name} />
              </ImageSection>
              <Header>
                <Title>{selectedPokemon.name.toUpperCase()}</Title>
                <DetailsSeperator></DetailsSeperator>
                <Title>{ShowNumberIntoThreeDigits(selectedPokemon.id, 3)}</Title>
                <DetailsSeperator></DetailsSeperator>
                <NaviSection>
                  <NaviButton onClick={prevPoke} aria-label="Previous">
                    <span className="material-symbols-outlined">
                      arrow_circle_left
                    </span>
                  </NaviButton>
                  <NaviButton onClick={onClose} aria-label="Close">
                    <span className="material-symbols-outlined">
                      cancel
                    </span>
                  </NaviButton>
                  <NaviButton onClick={nextPoke} aria-label="Next">
                    <span className="material-symbols-outlined">
                      arrow_circle_right
                    </span>
                  </NaviButton>
                </NaviSection>
              </Header>
              <Description>
                <>
                  <div className='truncate-overflow' style={{ display: 'inline' }}>{species.description}</div>
                  <ReadMore onClick={() => setOpenModal(true)}>read more</ReadMore>
                </>
              </Description>
            </PokemonDetail>

            {/* Overlay Modal */}
            {openModal && <ModalOverlay style={overlayStyle}>
              <div className='header'>
                <span className="close material-symbols-outlined" onClick={() => setOpenModal(false)}>
                  close
                </span>
              </div>

              <div className='body'>
                <p>{species.description}</p>
              </div>
            </ModalOverlay>}

            {/* Other Dtails Section */}
            <OtherDetailsSection>
              <OtherDetail>
                <KeyValue>Height</KeyValue>
                <KeyValue>{ConvertNumberIntoInches(selectedPokemon.height)}</KeyValue>
              </OtherDetail>

              <OtherDetail>
                <KeyValue>Weight</KeyValue>
                <KeyValue>{selectedPokemon.weight}</KeyValue>
              </OtherDetail>

              <OtherDetail>
                <KeyValue>Gender(s)</KeyValue>
                <KeyValue>{CapitalizeFirstLetter(species.genders)}</KeyValue>
              </OtherDetail>

              <OtherDetail>
                <KeyValue>Egg Group</KeyValue>
                <KeyValue>{CapitalizeFirstLetter(species.egg_groups)}</KeyValue>
              </OtherDetail>
            </OtherDetailsSection>

            <OtherDetailsSection>
              <OtherDetail>
                <KeyValue>Abilities</KeyValue>
                <KeyValue>
                  {selectedPokemon.abilities.map(data => {
                    return <span>{CapitalizeFirstLetter(data.ability.name.length == 1 ? data.ability.name : data.ability.name + ', ')}</span>
                  })}
                </KeyValue>
              </OtherDetail>

              <OtherDetail>
                <KeyValue>Types</KeyValue>
                <KeyValue>
                  {selectedPokemon.types.map(data => {
                    return <LabelButton style={{ background: `${colorOptions[data.type.name]}` }} aria-label="Type">{CapitalizeFirstLetter(data.type.name)}</LabelButton>
                  })}
                </KeyValue>
              </OtherDetail>

              <OtherDetail style={{ flex: '2' }}>
                <KeyValue>Weak Against</KeyValue>
                <KeyValue>
                  {species.weakness && species.weakness.map(weakness => (
                    <LabelButton style={{ background: `linear-gradient(180deg, ${colorOptions[selectedPokemon.types[0] && selectedPokemon.types[0].type.name || 'unknown']} 0%, ${colorOptions[selectedPokemon.types[1] && selectedPokemon.types[1].type.name || 'unknown']} 100%)` }} aria-label="Weal Against">{CapitalizeFirstLetter(weakness)}</LabelButton>
                  ))}
                  {/* <LabelButton aria-label="Weal Against">{wealAgainst}</LabelButton> */}
                </KeyValue>
              </OtherDetail>
            </OtherDetailsSection>

            {/* Stats Section */}
            <Column>
              <Stats>
                <CategoryTitle>Stats</CategoryTitle>
                <StatsInfo>
                  {selectedPokemon.stats.map(data => {
                    return (
                      <StatsReport>
                        <StatsName>{CapitalizeFirstLetter(data.stat.name)}</StatsName>
                        <Progressbar progress={data.base_stat} aria-label={data.base_stat} />
                      </StatsReport>
                    )
                  })}
                </StatsInfo>
              </Stats>
            </Column>

            {/* Evaluation Setion */}
            <Column>
              <CategoryTitle>Evolution Chain</CategoryTitle>
              <EvaluationChain>
                {species.evolutions && species.evolutions.map(({ pokeName, id, urlImage }, index) => (
                  <>
                    <Card image={urlImage} name={pokeName} id={id} cardBackgroundColor={{ background: `linear-gradient(180deg, ${colorOptions[selectedPokemon.types[0] && selectedPokemon.types[0].type.name || 'unknown']} 0%, ${colorOptions[selectedPokemon.types[1] && selectedPokemon.types[1].type.name || 'unknown']} 100%)` }} />
                    {index !== species.evolutions.length - 1 && (
                      <ArrowSeperator>
                        <span className="material-symbols-outlined">
                          {/* arrow_right_alt */}
                          east
                        </span>
                      </ArrowSeperator>
                    )}
                  </>
                ))}
              </EvaluationChain>
            </Column>
          </DetailsContainer>

          <BottomNavigation>
            <Button onClick={prevPoke} aria-label="Previous" style={navigationButton}>
              <span className="material-symbols-outlined">
                arrow_back
              </span>
              <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id - 1}.png`} alt={selectedPokemon.name} style={navigationImage} />
            </Button>
            <Button onClick={nextPoke} aria-label="Next" style={navigationButton}>
              <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id + 1}.png`} alt={selectedPokemon.name} style={navigationImage} />
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Button>
          </BottomNavigation>
        </>
      )}
    </>
  )
}

export default Details;