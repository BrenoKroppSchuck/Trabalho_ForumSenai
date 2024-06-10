// src/models/Post.js

// Simula um modelo de dados para um post
class Post {
    constructor(title, content) {
        this.id = Date.now().toString();
        this.title = title;
        this.content = content;
        this.likes = 0;
    }

    like() {
        this.likes++;
    }
}

module.exports = Post;
