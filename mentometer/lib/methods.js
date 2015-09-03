Meteor.methods({
	removeVotes: function(){
		Votes.remove({});
	},
	addPoll: function(text){
		Polls.insert({
      		title: text,
      		createdAt: new Date()
    	});
    }
});