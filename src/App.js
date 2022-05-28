import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title='Scribble'/>
      <div className="container">
      <TextForm Heading="Type your Text"/>
      </div>
    </>
  );
}

export default App;
