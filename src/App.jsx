// import Footer from './components/Footer';
// import Header from './components/Header';
// import MainContent from './components/MainContent';

import CopyInput from './components/CopyInput';
import Counter from './components/Counter';
import EventDemo from './components/EventDemo';
import Greetings from './components/Greetings';
import IconComponent from './components/IconComponent';
import Person from './components/Person';
import Product from './components/Product';
import ProductInfo from './components/ProductInfo';
import ProductList from './components/ProductList';
import Profile from './components/Profile';
import ProfileCard from './components/ProfileCard';
import ShoppingList from './components/ShoppingList';
import StyledCard from './components/StyledCard';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import UserStatus from './components/UserStatus';
import Weather from './components/Weather';
import Switcher from './components/Switcher';
import BasicEffect from './components/BasicEffect';
import CounterEffect from './components/CounterEffect';
import FetchDataEffect from './components/FetchDataEffect';
import ComponentA from './components/ComponentA';
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <Greetings />
      <ProductInfo /> */}
      {/* <UserList />
      <ProductList /> */}
      {/* <Person name={'John'} age={26} />
      <Product name={'TV'} price={26} /> */}
      {/* <Weather temperature={24} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greetings timeOfDay={'morning'} /> */}
      {/* <StyledCard />
      <ProfileCard />
      <IconComponent /> */}
      {/* <EventDemo /> */}
      {/* <Counter />
      <TodoList /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <Switcher /> */}
      {/* <BasicEffect />
      <CounterEffect />
      <FetchDataEffect /> */}
      {/* <ComponentA /> */}
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
}

export default App;
