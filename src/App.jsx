// import Footer from './components/Footer';
// import Header from './components/Header';
// import MainContent from './components/MainContent';

import Greetings from './components/Greetings';
import Person from './components/Person';
import Product from './components/Product';
import ProductInfo from './components/ProductInfo';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import UserStatus from './components/UserStatus';
import Weather from './components/Weather';

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
      <Weather temperature={24} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greetings timeOfDay={'morning'} />
    </div>
  );
}

export default App;
