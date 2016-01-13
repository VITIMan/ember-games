import Ember from 'ember';

var games = [{
  id: 1,
  text: "Super Mario Land",
  sub: "1fromvariable",
  image: "https://upload.wikimedia.org/wikipedia/en/0/02/Supermariolandboxart.jpg" 
}, {
  id: 2,
  text: "Super Mario Land 2: 6 Golden Coins",
  sub: "2fromvariable",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Super_Mario_Land_2_box_art.jpg"
}, {
  id: 3,
  text: "Wario Land: Super Mario Land 3",
  sub: "3fromvariable",
  image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Wario_Land_Box_Art.jpg" 
}];

export default Ember.Route.extend({
  model() {
    // return games;
	// return this.store.findAll('rental');
	// return this.store.findAll('game');
  },
});
