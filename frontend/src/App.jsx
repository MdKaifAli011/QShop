import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes} />
    </div>
  );
};

export default App;
