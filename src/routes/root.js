import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProjectPage from '../pages/project'
import RepositoryPage from '../pages/repository'
import HomePage from '../pages/introduction'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            index: true,
            element: <HomePage />,
        }, {
            element: <ProjectPage />,
            path: '/projects'
        },
        {
            element: <RepositoryPage />,
            path: '/repositories'
        }]
    }
])


export default router