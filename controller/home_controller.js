const User = require('../models/user');
const Task = require('../models/task');

module.exports.home = async  function(req, res){
	try {
		let tasks = await Task.find({}).sort('_createdAt').populate('user')
		let users = await User.find({});
		return res.render('home', {
			title:"Home page",
			all_tasks:tasks,
			all_users:users
		})
	} catch (error) {
		console.log("Error from home_controller ", error);
		return res.redirect('back');
	}
}