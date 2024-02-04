import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './components/form';
import View from './components/view';
import SingleView from './components/singleView';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form/>}></Route>
          <Route exact path='/view' element={<View/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
