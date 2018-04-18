import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('time', { path: '/' });
  this.route('index', { path: '/:route_id' });
});

export default Router;