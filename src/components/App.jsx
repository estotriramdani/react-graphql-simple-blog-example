import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './molecules/BlogList';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-mono bg-gradient-to-r from-sky-300 to-sky-400">
        <div className="w-[40vw] bg-gray-100 mx-auto p-6 shadow-md min-h-screen text-sky-800">
          <Routes>
            <Route element={<BlogList />} path="/" />
            <Route element={<BlogDetail />} path="/detail/:slug" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
