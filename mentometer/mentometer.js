Votes = new Mongo.Collection("votes");

Polls = new Mongo.Collection("polls");


Router.route('/voting', function(){
	this.render('Voting');
});

Router.route('/results', function(){
	this.render('Results');
});

Router.route('/', function(){
	this.render('PollsT');
});


if (Meteor.isClient) {
  // counter starts at 0

Template.Results.helpers({

yesvotes: function(){

return Votes.find({result:"yes"}).count()
},

novotes: function(){
return Votes.find({result:"no"}).count()
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
  
  Template.PollsT.helpers({

		polls: function(){
			return Polls.find({});
		}
	});
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
