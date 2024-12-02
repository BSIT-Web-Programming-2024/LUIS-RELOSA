const home = document.getElementById('home');
const model1 = document.getElementById('model1');
const me = document.getElementById('me');
const achievement = document.getElementById('achievement');
const education = document.getElementById('education');
const skills = document.getElementById('skills');
const hobbies = document.getElementById('hobbies');

const baseline = window.innerHeight * 0.8;


window.addEventListener('scroll',function(){

const value = window.scrollY;

home.style.marginLeft= value * 1.5 + 'px';
model1.style.marginLeft= value * 1.6 + 'px';
me.style.marginLeft = value * 2 + 'px';
achievement.style.right = value * 1.2 + 'px';
education.style.marginLeft = value * 2 + 'px';
skills.style.right= value * 1.5 + 'px';
hobbies.style.marginLeft= value + 1.5 + 'px';

})
