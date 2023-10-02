import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContentPage from './components/content-page/content';
import Directory from './components/directory/directory';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Directory/>}/>
      </Route>
      <Route path='/content' element={<ContentPage/>}/>
    </Routes>
  );
}

export default App;
