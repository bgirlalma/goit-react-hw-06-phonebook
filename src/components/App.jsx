import { GlobalStyled } from "./globalStyled";
import { InputPhonebook } from "./InputPhonebook/inputPhonebook";
import { FilterContacts } from './FilterContacts/filterContacts'
import { BookContacts } from "./BookContacts/bookContacts";
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
padding: 20px;
`;

const WrapperContainer = styled.div`
display: flex;
gap: 20px;
`;

export const App = () => {

 
  return (
    <Container>
      <WrapperContainer> 
    <InputPhonebook title="Phonebook"/>
    <BookContacts title="Contacts"/>
    </WrapperContainer>
    <FilterContacts />
    <GlobalStyled/>
        </Container>
  );
};
