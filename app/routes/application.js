import Ember from 'ember';


export default Ember.Route.extend({
  model() {
	// return rentals;
	return this.store.findAll('game');
  },
});
