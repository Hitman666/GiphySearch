angular.module('starter.services', [])

.factory('Giphy', function($http) {
    return {
        search: function(term) {
            term.replace(' ', '+');

            var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + term;
            console.log(url);

            return $http.get(url).then(function(result){
                return result.data.data;
            });
        }
    };
});