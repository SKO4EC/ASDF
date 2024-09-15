var TAWOG = document.getElementById('wallpaper');
TAWOG.addEventListener('click', function () { alert('안녕! :D'); });
var sel = document.getElementById('selected');
// about Season 1
var season1 = document.getElementById('season1');
var s1 = document.getElementById('S1');
season1.addEventListener('click', function () { sel.innerHTML = 'S1 ' + 'E' + randomselect(36); });
season1.addEventListener('mouseover', function () { s1.style.transform = 'translateY(-2.5cm)'; });
season1.addEventListener('mouseout', function () { s1.style.transform = 'translateY(0)'; });
// about Season 2
var season2 = document.getElementById('season2');
var s2 = document.getElementById('S2');
season2.addEventListener('click', function () { sel.innerHTML = 'S2 ' + 'E' + randomselect(30); });
season2.addEventListener('mouseover', function () { s2.style.transform = 'translateY(-2.5cm)'; });
season2.addEventListener('mouseout', function () { s2.style.transform = 'translateY(0)'; });
// about Season 3
var season3 = document.getElementById('season3');
var s3 = document.getElementById('S3');
season3.addEventListener('click', function () { sel.innerHTML = 'S3 ' + 'E' + randomselect(40); });
season3.addEventListener('mouseover', function () { s3.style.transform = 'translateY(-2.5cm)'; });
season3.addEventListener('mouseout', function () { s3.style.transform = 'translateY(0)'; });
// about Seaon 4
var season4 = document.getElementById('season4');
var s4 = document.getElementById('S4');
season4.addEventListener('click', function () { sel.innerHTML = 'S4 ' + 'E' + randomselect(44); });
season4.addEventListener('mouseover', function () { s4.style.transform = 'translateY(-2.5cm)'; });
season4.addEventListener('mouseout', function () { s4.style.transform = 'translateY(0)'; });
// about Seaon 5
var season5 = document.getElementById('season5');
var s5 = document.getElementById('S5');
season5.addEventListener('click', function () { sel.innerHTML = 'S5 ' + 'E' + randomselect(40); });
season5.addEventListener('mouseover', function () { s5.style.transform = 'translateY(-2.5cm)'; });
season5.addEventListener('mouseout', function () { s5.style.transform = 'translateY(0)'; });
// about Seaon 6
var season6 = document.getElementById('season6');
var s6 = document.getElementById('S6');
season6.addEventListener('click', function () { sel.innerHTML = 'S6 ' + 'E' + randomselect(40); });
season6.addEventListener('mouseover', function () { s6.style.transform = 'translateY(-2.5cm)'; });
season6.addEventListener('mouseout', function () { s6.style.transform = 'translateY(0)'; });
// about websites
var DC = document.getElementById('DC');
var reddit = document.getElementById('reddit');
DC.addEventListener('click', function () { open('https://gall.dcinside.com/gumball'); });
reddit.addEventListener('click', function () { open('https://www.reddit.com/r/gumball/'); });
// functions
function randomselect(N) {
    return Math.floor(Math.random() * N + 1);
}
