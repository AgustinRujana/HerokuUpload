"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
module.exports = {
    checkIn: (req, res) => {
        let userName = req.cookies.Usuario;
        req.cookies.Usuario ? res.render("login", { nombre: userName }) : res.redirect('/login');
    },
    goToLogin: (req, res) => {
        if (req.isAuthenticated()) {
            res.render("login", { nombre: req.user.username });
        }
        res.sendFile('pages/login.html', { root: './public' });
    },
    logInComplete: (req, res) => {
        passport_1.default.authenticate('login', { failureRedirect: '/faillogin' }), (req, res) => {
            res.redirect('/');
        };
    },
    logOut: (req, res) => {
        let userName = req.cookies.Usuario;
        req.logout();
        res.render("logout", { nombre: userName });
    },
    failLogin: (req, res) => {
        res.render('loginError', {});
    },
    registerForm: (req, res) => {
        res.sendFile('pages/register.html', { root: './public' });
    },
    registerUser: (req, res) => {
        passport_1.default.authenticate('register', { failureRedirect: '/failregister' }), (req, res) => {
            res.redirect('/');
        };
    },
    failRegister: (req, res) => {
        res.render("registerError", {});
    },
    facebookLogIn: (req, res) => {
        passport_1.default.authenticate('facebook');
    },
    facebookCallback: (req, res) => {
        passport_1.default.authenticate('facebook', { successRedirect: '/login', failureRedirect: '/faillogin' });
    }
};
