'use strict';

angular.module('myApp.services', [
    ])
    .factory('messages', function ($http, $log) {
        var messageObj = {'messages': 'loading...'};
        $http.get('/messages/api').success(function (data) {
            messageObj.messages = data.messages;
            $log.log(data.messages);
        }).error(alert);

        return messageObj;
    });

//{
//  "messages": [
//    {
//      "dt": "2015-02-19 16:46:30",
//      "id": 3,
//      "message": "I love pizza",
//      "sender": "jgoney"
//    },
//    {
//      "dt": "2015-02-19 15:54:54",
//      "id": 2,
//      "message": "I love pizza",
//      "sender": "jgoney"
//    },
//    {
//      "dt": "2015-02-03 14:59:15",
//      "id": 1,
//      "message": "I love maitorahka",
//      "sender": "Justin"
//    }
//  ]
//}