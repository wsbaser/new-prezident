import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('time', { path: '/:route_id' }, function() {
    this.route('playlist', { path: '/:playlist_id' });
  });
});

export default Router;