'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket,$timeout) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
      var homeBannerImage = [
        {
          href: null,
          name: "轮播1",
          orders_by: 1,
          pic_url: "../../assets/images/hero-1st.jpg",
          title: null
        },
        {
          href: null,
          name: "轮播1",
          orders_by: 1,
          pic_url: "../../assets/images/hero-3rd@2x.jpg",
          title: null
        }

      ];
      // 获取banner轮转图片
      $scope.bannerImage = [];
      for (var index_ = 0; index_ < homeBannerImage.length; index_++) {
        var value = homeBannerImage[index_];
        $scope.bannerImage.push({
          bg: {
            background: "url('" + value.pic_url + "') no-repeat center"
          }
        });
      }

      $scope.onBannerUpeded = function () {
        //初始化轮播图
        $timeout(function () {
          var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            autoplayDisableOnInteraction: true,
            speed: 1000,
            loop: true,
            //direction: 'vertical',
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,
            //监听，自动更新
            observer: true,
            observeParents: true,
            effect: 'fade'
            // 如果需要前进后退按钮
            //nextButton: '.swiper-button-next',
            //prevButton: '.swiper-button-prev',
          });
        }, 500);
      };
      $scope.onBannerUpeded();
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }

  }

  angular.module('bugeSeverApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
