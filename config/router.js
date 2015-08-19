var students = require('./../controllers/students');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
	router.router('/students')
	.get(students.find);
	
	return router;

};

module.exports = function(router){
	router.route('/teacher')
	.get(teacher.find)
	.post(teacher.add);
	
	return router;

};	