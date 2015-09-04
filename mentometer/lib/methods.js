Meteor.methods({
	removeVotes: function(){
		Votes.remove({});
	},
	addPoll: function(text){
		Polls.insert({
      		title: text,
      		yes: 0,
      		no: 0,
      		createdAt: new Date()
    	});
    }
});