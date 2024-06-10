// src/controllers/postController.js

const Post = require('../models/Post');

// Simula uma lista de posts
let posts = [];

// Retorna todos os posts
exports.getAllPosts = (req, res) => {
    res.render('home', { posts });
};

// Cria um novo post
exports.createPost = (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post(title, content);
    posts.push(newPost);
    res.redirect('/');
};

// Simula curtir um post
exports.likePost = (req, res) => {
    const postId = req.params.id;
    const post = posts.find(post => post.id === postId);
    if (post) {
        post.like();
    }
    res.redirect('/');
};
