// angular.module('starter.controllers', [])

// .controller('DashCtrl', function($scope) {})

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// })
app
.controller('overviewCtrl', function() {
  
})

.controller('reviewsCtrl', function() {
  
})

.controller('pricingCtrl', function($scope) {
    $scope.items = [
       {class: ' ion-record'},
       {class: ' ion-record'},
       {class: ' ion-record'},
       {class: ' ion-record'},
       {class: ' ion-record'},
       {class: ' ion-record'},
       {class: ' ion-record'},
       {class: 'ion-ios-circle-outline'},
       {class: 'ion-ios-circle-outline'},
       {class: 'ion-ios-circle-outline'}
    ];
    $scope.propertyType = [
        {type: 'Apartment', icon: 'ion-home'},
        {type: 'Studio', icon: 'ion-home'},
        {type: 'Villa', icon: 'ion-home'},
        {type: 'Row House', icon: 'ion-home'},
        {type: 'Serviced Apartment', icon: 'ion-home'},
        {type: 'Serviced Apart', icon: 'ion-home'}
    ];

    $scope.upperObj = {
        indexLeft: 0,
        indexRight: 3,
        back: "empty",
        forward: "",
    };

    $scope.lowerObj = {
        indexLeft: 0,
        indexRight: 3,
        back: "empty",
        forward: "",
    };
    
    $scope.slideUpper = function(clicked) {
        slide(clicked, $scope.upperObj);
    };

    $scope.slideLower = function(clicked) {
        slide(clicked, $scope.lowerObj);
    };

    // Function For Custom Slider
    function slide(clicked, obj) {
        if(clicked === 'left') {
            if(obj.indexLeft != 0) {
                obj.forward = "";
                obj.indexLeft--;
                obj.indexRight--;
                console.log(obj.indexLeft);
                console.log(obj.indexRight);
                if(obj.indexLeft === 0) {
                    obj.back = "empty";
                }
                else {
                    obj.back = "";
                }
            }
            else {
                obj.back = "empty";
            }
        }
        else if(clicked === 'right') {
            if(obj.indexRight != $scope.propertyType.length - 1) {
                obj.back = "";
                obj.indexLeft++;
                obj.indexRight++;
                console.log(obj.indexLeft);
                console.log(obj.indexRight);
                if(obj.indexRight === $scope.propertyType.length - 1) {
                    obj.forward = "empty";
                }
                else {
                    obj.forward = "";
                }
            }
            else {
                obj.forward = "empty";
            }
        }
    };
})

.controller('amenitiesCtrl', function() {
  
})

.controller('nearmeCtrl', function() {
  
})
;
