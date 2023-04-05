import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Plants } from './components/plants/Plants'
import { SingelPlant } from './components/singelPlant/SingelPlant'
import { Home } from './section/home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },

      {
        path: '/plants',
        element: <Plants />,
        index: true,
      },

      {
        path: '/plants/:id',
        element: <SingelPlant />,
      },
    ],
  },
])
