import './App.css';
// import Forecast from './Components/Forecast';
import Time from './Components/Time';

function App() {
  return (
    <>
    <div className='mainBox'>
        <div className='detailMainBox'>
            <Time />
            {/* <Forecast /> */}
        </div>
      </div>
    </>
  );
}

export default App;
