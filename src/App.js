import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "pages/create/Create";
// import Profile from "pages/profile/Profile";
// import Setting from "pages/setting/Setting";
// import Logout from "pages/logout/Logout";
import NotFound from "pages/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      {/* <Route path="profile" element={<Profile />} />
      <Route path="setting" element={<Setting />} />
      <Route path="logout" element={<Logout />} /> */}
      <Route path="*" element={<NotFound />} />

      {/* ... etc. */}
    </Route>
  )
);

function App() {
  
  return (
      <RouterProvider router={router} />
    
  );
}

export default App;
// json-server --watch data/db.json --port 9000