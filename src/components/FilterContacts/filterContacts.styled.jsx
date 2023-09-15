import styled from 'styled-components';

export const FilterWrapper = styled.div`

`;

export const LabelFilter = styled.label`
font-family: Cantarell;
font-weight: normal;
font-size: 22px;
margin-left: 20px;
`;

export const FilterInput = styled.input`
width: 30%;
margin: 40px 20px 0 20px;
padding: 5px 0 5px 15px;
border-radius: 10px;
border: 2px solid rgb(21 31 216 / 30%);

font-family: Cantarell;
font-weight: normal;
font-size: 16px;

&:hover{
    border: 3px solid rgb(11 236 17 / 30%);
}
`;