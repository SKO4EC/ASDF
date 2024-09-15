const TAWOG = document.getElementById('wallpaper');
TAWOG.addEventListener('click', () => {alert('안녕! :D')});
const sel = document.getElementById('selected');

// about Season 1
const season1 = document.getElementById('season1');
const s1 = document.getElementById('S1');
season1.addEventListener('click', () => {sel.innerHTML = 'S1 ' + 'E' + randomselect(36)});
season1.addEventListener('mouseover', () => {s1.style.transform = 'translateY(-2.5cm)';});
season1.addEventListener('mouseout', () => {s1.style.transform = 'translateY(0)';});

// about Season 2
const season2 = document.getElementById('season2');
const s2 = document.getElementById('S2');
season2.addEventListener('click', () => {sel.innerHTML = 'S2 ' + 'E' + randomselect(30);});
season2.addEventListener('mouseover', () => {s2.style.transform = 'translateY(-2.5cm)';});
season2.addEventListener('mouseout', () => {s2.style.transform = 'translateY(0)';});

// about Season 3
const season3 = document.getElementById('season3');
const s3 = document.getElementById('S3');
season3.addEventListener('click', () => {sel.innerHTML = 'S3 ' + 'E' + randomselect(40)});
season3.addEventListener('mouseover', () => {s3.style.transform = 'translateY(-2.5cm)';});
season3.addEventListener('mouseout', () => {s3.style.transform = 'translateY(0)';});

// about Seaon 4
const season4 = document.getElementById('season4');
const s4 = document.getElementById('S4');
season4.addEventListener('click', () => {sel.innerHTML = 'S4 ' + 'E' + randomselect(44)});
season4.addEventListener('mouseover', () => {s4.style.transform = 'translateY(-2.5cm)';});
season4.addEventListener('mouseout', () => {s4.style.transform = 'translateY(0)';});

// about Seaon 5
const season5 = document.getElementById('season5');
const s5 = document.getElementById('S5');
season5.addEventListener('click', () => {sel.innerHTML = 'S5 ' + 'E' + randomselect(40)});
season5.addEventListener('mouseover', () => {s5.style.transform = 'translateY(-2.5cm)';});
season5.addEventListener('mouseout', () => {s5.style.transform = 'translateY(0)';});

// about Seaon 6
const season6 = document.getElementById('season6');
const s6 = document.getElementById('S6');
season6.addEventListener('click', () => {sel.innerHTML = 'S6 ' + 'E' + randomselect(40)});
season6.addEventListener('mouseover', () => {s6.style.transform = 'translateY(-2.5cm)';});
season6.addEventListener('mouseout', () => {s6.style.transform = 'translateY(0)';});

// about websites
const DC = document.getElementById('DC');
const reddit = document.getElementById('reddit');

DC.addEventListener('click', () => {open('https://gall.dcinside.com/gumball')});
reddit.addEventListener('click', () => {open('https://www.reddit.com/r/gumball/')});

// functions
function randomselect(N:number){ // funciton: select random episode (1 ~ N)
    return Math.floor(Math.random()*N + 1)
}