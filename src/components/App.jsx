import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';




const Home = lazy(() => import('../pages/Home/Home'))
const Register = lazy(() => import('../pages/Register/Register'))
const Login = lazy(() => import('../pages/Login/Login'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))


export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>


    // <Container>
    //   <Section title={'Phonebook'} />
    //   <Phonebook />
    //   <Section title={'Contacts'} />
    //   <Filter />
    //   <ContactsList />
    //   <GlobalStyle />
    // </Container>
  );
};
