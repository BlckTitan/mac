import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout";
//pages
import Home from './pages/home';
import Dashboard from "./pages/dashboard";
import NoPage from './pages/noPage';
import Blogs from "./pages/blog/blogs";
import CreateBlog from "./pages/blog/createBlog";
import Blog from "./pages/blog/blog";
import EditBlog from "./pages/blog/editBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="blog/newBlog" element={<CreateBlog />} />
            <Route path="blog/editBlog/:id" element={<EditBlog />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
