const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {

	let query;
	
	if(req.query) {
		query = req.query;
	}

	const users = await User.find(query);

	res.status(200).json({
		message: 'success',
		items: users.length,
		data: {
			users
		}
	});
});
exports.updateUser = catchAsync(async (req, res, next) => {
	
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

	res.status(200).json({
        message: 'success',
        data: {
            user,
        },
    });
});
exports.getUser = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	
	const user = await User.findById(id);

	if (!user) {
		return next(new AppError("No such user found with id: " + id, 404));
	}

	res.status(200).json({
		message: 'success',
		data: {
			user,
		}
	});

});
exports.deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
    });
});
exports.getMe = catchAsync(async (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: {
            user: req.user,
        },
    });
})
exports.updateMe = catchAsync(async (req, res, next) => {

	const user = await User.findByIdAndUpdate(req.user.id, req.body, {
		new: true,
	});

	if (!user) {
		return next(new AppError('No such user found with id: ' + id, 404));
	}

	res.status(200).json({
		message: 'success',
		data: {
			user,
		},
	});
});
exports.deleteMe = catchAsync(async (req, res, next) => {

    const user = await User.findByIdAndDelete(req.user.id);

    if (!user) {
        return next(new AppError('No such user found with id: ' + id, 404));
    }

    res.status(200).json({
        message: 'success',
    });
});
exports.markComplete = catchAsync(async (req, res, next) => {
	const user = req.user;
	var itemExists = false;
	
	user.tasks.forEach(task => {
		if (task.id === req.body.taskId && task.cat === req.body.cat) {
			itemExists = true;
			task.status = req.body.status;
		}
	});
	if (!itemExists) {
		user.tasks.push({
			id: req.body.taskId,
			status: req.body.status,
			cat: req.body.cat
		});
	}

	const updatedUsers = await User.findByIdAndUpdate(user.id, user, {
		new: true
	})

	res.status(200).json({
		message: "success"
	});
})