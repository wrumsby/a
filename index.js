define(['king-dom'], function (king) {
  'use strict';

  return function (selector) {
    var el = king(selector);

    el.style.backgroundColor = 'red';
  };
});
