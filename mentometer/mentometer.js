Votes = new Mongo.Collection("votes");



Router.route('/voting', function(){
	this.render('Voting');
});

Router.route('/results', function(){
	this.render('Results');
});


if (Meteor.isClient) {
  // counter starts at 0
Template.Results.helpers({
results: function(){
return Votes.find({result:"yes"}).count()

}
});
  Template.Voting.events({
    'click .yes': function () {
      // increment the counter when button is clicked
      Votes.insert({
      	result: "yes",
      	createdAt: new Date()
      });
    },
    'click .no': function(){
    	Votes.insert({
    		result: "no",
    		createdAt: new Date()
    	});
    },
    'click .reset': function(){
    	//Nollställ databas
    	alert('tömmer');
    	Meteor.call('removeVotes');
    }
  });
  
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
