import './App.css';

import Navbar from './Navbar';
import Image from './Image';
import List from './List';
import Footer from './Footer';
import NewsLetter from './NewsLetter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Image text='Unlocking Your Creative Potential'/>
      <List title="Meet Our Top Freelancers"/>
      <List title="Satisfied Customers' Stories"/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

