import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout";
//pages
import Home from './pages/home';
import Dashboard from "./pages/dashboard";
import NoPage from './pages/noPage';
import Blogs from "./pages/blog/blogs";
import CreateBlog from "./pages/blog/createBlog";
import Blog from "./pages/blog/blog";
import EditBlog from "./pages/blog/editBlog";
import Authors from "./pages/author/authors";
import CreateAuthor from "./pages/author/createAuthor";
import EditAuthor from "./pages/author/editAuthor";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";

function App() {

  // const [checkLogin, setCheckLogin] = useState(null)

  const checkLogin = localStorage.getItem('author')


  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={checkLogin ? <Dashboard /> : <Navigate to='/login'/> } />
            <Route path="blogs" element={checkLogin ? <Blogs /> :  <Navigate to='/login'/> } />
            <Route path="blog/:id" element={checkLogin ? <Blog /> : <Navigate to='/login'/> } />
            <Route path="blog/newBlog" element={checkLogin ? <CreateBlog /> : <Navigate to='/login'/> } />
            <Route path="blog/editBlog/:id" element={checkLogin ? <EditBlog />  : <Navigate to='/login'/> } />
            <Route path="author/authors" element={checkLogin ? <Authors /> : <Navigate to='/login'/> } />
            <Route path="author/createAuthor" element={checkLogin ? <CreateAuthor />  : <Navigate to='/login'/> } />
            <Route path="author/editAuthor/:id" element={checkLogin ? <EditAuthor />  : <Navigate to='/login'/> } />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
