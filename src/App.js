import './App.css';
import NavBar from './components/NavBar/NavBar'
import HomeContainer from './components/HomeContainer/HomeContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import AboutContainer from './components/AboutContainer/AboutContainer'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import ContactContainer from './components/ContactContainer/ContactContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeContainer/>
      <AboutContainer/>
      <SkillContainer/>
      <ExperienceContainer/>
      <ProjectContainer/>
      <ContactContainer/>
    </div>
  );
}

export default App;
