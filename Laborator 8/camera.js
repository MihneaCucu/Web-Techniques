window.onload = function(){
    var img = document.querySelector('#vizor img');
    var vizor = document.getElementById('vizor');
    var vizorWidth = vizor.offsetWidth;
    var vizorHeight = vizor.offsetHeight;
    var imgWidth = img.offsetWidth;
    var imgHeight = img.offsetHeight;

    var imgX = 0;
    var imgY = 0;

    var moveSpeed = 15;

    var scale = 1.0;

    function zoomIn() {
        scale += 0.1;
        img.style.transform = 'scale(' + scale + ')';
    }

    function zoomOut() {
        if (scale > 0.1) {
            scale -= 0.1;
        }
        img.style.transform = 'scale(' + scale + ')';
    }

    document.addEventListener('keydown', function(event) { 
        var key = event.key;
        switch(key) {
            case '=':
                zoomIn();
                break;
            case '-':
                zoomOut();
                break;
            case 'ArrowLeft':
                if (imgX < 0) {
                    imgX += moveSpeed;
                }
                break;
            case 'ArrowRight':
                if (imgX > vizorWidth - imgWidth) {
                    imgX -= moveSpeed;
                }
                break;
            case 'ArrowUp':
                if (imgY < 0) {
                    imgY += moveSpeed;
                }
                break;
            case 'ArrowDown':
                if (imgY > vizorHeight - imgHeight) {
                    imgY -= moveSpeed;
                }
                break;
        }
        img.style.marginLeft = imgX + 'px';
        img.style.marginTop = imgY + 'px';
})
}