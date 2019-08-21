const pg = require('pg');
const conString = "postgres://postgres:Bhagath*999@localhost:5432/postgres";
const client = new pg.Client(conString);
client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
});

/* Code for getting the list of question and answers in DB order by id ASC */
function listOfQuestions() {
      client.query(`SELECT * from public."questionsDB" ORDER BY id ASC`, function(err, result) {
          if(err) {
              return console.error('error running query', err);
          }
          else {
              console.log('List of questions-->', result.rows);
            }
      });
    }

/* Code for adding question and answers simultaneously */
function addQuestionAndAnswer(data) {
    insertQuery = `INSERT INTO public."questionsDB" (id, question,answer) VALUES (${data.id},'${data.question}','${data.answer}')`;
     client.query(insertQuery, function(err, result) {
      if(err) {
         return console.error('error running query', err);
       } else {
           console.log('Inserted result...', result.rows);
   
       }
     });
   }

/* Code for asking question */
function updateQuestion(data) {
    insertQuery = `INSERT INTO public."questionsDB" (id, question,answer) VALUES (${data.id},'${data.question}', '')`;
     client.query(insertQuery, function(err, result) {
      if(err) {
         return console.error('error running query', err);
       } else {
           console.log('Inserted result...', result.rows);
   
       }
     });
}

/* Code for upading answer to existing question by using id of existing question */
function updateAnswer(data) {
    let updateQuery = `UPDATE public."questionsDB" set id =${data.id}, answer ='${data.answer}' where id = ${data.id}`;
    client.query(updateQuery, function(err, result) {
        if(err) {
            return console.error('error while updating query', err);
        }
        else {
             console.log('Update answer result-->', result.rows);
        }
    });
}

/* Code for deleting the unwanted question and answers by using existing id */
function deleteQuestion(id) {
    let deleteQuery = `DELETE from public."questionsDB" where id = ${id}`;
    client.query(deleteQuery, function(err, result) {
        if(err) {
            return console.error('error running query', err);
        }
        else {
             console.log('Delete question-->', result.rows);
        }
    });
}

module.exports={list:listOfQuestions, addQA:addQuestionAndAnswer, addQuestion:updateQuestion, addAnswer:updateAnswer, delete:deleteQuestion};