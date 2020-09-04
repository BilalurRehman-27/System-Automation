// routes
import Todo from '../views/Todo';
import Cases from '../views/Cases';
import Reminders from '../views/Reminders';
import Reports from '../views/Reports/Reports';
import Dashboard from '../views/Dashboard';
import CaseDetailTabs from '../views/CaseDetailTabs/CaseDetailTabs';

// TODO: need to add navigation router param which would be true/false
export default [
  {
    path: '/todo',
    component: Todo,
  },
  {
    path: '/cases',
    component: Cases,
  },
  {
    path: '/case/:id/detail',
    component: CaseDetailTabs,
  },
  {
    path: '/reminders',
    component: Reminders,
  },
  {
    path: '/reports',
    component: Reports,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
];
