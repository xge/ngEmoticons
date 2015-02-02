
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
        var tokens = input.split(' ');
        var result = [];
        angular.forEach(tokens, function (token) {
            if(angular.isDefined(SMILEYS[token])) {
                result.push('<i class="icon icon-' + SMILEYS[token] + '"></i>');
            } else {
                result.push(token);
            }
        });
        return result.join(' ');
    };
}]);
