function zoomSVG() {
    const card = document.getElementsByClassName('card-svg')[0];
    const image = card.getElementsByTagName('img')[0];

    card.getElementsByTagName('button')[0].addEventListener('click', function() {
        const curWidth = image.offsetWidth;
        image.style.width = (curWidth * 0.8) + 'px';
    }, false);

    card.getElementsByTagName('button')[1].addEventListener('click', function() {
        const curWidth = image.offsetWidth;
        image.style.width = (curWidth * 1.2) + 'px';
    }, false);
}

zoomSVG();
