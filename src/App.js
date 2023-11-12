import './App.css';
import HomeNav from './components/HomeNav/HomeNav'
import HomeContainer from './components/HomeContainer/HomeContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';

function App() {
  return (
    <div className="App">
      <HomeNav/>
      <HomeContainer/>
      <SkillContainer/>
    </div>
  );
}

export default App;
