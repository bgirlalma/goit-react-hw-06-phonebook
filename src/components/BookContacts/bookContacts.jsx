import { AiFillDelete } from "react-icons/ai";
import {StyledItems, StyledTitle, Container, StyledUl, ButtonDelete } from './bookContacts.styled'

export const BookContacts = ({title, children, contacts, onDeleteContact}) => {
return(
<Container>
<StyledTitle>{title}</StyledTitle>
{children}

    <StyledUl>
        {contacts.map(contact => (
        <StyledItems key={contact.id}>{contact.name}: {contact.number} 
        <ButtonDelete onClick={() => {
            if (window.confirm(`Вы уверены, что хотите удалить контакт ${contact.name}?`)) {
            onDeleteContact(contact.id);}}} ><AiFillDelete color="rgb(255, 0, 0)"/></ButtonDelete>
        </StyledItems>
        ))}
    </StyledUl>
</Container>
)}