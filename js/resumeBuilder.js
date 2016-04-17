/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	"name": "Surbhi Oberoi",
	"role": "Front-end Developer",
	"contact": {
		"email": "mail@surbhioberoi.com",
		"github": "https://github.com/surbhioberoi",
		"twitter": "https://twitter.com/thesurbhioberoi",
		"linkedin": "https://www.linkedin.com/in/surbhi-oberoi-27b591110",
		"blog": "http://surbhioberoi.com/"
	},
	"picture": "https://pbs.twimg.com/profile_images/714458303917649920/JuFEmlXW.jpg",
	"welcome": "Hola!",
	"skills": ["HTML", "CSS", "JS", "Writer", "Git", "Shell"]
}

var work = {
	"position": "Front-end Developer"
}
var education = {
	"name": "Panjab University"
}

var projects = {};


var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var email = HTMLemail.replace("%data%", bio.contact.email); 
var github = HTMLgithub.replace("%data%", bio.contact.github);
var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var linkedin = HTMLlinkedin.replace("%data%", bio.contact.linkedin);
var blog = HTMLblog.replace("%data%", bio.contact.blog);
var bioPic = HTMLbioPic.replace("%data%", bio.picture);
var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);


$("#header").prepend(role);
$("#header").prepend(name);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(twitter);
$("#topContacts").append(linkedin);
$("#topContacts").append(blog);
$("#header").prepend(bioPic);
$("#header").append(HTMLskillsStart);

for(var i = 0; i<bio.skills.length; i++) {
	var skill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(skill);

}

$("#header").append(work["position"]);
$("#header").append(education.name);







