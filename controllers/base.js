/**
 * Created by Julia on 05.11.2015.
 */
var _ = require("underscore");
module.exports = {
    name: "base",
    extend: function (child) {
        return _.extend({}, this, child);
    },
    run: function (req, res, next) {

    }
}