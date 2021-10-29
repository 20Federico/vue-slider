'use strict'
Vue.config.devtools = true;

window.addEventListener('DOMContentLoaded', function () {
  new Vue({
      el: '#vue',
      
      data: {
        images: [
          {
            src: 'img/01.jpg',
            title: 'Svezia',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
          },
          {
            src: 'img/02.jpg',
            title: 'Svizzera',
            description: 'Lorem ipsum'
          },
          {
            src: 'img/03.jpg',
            title: 'Gran Bretagna',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
          },
          {
            src: 'img/04.jpg',
            title: 'Germania',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
          },
          {
            src: 'img/05.jpg',
            title: 'Paradise',
            description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
          },
        ],
        currentElement: 0,
      },
      
      methods: {
        arrowUpOnClick () {
          this.currentElement--;
          if (this.currentElement < 0 ) {
            this.currentElement = this.images.length - 1;
          }
        },
        arrowDownOnClick () {
          this.currentElement++;
          if (this.currentElement === this.images.length ) {
            this.currentElement = 0;
          }
        }
      },
  });
});