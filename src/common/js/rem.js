function showBody(){
    document.getElementsByTagName('body')[0].style.visibility = 'visible';
}
(function(doc, win, callback) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth,
                fontSize = 20 * (clientWidth / 320);
            if (!clientWidth) return;
            docEl.style.fontSize = (fontSize >= 100 ? 100 : (fontSize <= 20 ? 20 : fontSize)) + 'px';
            callback();
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window, showBody);