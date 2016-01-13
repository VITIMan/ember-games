import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	text: faker.hacker.phrase,
	sub: faker.lorem.sentence,
	image: faker.image.imageUrl
});
