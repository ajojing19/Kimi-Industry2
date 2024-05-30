let div = document.querySelectorAll('div');
let divLinks = document.querySelectorAll('div ul li a');

window.onscroll = () => {
    div.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            divLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('div ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}