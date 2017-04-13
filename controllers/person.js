var Person = require('../models/person');

module.exports = function(req, res) {
	res.send('鬥陣特攻新活動「零度叛亂」火熱進行中 ,還不快去挑戰!');
	var person = new Person({
		name:req.body.name,
		comments: req.body.comments,
		time : new Date()
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	});
};
