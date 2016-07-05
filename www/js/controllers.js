angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope, $http, Giphy) {
    console.log("hello iz search controllera");

    $scope.search = {};
    $scope.search.term = 'cats';
    $scope.giphies = [];

    $scope.performSearch = function() {
        Giphy.search($scope.search.term).then(function(result) {
            $scope.giphies = result;
        });
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
