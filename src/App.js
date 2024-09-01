import './App.css';
import Header from './components/Header';
import MainRouteProvider from './MainRouteProvider';

function App() {
  return (
    <div className="App">
      <Header />
      <MainRouteProvider />
    </div>
  );
}

export default App;
