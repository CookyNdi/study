import './style/Main.css';
import Navigationbar from './components/Navigationbar'
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div>
      <div>
        <Navigationbar />
      </div>
      <div className='Content'>
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;
