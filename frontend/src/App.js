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
import { loggedIn } from "./utils/func";

function App() {

  const LOGGED_IN = loggedIn()

  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={LOGGED_IN ? <Dashboard /> : <Navigate to='/login'/> } />
            <Route path="blogs" element={LOGGED_IN ? <Blogs /> :  <Navigate to='/login'/> } />
            <Route path="blog/:id" element={LOGGED_IN ? <Blog /> : <Navigate to='/login'/> } />
            <Route path="blog/newBlog" element={LOGGED_IN ? <CreateBlog /> : <Navigate to='/login'/> } />
            <Route path="blog/editBlog/:id" element={LOGGED_IN ? <EditBlog />  : <Navigate to='/login'/> } />
            <Route path="author/authors" element={LOGGED_IN ? <Authors /> : <Navigate to='/login'/> } />
            <Route path="author/createAuthor" element={LOGGED_IN ? <CreateAuthor />  : <Navigate to='/login'/> } />
            <Route path="author/editAuthor/:id" element={LOGGED_IN ? <EditAuthor />  : <Navigate to='/login'/> } />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
