const User = require('../models/user');
const Task = require('../models/task');

module.exports.userDashboard =async function(req, res){
	try {
		let tasks = await Task.find({}).sort('_createdAt').populate('user')
		let users = await User.find({});
		return res.render('dashboard', {
			title:"Dashboard",
			all_tasks:tasks,
			all_users:users
		})
	} catch (error) {
		console.log("Error from home_controller ", error);
		return res.redirect('back');
	}
}

module.exports.signup = function(req, res){
	if(req.isAuthenticated()){
		return res.redirect('/');
	}
	return res.render('signup', {
		title:"Sign up page"
	});
};

module.exports.signin = function(req, res){
	if(req.isAuthenticated()){
		return res.redirect('/');
	}
	return res.render('login', {
		title:"Sign up page"
	});
};

module.exports.create = async function(req, res){
	if(req.body.password != req.body.confirm_password){
		console.log("Password unmatched");
		return res.redirect("back");
	}

	try {
		const user = await User.findOne({email:req.body.email});
		if(!user){
			try {
				User.create(req.body);
				req.flash('success', 'Account created!')
				return res.redirect('/users/signin');
			} catch (error) {
				req.flash('failure', error);
				return;
			}
		}else{
			req.flash('failure', "User already exist!");
			return res.redirect('back');
		}
	} catch (error) {
		console.log("Error in finding the user::User controller error", error);
		return;
	}
}

module.exports.createSession = function(req, res){
	return res.render('home', {
		title:"Home page"
	})
}

module.exports.destroySession = function(req, res, next){
	req.logout(function(err){
		if(err){
			return next(err);
		}
		req.flash('success', "Logged out!");
		return res.redirect('/users/signin');
	});

}