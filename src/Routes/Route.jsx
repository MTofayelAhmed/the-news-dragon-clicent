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
import Terms from "../Pages/Shared/terms and condition/Terms";

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

},
{
  path: 'terms',
  element: <Terms></Terms>
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
          fetch(`https://the-new-dragon-clone-server-mtofayelahmed.vercel.app/categories/${params.id}`),
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
          fetch(`https://the-new-dragon-clone-server-mtofayelahmed.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;
