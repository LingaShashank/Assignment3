//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Section from './components/Section.js'
import Footer from './components/Footer.js'

//All my components are imported and are displayed using App.js.

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
