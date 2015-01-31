
var ngEmoticons = angular.module('ngEmoticons', ['ngSanitize']);
ngEmoticons.constant('SMILEYS', {
    ':)' : 'smiley',
    ':-)' : 'smiley',
    ':D': 'happy',
    ':-D': 'happy',
    ':(': 'sad',
    ':-(': 'sad',
    ':/': 'wondering',
    ':-/': 'wondering',
    ':P': 'tongue',
    ':-P': 'tongue',
    '(y)': 'thumbsup',
    '(n)': 'thumbsdown',
    '3:)': 'evil',
    ';)': 'wink',
    ';-)': 'wink',
    ':o': 'shocked',
    ':-o': 'shocked',
    'o.O': 'shocked',
    '&lt;3': 'heart',
    '&lt;/3': 'heart-broken',
    '-_-': 'neutral',
    ':S': 'confused',
    ':-S': 'confused',
    '8)': 'cool',
    '8-)': 'cool'
});
ngEmoticons.filter('emoticons', ['SMILEYS', function(SMILEYS) {
    return function (input) {
        var patterns = [],
            metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

        // build a regex pattern for each defined property
        for (var i in SMILEYS) {
            if (SMILEYS.hasOwnProperty(i)){ // escape metacharacters
                patterns.push('(' + i.replace(metachars, "\\$&") + ')');
            }
        }

        // build the regular expression and replace
        return input.replace(new RegExp(patterns.join('|'),'g'), function (match) {
            return typeof SMILEYS[match] != 'undefined'
                ? '<i class="icon icon-' + SMILEYS[match] + '"></i>'
                : match;
        });
    };
}]);
