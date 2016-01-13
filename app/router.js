import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', {path: '/games/:game_id'});
  this.route('awesome');
});

export default Router;
