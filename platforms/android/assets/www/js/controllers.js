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
    $scope.indexLeft = 0;
    $scope.indexRight = 3;
    $scope.back = "empty";
    $scope.forward = "";
    $scope.slide = function(clicked) {
        slide(clicked);
    };
    // Function For Custom Slider
    function slide(clicked) {
        if(clicked === 'left') {
            if($scope.indexLeft != 0) {
                $scope.forward = "";
                $scope.indexLeft--;
                $scope.indexRight--;
                console.log($scope.indexLeft);
                console.log($scope.indexRight);
                if($scope.indexLeft === 0) {
                    $scope.back = "empty";
                }
                else {
                    $scope.back = "";
                }
            }
            else {
                $scope.back = "empty";
            }
        }
        else if(clicked === 'right') {
            if($scope.indexRight != $scope.propertyType.length - 1) {
                $scope.back = "";
                $scope.indexLeft++;
                $scope.indexRight++;
                console.log($scope.indexLeft);
                console.log($scope.indexRight);
                if($scope.indexRight === $scope.propertyType.length - 1) {
                    $scope.forward = "empty";
                }
                else {
                    $scope.forward = "";
                }
            }
            else {
                $scope.forward = "empty";
            }
        }
    };
})

.controller('amenitiesCtrl', function() {
  
})

.controller('nearmeCtrl', function() {
  
})
;
