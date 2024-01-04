import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout";
//pages
import Home from './pages/home';
import Dashboard from "./pages/dashboard";
import NoPage from './pages/noPage';
import Post from "./pages/post/post";
import CreatePost from "./pages/post/createPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="post" element={<Post />} />
            <Route path="post/newPost" element={<CreatePost />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
