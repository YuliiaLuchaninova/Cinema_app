/**
 * Created by Julia on 02.11.2015.
 */
var NavigationModule = (function () {
    function _addClass(queryElement, searchAttribute, className) {
        if (!queryElement || !searchAttribute || !className) {
            return false;
        }

        queryElement.onclick = function (e) {
            e.preventDefault();

            _removeClass(className);

            var targetID = this.getAttribute(searchAttribute).replace("#", "");

            var target = document.getElementById(targetID);

            target.classList.add(className);
        };
    }

    function _removeClass(queryClassName) {
        var activeLinks = document.getElementsByClassName(queryClassName);

        var len = activeLinks.length;

        for (var i = 0; i < len; i++) {
            activeLinks[i].classList.remove(queryClassName);
        }
    }

    function _startTabsModule(elem, attr, manipulatedClass) {
        if (!elem || !attr || !manipulatedClass) {
            return false;
        }

        var navLinks = document.getElementsByClassName(elem);

        var len = navLinks.length;

        for (var i = 0; i < len; i++) {
            _addClass(navLinks[i], attr, manipulatedClass);
        }
    }

    return {
        startTabsModule: _startTabsModule,
        removeClass: _removeClass,
        addClass: _addClass
    }
})();

NavigationModule.startTabsModule('tab-link', 'href', 'active-tab');
NavigationModule.startTabsModule('acc-link', 'href', 'active-acc-body');
