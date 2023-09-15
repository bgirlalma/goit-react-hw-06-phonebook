import {LabelFilter, FilterWrapper, FilterInput} from './filterContacts.styled';

export const FilterContacts = ({value, onChange}) => {
    return (
        <FilterWrapper>
        <LabelFilter htmlFor="filter"><span>Find contacts by name</span>
        <FilterInput type="text" name="filter" value={value} onChange={(e) => onChange(e.target.value)}/></LabelFilter>  
        </FilterWrapper>
        )
}