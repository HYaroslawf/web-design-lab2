import view from './calcView.js';
import calc from './calcModel.js';
import controller from './controller.js';
import profileModel from './profileModel.js';
import profileView from './profileView.js';
import registrModel from './registrModel.js';
import loginModel from './loginModel.js';

let display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btns');
const edit_button = document.getElementById("edit");
const navbar_prof = document.querySelector('.prof');
const navbar_login = document.querySelector('.login');
const navbar_registr = document.querySelector('.registr');
const edit_name = document.getElementById("EditName");
const edit_email = document.getElementById("EditEmail");
const username = document.getElementById("username");
const email = document.getElementById("email");
const username_field = document.getElementById("RInputUsername");
const email_field = document.getElementById("RInputEmail");
const password_field = document.getElementById("RInputPassword");
const Rpassword_field = document.getElementById("RRepeatPassword");
const sbumit_reg = document.getElementById("submit_reg");
const Lemail_field = document.getElementById("LInputEmail");
const Lpassword_field = document.getElementById("LInputPassword");
const sbumit_log = document.getElementById("submit_log");

console.log(window.location.href);




let calcView = new view(display, edit_name, edit_email);
let calcModel = new calc();
let registrModel_ = new registrModel(username_field, email_field, password_field, Rpassword_field);
let loginModel_ = new loginModel(Lemail_field, Lpassword_field);
let profileModel_ = new profileModel(edit_name, edit_email);
let profileView_ = new profileView(username, email, edit_name, edit_email);
let controller_ = new controller(calcModel, calcView, profileModel_, profileView_, registrModel_, sbumit_reg, loginModel_, sbumit_log, buttons, edit_button, navbar_prof, navbar_login, navbar_registr);








