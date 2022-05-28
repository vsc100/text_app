import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';



function App() { 
  return (
    <>
      <Navbar title='Scribble'/>
      <div className="container">
      {/* <TextForm Heading="Type your Text"/> */}
      <About/>
      </div>
    </>
  );
}

export default App;
