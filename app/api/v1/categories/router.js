const express = require('express');
const router = express();

router.get('/categories', (req, res) => {
    res.status(200).json({
        message: "Halaman Category",
    })
})

router.post('/categories', (req, res) => {
    res.status(200).json({
        message: "Post categories all"
    })
})

router.get('/categories/:id', (req, res) => {
    res.status(200).json({
        message: "Get categories with id"
    })
})

router.put('/categories/:id', (req, res) => {
    res.status(200).json({
        message: "put categories with id"
    })
})

router.post('/categories/:id', (req, res) => {
    res.status(200).json({
        messag: "delete categories with id"
    })
})

module.exports = app;