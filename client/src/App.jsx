import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/getuser/user";
import Add from "./components/adduser/add";
import Edit from "./components/updateuser/Edit";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User/>,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
