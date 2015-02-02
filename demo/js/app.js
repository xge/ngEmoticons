/**
* ngEmoticonApp Module
*
* Description
*/
angular.module('ngEmoticonApp', ['ngSanitize','ngEmoticons'])
.controller('ngEmoticonCtrl', ['$scope', 'SMILEYS', function($scope, SMILEYS) {
    $scope.smileys = SMILEYS;
	$scope.text = "Lorem ipsum :D dolor sit amet ;), consectetur adipisicing elit, sed do eiusmod" +
        "tempor incididunt ut labore et dolore magna 8-) aliqua. Ut enim ad minim veniam," +
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" +
        "consequat. Duis aute irure <3 dolor </3 in reprehenderit in voluptate velit esse" +
        "cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non" +
        "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
        "(y) (y) (y)";
}]);