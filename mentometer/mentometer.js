Votes = new Mongo.Collection("votes");



Router.route('/voting', function(){
	this.render('Voting');
});

if (Meteor.isClient) {
  // counter starts at 0
 
  Template.Voting.events({
    'click .yes': function () {
      // increment the counter when button is clicked
      Votes.insert({
      	result: "yes",
      	createdAt: new Date()
      });
      alert('Du röstade ja!');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
