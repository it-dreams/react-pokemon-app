import React, { useState } from 'react';
import '../../assets/css/multiselect.css';
import { HeaderContainer, HeadSection, SiteName, Seperator, SubTitle, SearchSection, MobileOverlayBody, SearchSectionMobile, Label, SearchByName, SearchField, Input, SearchButton, FilterButtin, FiltersSection, Button } from '../../styledComponents/Pokemon.styled';
import Filter from '../shared/Filter';
import ModalOverlay from '../shared/ModalOverlay';


const Header = ({ appTitle, appSubTitle, onSearch, filtersData, onChangeFilter, handleReset }) => {
    const [openModal, setOpenModal] = useState(false);

    const handelOnFilterChange = (e) => {
        onChangeFilter(e);
    }

    return (
        <HeaderContainer data-testid="headerRootElement">
            <HeadSection>
                <SiteName>{appTitle}</SiteName>
                <Seperator />
                <SubTitle>{appSubTitle}</SubTitle>
            </HeadSection>

            <SearchSection>
                <SearchByName>
                    <Label htmlFor="">Search by</Label>
                    <SearchField>
                        <Input type="text" onChange={onSearch} placeholder='Name or Number' />
                        <SearchButton className="material-symbols-outlined">search</SearchButton>
                    </SearchField>
                </SearchByName>

                <FilterButtin onClick={() => setOpenModal(true)}>
                    <span className="material-symbols-outlined" style={{ fontSize: '35px' }}>
                        format_list_bulleted
                    </span>
                </FilterButtin>
                <FiltersSection>
                    <Filter typeOptions={filtersData} onFilterChange={handelOnFilterChange} />
                </FiltersSection>
            </SearchSection>

            {/* Overlay Modal */}
            {openModal && <ModalOverlay
                // styles for child component
                modalOverlayMain={{
                    position: 'fixed',
                    top: '5%',
                    background: 'rgb(46, 49, 86, 90 %)',
                    overflow: 'auto'
                }}
                overlayContentStyle={{
                    background: "white",
                    height: "85vh",
                    fontSize: '23px',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                onClick={() => setOpenModal(false)}
            >
                <MobileOverlayBody >
                    <div className='header'>
                        <span>Filters</span>
                        <span className="close" onClick={() => setOpenModal(false)}>
                            X
                        </span>
                    </div>
                    <SearchSectionMobile >
                        <div className='searchByGender'>
                            <Filter typeOptions={filtersData} onFilterChange={handelOnFilterChange} />
                        </div>
                    </SearchSectionMobile>
                    <div className='mobileFooter'>
                        <Button aria-label="Previous" onClick={handleReset}>Reset</Button>
                        <Button aria-label="Next">Apply</Button>
                    </div>
                </MobileOverlayBody>

            </ModalOverlay>}
        </HeaderContainer >
    )
}

export default Header;