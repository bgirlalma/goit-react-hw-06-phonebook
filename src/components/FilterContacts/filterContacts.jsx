import { useDispatch, useSelector } from 'react-redux';
import {LabelFilter, FilterWrapper, FilterInput} from './filterContacts.styled';
import { getFilters} from 'components/Redux/selector';
import { setFilter } from 'components/Redux/filterSlice';

export const FilterContacts = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilters) || "";
    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    }
 
    return (
        <FilterWrapper>
        <LabelFilter htmlFor="filter"><span>Find contacts by name</span>
        <FilterInput type="text" name="filter" value={filter} onChange={handleFilterChange}/></LabelFilter>  
        </FilterWrapper>
        )
}