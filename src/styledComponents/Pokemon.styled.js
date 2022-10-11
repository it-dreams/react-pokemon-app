import styled from 'styled-components';

/*======================== 
    App Component
======================== */
const AppContainer = styled.div`
  background-color: #DEEDED;
  height: 100%;
`

/*======================== 
    Header Component
======================== */
// Container Styled Component
const HeaderContainer = styled.div``

// Header Section Styled Component
const HeadSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
        align-items: center;
        padding: 20px 0;
    }
`

// Brand name (Website name) Styled Component
const SiteName = styled.h1`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2E3156;


    @media screen and (min-width: 1280px) {
        font-size: 30px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
`

// Vertical line Styled Component
const Seperator = styled.span`
    border: 1px solid #5D5F7E;

    @media screen and (min-width: 1280px) {
        height: 80px;
        border: 1px solid #5D5F7E;
    }
`

// Website Subtitle Styled Component
const SubTitle = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #5D5F7E;
;

    @media screen and (min-width: 1280px) {
        font-size: 20px;
        font-weight: 500;
        color: #777;
        margin-left: 20px;
    }
`

// Search section for all Input search, & Filter Styled Component
const SearchSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media screen and (min-width: 1280px) {
        // flex-direction: row;
    }
`

// Label Text Styled Component
const Label = styled.label`
    display: none;

    @media screen and (min-width: 1280px) {
        display: block;
        margin-bottom: 10px;
        margin-left: 10px;
        font-size: 18px;
        font-weight: 400;
        color: #5D5F7E;
;
    }
`

// Search By Name section Styled Component
const SearchByName = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    @media screen and (min-width: 1280px) {
        width: 48.5%;
    }
`

// Group for Input & Button Styled Component
const SearchField = styled.div`
    display: flex;
    background: #C9DDE1;
    padding: 10px;
    align-items: center;
    border-radius: 7px;
`

// Styled Component for Input 
const Input = styled.input`
    width: 100%; 
    padding: 10px; 
    background: transparent; 
    outline: none; 
    border: none;
    font-size: 16px;
    color: #5D5F7E;
}
`

// Create Magnifier icon for in Styled Component
const SearchButton = styled.span`
    border: unset;
    cursor: pointer;
    color: #5D5F7E;
    padding-right: 10px;
    font-size: 26px;
`

// Style component for Filter menu button for mobile
const FilterButtin = styled.div`
    width: 18%;
    background: #2E3156;
    border: 1px solid #2E3156;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    @media screen and (min-width: 1280px) {
        display: none;
    }
`

// Style component for filter section 
const FiltersSection = styled.div`
    display: none;
    
    @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        width: 48.5%;
        background: transparent;
    }
`

// Filter By Type Section Styled Component
const SearchByType = styled.div`
    display: none;

    @media screen and (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        width: 29%;
    }

    &.mobile{
        display: block;
        margin-bottom: 30px;
    }
`

// Filter By Gender Section Styled Component
const SearchByGender = styled.div`
    display: none;

    @media screen and (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        width: 29%;
    }
`

// Filter By Stats Section Styled Component
const SearchByStats = styled.div`
    display: none;

    @media screen and (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        width: 29%;
    }
`

const MobileOverlayBody = styled.div`
    & > .header {
        display: flex;
        justify-content: space-between;
        color: #333;
        padding: 15px 0;
        border-bottom: 1px solid #777;
        font-size: 23px;
        font-weight: 700;
        &>.close {
            color: #333;
            border: 1.5px solid #333;
            padding: 1px 7px;
            border-radius: 50%;
            font-weight: 400;
            font-size: 20px;
        }
    }
    & > .mobileFooter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 15px;
        margin: 0 auto;
        width: 82vw;
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 50px;
        border-top: 1px solid #777;
        box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.44);
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.44);
        -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.44);
        & > button{
            margin-left: unset;
        }
    }
`

const SearchSectionMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin: 40px 0px 98px;
    flex-direction: column;

    & > .SearchByName {
        display: flex;
        flex-direction: row;

        &> .SearchField {
            
        }
    }

    & > .css-b62m3t-container 
        & > .css-1s2u09g-control {
            border: 1px solid #888;
            background: transparent;
        }
    }
    & > .searchByGender {
        margin-bottom: 30px;

        &> Filter {

        }
    }


    @media screen and (min-width: 1280px) {
        display: none;
    }
