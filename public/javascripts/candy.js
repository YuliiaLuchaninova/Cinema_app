/**
 * Created by Julia on 05.11.2015.
 */
var animator = (function () {
    return {
        init: function (className) {
            var col = document.getElementsByClassName(className);
            var parent = col[0].parentNode;
            var parentWidth = parent.offsetWidth;
            var offsetTop = 0;
            var parentMinHeight = 500;
            var i = 0;

            for (; i < col.length; i++) {
                col[i].style.zIndex = i + 1;
                parentWidth -= col[i].offsetWidth;
                $(col[i]).animate({
                    left: parentWidth,
                    top: offsetTop
                }, 3000);
                //Switch to next row
                if (parentWidth <= 0) {
                    parentWidth = col[0].parentNode.offsetWidth;
                    parentMinHeight += 250;
                    parent.style.minHeight += parentMinHeight + 'px';
                    offsetTop += 250;
                }
            }
        }
    }
})();





