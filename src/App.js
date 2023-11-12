import './App.css';
import HomeNav from './components/HomeNav/HomeNav'
import HomeContainer from './components/HomeContainer/HomeContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import AboutContainer from './components/AboutContainer/AboutContainer'

function App() {
  return (
    <div className="App">
      <HomeNav/>
      <HomeContainer/>
      <AboutContainer/>
      <SkillContainer/>
    </div>
  );
}

export default App;
