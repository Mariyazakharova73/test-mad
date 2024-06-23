import HomePage from '../pages/HomePage/HomePage';
import TestPage from '../pages/TestPage/TestPage';

export enum Routes {
	HOME = '/',
	TEST = '/test',
}

interface RouteConfig {
  path: Routes;
  component: React.FC;
}

export const routes: RouteConfig[] = [
  {
    path: Routes.HOME,
    component: HomePage,
  },
  {
    path: Routes.TEST,
    component: TestPage,
  },
 
];