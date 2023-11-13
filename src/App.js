import './App.css';
import HomeNav from './components/HomeNav/HomeNav'
import HomeContainer from './components/HomeContainer/HomeContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import AboutContainer from './components/AboutContainer/AboutContainer'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';

function App() {
  return (
    <div className="App">
      <HomeNav/>
      <HomeContainer/>
      <AboutContainer/>
      <SkillContainer/>
      <ExperienceContainer/>
    </div>
  );
}

export default App;
