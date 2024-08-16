
// Hero Carousel
document.addEventListener('DOMContentLoaded', function() {
    var heroCarousel = document.querySelector('#heroCarousel');
    var carousel = new bootstrap.Carousel(heroCarousel, {
        interval: 3000, // 3 saniye
        wrap: true,
        pause: 'hover'
    });

    // Ok tuşları ile kontrol
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            carousel.prev();
        } else if (e.key === 'ArrowRight') {
            carousel.next();
        }
    });
});

// Details Accordion
document.addEventListener('DOMContentLoaded', function() {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function(item) {
        item.addEventListener('show.bs.collapse', function() {
            this.querySelector('.accordion-button').classList.add('active');
        });

        item.addEventListener('hide.bs.collapse', function() {
            this.querySelector('.accordion-button').classList.remove('active');
        });
    });
});
        lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Resim %1 / %2"
});
        // Footer için GSAP animasyonu
        gsap.from('footer', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
    }
});

// Sosyal medya ikonları için Anime.js animasyonu
anime({
    targets: '.social-icons a',
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'easeOutExpo',
    begin: function(anim) {
        document.querySelector('.social-icons').style.opacity = 1;
    }
});
