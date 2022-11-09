import "./style/landingpage.css"
import Navigationbar from './components/Navigationbar'
import Intro from './components/Intro'
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"

function App() {
  return (
    <div>
      <div className='myBG'>
        <Navigationbar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className='superhero'>
        <Superhero />
      </div>
    </div>
  );
}

export default App;
