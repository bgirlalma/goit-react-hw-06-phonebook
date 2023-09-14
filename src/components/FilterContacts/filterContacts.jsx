import {LabelFilter, FilterWrapper, FilterInput} from './filterContacts.styled';

export const FilterContacts = ({value, onChange}) => {
    return (
        <FilterWrapper>
        <LabelFilter htmlFor="filter">Find contacts by name</LabelFilter>  
        <FilterInput type="text" name="filter" value={value} onChange={(e) => onChange(e.target.value)}/>
        </FilterWrapper>
        )
}