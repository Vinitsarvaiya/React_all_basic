
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const { unlink } = require("fs");
const { join } = require("path");

const sequelize = new Sequelize('myapi', 'ts', 'password123#', {
    host: '127.0.0.1',
    dialect: 'postgres',
    logging:false
});

const Post = sequelize.define('Post', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
},{
    timestamps:false
});

const app = express();
app.use(cors());
app.use(bodyParser.json());


const createPost = async (postBody) => {
    const post = await Post.create({ ...postBody });
    return post.toJSON();
};

const findUserPost = async (postID) => {
    return await Post.findOne({ where: { id: postID } });
};

const deletePost = async (postID) => {
    const post = await findUserPost(postID);
    if (!post) throw new Error("Post not found");
    await post.destroy();
};

const findUserPosts = async () => {
    return await Post.findAll();
};

const updatePost = async (postID, postBody) => {
    const post = await findUserPost(postID);
    if (!post) throw new Error("Post not found");
    await post.update(postBody);
    return post.toJSON();
};

// Routes
app.post('/api/posts', async (req, res) => {
    try {
        const post = await createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await findUserPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPost = await updatePost(id, req.body);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deletePost(id);
        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const startServer = async () => {
    try {
        await sequelize.sync();
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

startServer();
