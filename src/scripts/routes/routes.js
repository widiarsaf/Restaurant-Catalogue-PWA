import ListResto from '../views/pages/list-resto';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListResto, // default page
  '/list-resto': ListResto,
  '/detail/:id': Detail,
};

export default routes;