`



/*======================== 
    Pokemon List Component
======================== */
// const PokemonListContainer = styled.div``
// const PokemonListContainer = styled.div``
// const PokemonListContainer = styled.div``
// const PokemonListContainer = styled.div``



/*======================== 
    Card Component
======================== */
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    // height: 255px;
    // background: linear-gradient(180deg, #C0D4C8 0%, #CFB7ED 100%);
    border: 2px dashed #333;
    border-radius: 8px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 194px;
        height: 277px;
    }
`

// Style components for image tag
const Img = styled.img`
    width: 110px;
    height: 130px;
    margin: 20px 0;

    @media screen and (min-width: 1280px) {
        width: 118px;
        height: 145px;
    }
`

// Style components forPokemon Details setction
const PokemonDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0px;
    line-height: 1.4;
    margin-bottom: 20px;
`

// Style components for pokemon name section
const PokemonName = styled.span`
    font-size: 15px;
    font-weight: 800;
    color: #2E3156;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

// Style components for pokemon id section
const PokemonId = styled.span`
    font-size: 15px;

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`


/*======================== 
    Modal Component
======================== */
const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(46,49,86, 90%);
    overflow: auto;

    @media screen and (min-width: 1280px) {
        // display: flex;
        // align-items: center;
        // justify-content: center;
    }
`

// Style components for modal content
const ModalContent = styled.div`
    width: 100%;
    background: #deeded;

    @media screen and (min-width: 768px) {
        width: 80%;
        margin: 5% auto;
    }

    @media screen and (min-width: 1280px) {
        width: 756px;
    }
`


/*======================== 
    Modal Overlay Component
======================== */
const ModalOverlayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 90%!important;
    height: auto;
    max-height: fit-content;
    margin: 0 auto;
    // box-shadow: 0px 4px 20px #2E3156;

    @media screen and (min-width: 1280px) {
        // left: 0;
        // top: 22%;
        // margin: auto 35px;
        height: auto;
        display: flex;
        justify-content: center;
        // align-items: center;
        margin: 35% auto;
    }
`

// Style components for Modal content
const ModalOverlayContent = styled.div`
    width: 100%;
    height: 90%;
    background: #2E3156;
    color: #fff;
    border-radius: 8px;
    padding: 20px;
    overflow: auto;
    font-size: 14px; 
    font-weight: 400;

    @media screen and (min-width: 768px) {
        // margin: 5% auto;
        margin: 0 auto;
        display: flex;
        flex-direction: row-reverse;
    }

    @media screen and (min-width: 1280px) {
        // width: 756px;
    }
`


/*======================== 
    Progress Bar Component
======================== */
const ProgressContainer = styled.div`
    height: height;
    width: 70%;
    background: #93B2B2;
    border-radius: 40;
    margin: 50;
    height: max-content;
`

// Style component for Progress bar content
const ProgressBody = styled.div`
    // width: progress}%;
    max-width: 100%;
    background: #2E3156;
    border-radius: 40;
`

// Style component for Progress bar value
const ProgressText = styled.div`
    padding: 0 10px;
    color: #fff;
    font-weight: 900;
`

/*======================== 
    Loader Component
======================== */
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw; 
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(46,49,86, 50%);
    overflow: hidden;
`

const SpinnerContant = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > div {
        display: flex;
        flex-direction: column;
        line-height: 1.4;
        color: #5D5F7E;
        & > span {
            &:first-child {
                color: #2E3156;
                font-size: 22px;
                font-weight: 700;
            }
        }
    }
`


/*======================== 
    Home Page Component
======================== */
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1920px;
    margin: 0 auto;
`

// Style component for Header top section
const TopSection = styled.div`
    margin-bottom: 20px;
`

// Style component for pokemon list section 
const ListSecton = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // grid-gap: 10px;

    @media screen and (min-width: 1280px) {
        // grid-template-columns: repeat(6, 1fr);
        // grid-gap: 20px;
        gap: 25px;
    }
`



/*======================== 
    Details Page Component
======================== */
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  position: relative;
`

// Style component for row 
const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

// Style component for pokemon detail 
const PokemonDetail = styled.div`
    display: flex;
    // justify-content: space-between;
    margin-bottom: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    // height: 300px;
    gap: 20px;

    @media screen and (min-width: 1280px) {
        flex-direction: column;
        flex-wrap: wrap;
        // width: 28%;
        height: 300px;
        // order: 1;
    }
`

// Style component for Image Section
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 255px;
  background: linear-gradient(180deg, #C0D4C8 0%, #CFB7ED 100%);
  border: 2px dashed #333;
  border-radius: 8px;
  cursor: pointer;
  order: 2;
  width: 45%;

  @media screen and (min-width: 1280px) {
      width: 28%;
      // height: 277px;
      order: 1;
  }
`

