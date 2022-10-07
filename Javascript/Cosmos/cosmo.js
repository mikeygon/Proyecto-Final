let galaxy = document.getElementById('galaxy')
let redplanet = document.getElementById('redplanet')
let blueplanet = document.getElementById('blueplanet')
let astro = document.getElementById('astro')

window.addEventListener('scroll', function(){
    var value = this.window.scrollY;

    galaxy.style.top = value * 0.5 + 'px';
    redplanet.style.top = 16.2 + value *.2 + '%';
    blueplanet.style.top = 40.5 + value * .03 + '%';
    astro.style.left = 22.3 + value * 0.02 + '%';

})
