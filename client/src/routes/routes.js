//components for routes
import Dashboard from '../components/dashboard/dashboard.js';
import Checkout from '../components/checkout/checkout.js';
import AdminDashboard from '../components/admin/dashboard.js';

export const routes = [
    {
       path: '/',
        exact: true,
        private: false,
        component: Dashboard,
        label: 'Dashboard'
    },
    {
        path: '/buy',
        exact: true,
        private: false,
        component: Checkout,
        label: 'Checkout'
    },
    {
        path: '/admin',
        exact: true,
        private: true,
        component: AdminDashboard,
        label: 'Admin'
    }
]