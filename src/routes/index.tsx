import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../components/AllBooks";
import CreateBook from "../components/CreateBook";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [],
  },
  {
    path: "/books",
    Component: AllBooks,
  },
  {
    path: "/add-book",
    Component: CreateBook,
  },
]);

export default router;
