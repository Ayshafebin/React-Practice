import './App.css';
import Context from './Context/Context';
import MyContext from './Context/MyContext';
// import Props from './Component/Props';

function App() {
 
  return (
    <div className="App">
      {/* <Props vs={'Props'}/> */}

      <MyContext.Provider value={'Context'}>
        <Context/>
      </MyContext.Provider>

      
    </div>
  );
}

export default App;
