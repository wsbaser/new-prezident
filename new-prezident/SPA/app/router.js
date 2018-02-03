import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('history', { path: '/history/:video_id' });
  this.route('future', { path: '/future/:video_id' });
  this.route('now', { path: '/2018/:video_id' });
});

export default Router;
