import { useRoutes } from 'react-router-dom';
import Home from './views/home/Home';
import Layout from './layout/Layout';

export default function Routes() {
    return useRoutes([
        {
            path: '',
            element: <Layout></Layout>,
            children: [{ path: '', element: <Home /> }],
        },
        {
            path: '*',
            element: <div>404</div>,
        },
    ]);
}
