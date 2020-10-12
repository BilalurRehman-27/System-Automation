// routes
import Todo from '../views/Todo';
import Cases from '../views/Cases';
import Reminders from '../views/Reminders';
import Reports from '../views/Reports/Reports';
import Dashboard from '../views/Dashboard';
import CaseDetailTabs from '../views/CaseDetailTabs';

// TODO: need to add navigation router param which would be true/false
export default [
    {
        path: '/mcm/todo',
        component: Todo,
    },
    {
        path: '/mcm/cases',
        component: Cases,
    },
    {
        path: '/mcm/case/:id/activities',
        component: CaseDetailTabs,
    },
    {
        path: '/mcm/reminders',
        component: Reminders,
    },
    {
        path: '/mcm/reports',
        component: Reports,
    },
    {
        path: '/mcm/dashboard',
        component: Dashboard,
    },
];
