import { Container } from "components/App.styled"
import Section from "components/Section/Section"
import Phonebook from "components/Phonebook/Phonebook"
import Filter from "components/Filter/Filter"
import ContactsList from "components/ContactsList/ContactsList"



const Contacts = () => {

    return (
      <Container>
      <Section title={'Phonebook'} />
      <Phonebook />
      <Section title={'Contacts'} />
      <Filter />
      <ContactsList />
    </Container>
    )

}


export default Contacts