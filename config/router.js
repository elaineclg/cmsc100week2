var students = require('./../controllers/students');
//var teacher = require('./../controllers/teacher');

module.exports = function(router){
	router.route('/students')
	.get(students.find)
	.post(students.insert);
	
	router.route('/students/:id')
	.get(students.findOne)
	.put(students.update)
	.delete(students.remove);
	return router;

};

/*
module.exports = function(router){
	router.route('/teacher')
	.get(teacher.find)
	.post(teacher.add);
	
	return router;

};	*/