//components for routes
import dashboard from '../components/dashboard/dashboard'

export const routes = [
    {
       path: '/',
        exact: true,
        private: false,
        component: dashboard,
        label: 'Dashboard'
    }
]