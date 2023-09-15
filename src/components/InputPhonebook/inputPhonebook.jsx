import { useDispatch } from "react-redux";
import { addContacts } from "components/Redux/contactsSlice";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import {Container, FormStyle, FieldStyle, SubmitStyled, LabelStaled, PhoneTitle} from './inputPhonebook.styled'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      number: Yup.number()
      .min(10, 'Too Short!')
      .required('Required'),
  });

  export const InputPhonebook = ({ title}) => {
   // получение ссылки на функц. для отправки экшенов в хранилище
  const dispatch = useDispatch();

    return (
        <Container>
          <PhoneTitle>{title}</PhoneTitle>
  
              <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
        dispatch(addContacts({
          id: nanoid(),
          name: values.name,
          number: values.number,
      }))
      actions.resetForm()
  
       }}
      >
        <FormStyle>
          <LabelStaled htmlFor="name">Name
          <FieldStyle id="name" name="name" type="text" required placeholder="Aron Paper" />
          </LabelStaled>
          <ErrorMessage name="name" component="div"/>
    
          <LabelStaled htmlFor="number">Number
          <FieldStyle id="number" name="number" type="text" required placeholder="3801003322" />
          </LabelStaled>
          <ErrorMessage name="number" component="div"/>
          
          <SubmitStyled type="submit">Add contact</SubmitStyled>
        </FormStyle>
      </Formik>
        </Container>
      
    )
  }