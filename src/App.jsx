import Button from './components/Button';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Card title="Card Title 1" content="This is the content of the first card." />
        <Card title="Card Title 2" content="This is the content of the second card." />
        <Button label="Click Me" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}


export default App;