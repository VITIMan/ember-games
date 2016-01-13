export default function() {

/*
  this.get('/rentals', function() {
    return {
      data: [{
        type: 'rentals',
        id: 1,
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          type: 'Estate',
          bedrooms: 15,
          image: 'htps://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 2,
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          type: 'LOL',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 3,
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }]
    };
  });
*/
    this.get('/games', function(db, request) {
		return {
			data: db.games.map(attrs => (
				{type: 'games', id: attrs.id, attributes: attrs}
			))
		};
    });

	this.get('/games/:id', function(db, request) {
		let id = request.params.id;

		return {
			data: {
				type: 'games',
				id: id,
				attributes: db.games.find(id)
			}
		};
	});

    /*
    this.get('/games', function(){
        return {
            data: [{
                type: 'games',
                id: 1,
                attributes: {
                    text: "Super Mario Land",
                    sub: "sub1sub",
                    image: "https://upload.wikimedia.org/wikipedia/en/0/02/Supermariolandboxart.jpg"
                }
            }, {
                type: 'games',
                id: 2,
                attributes: {
                    text: "Super Mario Land 2: 6 Golden Coins",
                    sub: "sub2sub",
                    image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Super_Mario_Land_2_box_art.jpg"
                }
            }, {
                type: 'games',
                id: 3,
                attributes: {
                    text: "Wario Land: Super Mario Land 3",
                    sub: "sub1sub",
                    image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Wario_Land_Box_Art.jpg"
                }
            }]
        };
    });
    */
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
