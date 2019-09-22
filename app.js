window.addEventListener('scroll', function (e) {

    const x = document.querySelectorAll('.scroll');
    const target = Array.from(x);
    
    target.map((item) => {
        var pos = window.pageYOffset * item.dataset.rate;

        switch (item.dataset.direction) {
            case 'vertical':
                item.style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
                break;
            case 'horizontal':
                var posX = window.pageYOffset * item.dataset.ratex;
                var posY = window.pageYOffset * item.dataset.ratey;

                item.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
                break;
        }
    })


});