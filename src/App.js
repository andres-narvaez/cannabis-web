import { Routes, Route } from 'react-router-dom'
import DefaultTemplate from './pages/defaultTemplate/defaultTemplate';
import HomePage from './pages/home/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}> 
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
