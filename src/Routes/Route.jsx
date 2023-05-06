import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
{path: '/',
element: <LoginLayout></LoginLayout>,
children: [
  {path: '/',
  element: <Navigate to='/category/0'></Navigate>

  },
  
  {
  path: '/login',
  element: <Login></Login>
},

{path: '/register',
element: <Registration></Registration>

}


]

},

  {
    path: "category",
    element: <Main></Main>,
    children: [
     {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
export default router;
