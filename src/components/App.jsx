import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './molecules/BlogList';
import BlogDetail from './pages/BlogDetail';
import BlogListDetail from './pages/BlogListDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-mono bg-gradient-to-r from-sky-300 to-sky-400">
        <div className="w-full fixed bottom-4">
          <Link
            to="/"
            className="w-12 h-12 text-white rounded-full  mx-auto flex justify-center items-center bg-sky-400  duration-150 hover:bg-sky-300 hover:ring-2 active:ring-2 focus:ring-2 ring-offset-2 ring-sky-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
          </Link>
        </div>
        <div className="w-[40vw] bg-gray-100 mx-auto p-6 shadow-lg min-h-screen text-sky-800">
          <Routes>
            <Route element={<BlogList />} path="/" />
            <Route element={<BlogDetail />} path="/detail/:slug" />
            <Route element={<BlogListDetail />} path="/tags/:tag" />
          </Routes>
          <div className="h-16"></div>
          <div className="h-px"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
