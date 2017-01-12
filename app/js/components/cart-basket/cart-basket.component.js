angular.
  module('cartApp').

  component('cartBasket', {
    templateUrl: './js/components/cart-basket/cart-basket.template.html',

    controller: function CartBasketController($scope, $http, ngDialog) {

      $scope.list = [];

      $scope.sumItemsCost = function() {
        var total = 0;

        if($scope.list.prodotti) {
          for(var i = 0; i < $scope.list.prodotti.length; i++){
              var product = $scope.list.prodotti[i];
              total += (product.unitcost * product.quantity);
          }
        }

        return Math.round(total * 100)/100;;
      };

      $scope.removeItem = function($index) {
        $scope.list.prodotti.splice($index,1);
      };

      $scope.removeAllItems = function($index) {
        $scope.list.prodotti = [];
      };

      $scope.addItem = function(item) {
        $scope.list.prodotti.push(item);
        ngDialog.close();
      };

      $scope.openModal = function () {
          ngDialog.open({
            template: './js/components/cart-basket/cart-basket.popup.html',
            className: 'ngdialog-theme-default',
            scope: $scope
          });
      };

      function getData() {
        $http.get('./data/lista.json').then(function(response) {
          $scope.list = response.data;
        }, function errorCallback(response) {
          console.log(response);
        });
      };

      // cosa eseguire all'avvio dell'applicazione
      this.$onInit = function () {
          getData();
      };

    }
  });
