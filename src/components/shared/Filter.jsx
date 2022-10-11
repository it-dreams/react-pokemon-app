import React, { useState, useEffect } from "react";
import { components } from "react-select";
import { typeOptions } from "../../assets/data/Types";
import { genderOptions } from "../../assets/data/Genders";
import { statsOptions } from "../../assets/data/Stats";
import MySelect from "./multiSelect/Multiselect";
import Option from "./multiSelect/Option";
import { Label, SearchByType } from '../../styledComponents/Pokemon.styled';

const MultiValues = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);

const typesData = typeOptions;
const gendersData = genderOptions;
const statsData = statsOptions;


const Filter = (props) => {
    const [selectedCategory, setSelectedCategory] = useState({
        typeSelected: [],
        genderSelected: [],
        statsSelected: []
    });

    // Method for multi selecton
    const handleChange = (filterSelected, filterType) => {
        setSelectedCategory(pvsState => ({
            ...pvsState,
            [filterType]: [...filterSelected]
        }));
    };

    useEffect(() => {
        props.onFilterChange(selectedCategory)
    }, [selectedCategory])


    return (
        <>
            <SearchByType className="mobile">
                <Label htmlFor="type">Type</Label>
                <MySelect
                    options={typesData}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option, MultiValues }}
                    onChange={(e) => handleChange(e, 'typeSelected')}
                    value={selectedCategory.typeSelected}
                />
            </SearchByType>

            <SearchByType className="mobile">
                <Label htmlFor="type">Genders</Label>
                <MySelect
                    options={gendersData}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option, MultiValues }}
                    onChange={(e) => handleChange(e, 'genderSelected')}
                    value={selectedCategory.genderSelected}
                />
            </SearchByType>

            <SearchByType className="mobile">
                <Label htmlFor="type">Stats</Label>
                <MySelect
                    options={statsData}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option, MultiValues }}
                    onChange={(e) => handleChange(e, 'statsSelected')}
                    value={selectedCategory.statsSelected}
                />
            </SearchByType>
        </>
    );
}

export default Filter;