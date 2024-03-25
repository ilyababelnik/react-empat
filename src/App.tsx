import { RouterProvider } from 'react-router';
import router from './configuration/routerConfig';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
