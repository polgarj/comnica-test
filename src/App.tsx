import MainPage from './pages/MainPage/MainPage';
import UserList from './pages/UserList/UserList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </Router>
  )
}

export default App
