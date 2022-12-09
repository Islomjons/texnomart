import './App.css';
import HeaderTop from './components/HeaderTop/Headertop';
import Header from './components/header/Header';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import Route from "./routes"


function App() {
  return (
    <div>
      <HeaderTop/>
      <Header/>
      <HeaderBottom/>
      <Route/>
    </div>
  );
}

export default App;
