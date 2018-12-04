import { observable } from 'mobx';
import routeLink from '../router/router.jsx';

class Router {
    @observable.ref routerArr = routeLink;
}

export default new Router()