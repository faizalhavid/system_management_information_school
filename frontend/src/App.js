import {BrowserRouter,Routes,Route} from "react-router-dom";
import  SiswaList  from "./components/SiswaList";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiswaList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
