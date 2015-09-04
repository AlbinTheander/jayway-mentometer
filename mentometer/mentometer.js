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
  
	yesvotes = function(){
		return Votes.find({result:"yes"}).count()
	}

	novotes= function(){
		return Votes.find({result:"no"}).count()
	}

	Template.Results.helpers({
	

		yespercent: function(){
			return Math.ceil((yesvotes()/ (yesvotes() + novotes()) *100)) - 0.5
		},

		nopercent: function(){
			return Math.ceil((novotes() / (yesvotes() + novotes())*100)) - 0.5
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
	
	Template.PollsT.events({
		'submit .newPoll': function(event){
			event.preventDefault();
 
      		// Get value from form element
      		var text = event.target.pollQuestion.value;
 
      		// Insert a task into the collection
      		Meteor.call("addPoll", text);
 
      		// Clear form
      		event.target.pollQuestion.value = "";
		}
	}); 
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
