// queries to database
const getstudents = 'select * from student';
const getstudentbyID = 'select * from student where id =$1';
const checkEmailExists = 'select s from student s where s.email =$1';
const addstudent = 'insert into student (name, email, age, dob) values($1, $2, $3, $4)';
const removestudent = 'delete from student where id =$1';
const updatestudent = 'update student set name =$1 where id =$2';



// export them
module.exports = {
    getstudents,
    getstudentbyID,
    checkEmailExists,
    addstudent,
    removestudent,
    updatestudent,
}
