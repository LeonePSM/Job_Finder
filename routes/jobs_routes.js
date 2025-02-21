const express = require('express');
const router = express.Router();
const Job = require('../models/Job')

//add job via post
router.post('/add', (req, res)=> {

  let(title , salary , company , description , email , new_job) = req.body

  //inserir
  Job.create({
    title,
    description,
    salray,
    compnay,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router