// Style component for Image tag
// const Img = styled.img`
//   width: 110px;
//   margin: 20px 0;

//   @media screen and (min-width: 1280px) {
//       width: 118px;
//   }
// `

// Style component for description section
const DescSection = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  width: 65%; 
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
      width: 65%;
  }
`

// Style component for Header section
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 20px;
    order: 1;
    width: 100%;


    @media screen and (min-width: 1280px) {
        width: 68%;
        order: 2;
    }
`

// Style component for Pokemon Name 
const Title = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #2E3156;

  &:first-child{
    font-weight: 800;
  }
`

// Style component for vertical line seperator
const DetailsSeperator = styled.span`
  border-bottom: 1px solid #5D5F7E;

  @media screen and (min-width: 1280px) {
      height: 53px;
      border-right: 2px solid #5D5F7E;
  }
`

// Style component for navigation button section
const NaviSection = styled.span`
  display: flex;
  justify-content: space-between;
`

// Style component for navigation buttons
const NaviButton = styled.span`
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
  display: none;

  &:nth-child(2) {
    display: block;
  }

  @media screen and (min-width: 1280px) {
      display: block;
  }
`

// Style component for description content section 
const Description = styled.div`
    font-size: 16px;
    color: #2E3156;
    line-height: 1.5;
    order: 3;
    width: 45%;
    color: #2E3156;
    font-weight: 400;

    @media screen and (min-width: 1280px) {
        order: 3;
        width: 68%;  
    }
`

// Style component for read more button
const ReadMore = styled.span`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  color: #2E3156;
`

// Style component for pokemon aditional details setction
const OtherDetailsSection = styled.div`
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        gap: 25px;
    }
`

// Style component for category title 
const CategoryTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

// Style component for additional Detail
const OtherDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.5;
`

// Style component for name  & value section
const KeyValue = styled.div`
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  color: #2E3156;

  &:first-child {
    font-weight: 700;
    margin-bottom: 10px;
  }
`

// Style component for label buttons
const LabelButton = styled.span`
  padding: 3px 9px;
  border-radius: 8px;
  margin-right: 5px;
  background: #FCC1B0;
  color: #2E3156;
  border: 1px solid #2E3156;
  margin-bottom: 10px;
`

// Style component for stats section
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  background: #B0D2D2;
  border-radius: 8px;
  // box-shadow: -10px 4px 130px #2E3156;
  padding: 20px;
  margin-bottom: 50px;
`

// Style component for statsInfo setcion
const StatsInfo = styled.div`

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    gap: 17px;
    justify-content: space-between;
  }
`

// Style component for stats report group section
const StatsReport = styled.div`
  display: flex;
  margin-bottom: 17px;
  align-items: center;

  @media screen and (min-width: 1280px) {
    width: 45%;
  }
`

// Style component for stats name
const StatsName = styled.div`
  font-size: 16px;
  width: 85px;
`

// Style component for Evaluation Chain section
const EvaluationChain = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // width: calc(100% - 20%);
    width: 100%;
    overflow: auto;

    &> Img {
        width: 20px !important;
    }

    @media screen and (min-width: 1280px) {
        &> Card {
            width: max-content;
        }
    }
`

// Style component for Arrow seperator
const ArrowSeperator = styled.div`
    & > .material-symbols-outlined {
        font-size: 22px;
        color: #2E3156;
        
        @media screen and (min-width: 560px) {
            font-size: 50px;
        }
        @media screen and (min-width: 1280px) {
            font-size: 58px;
        }
    }
`

// Style component for Bottom navigation button
const BottomNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 0 auto;
        
    @media screen and (min-width: 1280px) {
        display: none;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        display: none;
    }
`


export { AppContainer, HeaderContainer, HeadSection, SiteName, Seperator, SubTitle, SearchSection, Label, SearchByName, SearchField, Input, SearchButton, MobileOverlayBody, FilterButtin, FiltersSection, SearchByType, SearchByGender, SearchByStats, SearchSectionMobile, CardContainer, Img, PokemonDetails, PokemonName, PokemonId, ModalContainer, ModalContent, ModalOverlayContainer, ModalOverlayContent, ProgressContainer, ProgressBody, ProgressText, HomeContainer, TopSection, ListSecton, DetailsContainer, Row, Column, PokemonDetail, ImageSection, DescSection, Header, Title, NaviSection, NaviButton, DetailsSeperator, Description, ReadMore, OtherDetailsSection, CategoryTitle, OtherDetail, KeyValue, LabelButton, Stats, StatsInfo, StatsReport, StatsName, EvaluationChain, ArrowSeperator, BottomNavigation, Button, SpinnerContainer, SpinnerContant }