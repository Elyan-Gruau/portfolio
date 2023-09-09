$(document).ready(function() {
    // Sélectionnez la section de parcours
    var parcoursSection = $('.parcours');
    var isScrolling = false;

    // Inversez le défilement
    parcoursSection.on('mousewheel DOMMouseScroll', function(e) {
        if (!isScrolling) {
            var scrollTo = null;

            if (e.type === 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            } else if (e.type === 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }

            if (scrollTo) {
                e.preventDefault();
                parcoursSection.scrollTop(scrollTo + parcoursSection.scrollTop());
            }

            isScrolling = true;

            setTimeout(function() {
                isScrolling = false;
            }, 200);
        }
    });

    // Détection du défilement tactile
    parcoursSection.on('touchstart', function() {
        isScrolling = true;
    });

    parcoursSection.on('touchend', function() {
        isScrolling = false;
    });
});