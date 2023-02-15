const express = require('express');
const app = express();
app.use(express.json());

const Sequelize = require('sequelize');
const { Blog } = require('./models');

const port = 3001;


// Get all blog posts
app.get('/blog/all-posts', (req, res) => {
   Blog.findAll()
        .then(results => res.send(results))
});

// Create new blog post
app.post('/blog/new-post', (req, res) => {
    console.log(req.body)
    Blog.create({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then((result) => res.send(result))
        

});

app.delete('/blog/delete-post', (req, res) => {
    const id = req.body.id;
    Blog.destroy({
        where: {
            id: req.body.id
        }
    }).then(res.status(200).send({ message: `Contact with id ${id} deleted` }));
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});