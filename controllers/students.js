var db = require(__dirname + '/../lib/mysql');

exports.find = function(req, res, next){
	console.log(req.ip+"find()");
	db.query("select * from student ",function(err,rows){
		if(err) return next(err);
		res.send(rows);
	});
};

exports.findOne = function(req, res, next){
	console.log(req.ip+"findOne()");
	db.query("select * from student where id = ?",[req.params.id], function(err,rows){
		if(err) return next(err);
		if(rows.length === 0) {
			res.status(404).send("Student not found");
		}else{
			res.send(rows[0]);
		}
	});
};

exports.insert = function(req, res, next){
	console.log(req.body)
	db.query("INSERT INTO student(studno,name) VALUES (?,?)",[req.body.studno, req.body.name], function(err,rows){
		if(err) return next(err);
		res.send(rows);
	});
};


exports.update = function(req, res, next){
	db.query("update student set ? where id = ?",[req.body, req.params.id], function(err,rows){
		if(err) return next(err);
		res.send(rows);
	}); 
};


exports.remove = function(req, res, next){
	db.query("delete from student where id = ?",[req.params.id], function(err,rows){
		if(err) return next(err);
		res.send(rows);
	});
};