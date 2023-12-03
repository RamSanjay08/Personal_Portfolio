import './App.css';
import NavBar from './components/NavBar/NavBar'
import HomeContainer from './components/HomeContainer/HomeContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import AboutContainer from './components/AboutContainer/AboutContainer'
import IntrestedContainer from './components/IntrestedContainer/IntrestedContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import ContactContainer from './components/ContactContainer/ContactContainer';
import Experiences from './components/Experience/Experience'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeContainer/>
      <AboutContainer/>
      <SkillContainer/>
      <IntrestedContainer/>
      <Experiences />
      <ProjectContainer/>
      <ContactContainer/>
    </div>
  )
}

export default App;
