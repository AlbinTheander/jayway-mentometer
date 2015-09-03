Meteor.methods({
	removeVotes: function(){
		Votes.remove({});
	}
});