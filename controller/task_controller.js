const Task = require('../models/task');
module.exports.create = async function(req, res){
	const {title, description, status, dueDate} = req.body;	
	try {
		const task = await Task.create({
			title:title,
			description:description,
			status:status,
			dueDate:dueDate,
			user:req.user._id
		})
		req.flash('success', 'Task added');
		req.flash('success', "  on dashboard !!");
		return res.redirect('/users/dashboard')
	} catch (error) {
		return res.status(500, {messgae:"Internal Server Error"})
	}	
}

module.exports.destroy = async function(req, res){
	try {
		const task = await Task.findById(req.params.id);
		if(task.user == req.user.id){
			task.deleteOne();
			req.flash('success', 'Task deleted!');
			return res.redirect('back');
		}else{
			req.flash('error', 'Unauthorized!');
			return res.redirect('back');
		}
	} catch (error) {
		req.flash('error', "Error while deleting task");
		return res.redirect('back');
	}
}

module.exports.edit = async function(req, res){
	const task = await Task.findById(req.params.id);
	return res.render('editPage', {
		title:"Edit page",
		task
	});
}

module.exports.update = async function(req, res){
	try {
		// console.log(req.params.id);
		// console.log(req.user);
		const task = await Task.findByIdAndUpdate(req.params.id, {
			title:req.body.title,
			description:req.body.description,
			status: req.body.status,
			dueDate:req.body.dueDate,
			user:req.user.id
		});
		req.flash('success', 'Task updated!!');
		return res.redirect('/');
	} catch (error) {
		req.flash('Error', "Error while updating task");
		return res.redirect('back');
	}
}


module.exports.toggle = async function(req, res){
	const { status } = req.body;
  const { taskId } = req.params;

  try {
    // Update the task's status in the database
    const updatedTask = await Task.findByIdAndUpdate(taskId, { status }, { new: true });

    return res.json({ success: true, task: updatedTask });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
