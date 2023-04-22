const express = require('express');
const User = require('../user');
exports.home = (req, res) =>
{  
    res.sendFile('public/ecommerce.html', { root: '.' })
} 

exports.login = (req, res) =>
{  
    res.sendFile('public/login.html', { root: '.' })
} 

exports.register = (req, res) =>
{  
    res.sendFile('public/register.html', { root: '.' })
} 

