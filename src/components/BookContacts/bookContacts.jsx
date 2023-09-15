
import {  useDispatch, useSelector } from "react-redux";
import { getContacts } from "components/Redux/selector";
import { deleteContacts } from "components/Redux/contactsSlice";
import { AiFillDelete } from "react-icons/ai";
import {StyledItems, StyledTitle, Container, StyledUl, WrappContactsContainer, ButtonDelete } from './bookContacts.styled'

export const BookContacts = ({title}) => {
   const dispatch = useDispatch()

   // получение данных их хранилища 
   const contactsData = useSelector(getContacts);
   const contacts = contactsData.contacts;
   
return(
<Container>
<StyledTitle>{title}</StyledTitle>

<WrappContactsContainer>
    <StyledUl>
        {contacts.map(contact => (
        <StyledItems key={contact.id}>{contact.name}: {contact.number} 
        <ButtonDelete onClick={() => {
            if (window.confirm(`Вы уверены, что хотите удалить контакт ${contact.name}?`)) {
                dispatch(deleteContacts(contact.id));}}} ><AiFillDelete color="rgb(255, 0, 0)"/></ButtonDelete>
        </StyledItems>
        ))}
    </StyledUl>
    </WrappContactsContainer> 
</Container>
)}