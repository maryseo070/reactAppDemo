import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

document.addEventListener("DOMContentLoaded", () => {
  $('#header-wrap').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $('#landing-content').css('left', amountMovedX * 4);
    $('#landing-content').css('top', amountMovedY);
    // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  $(".header-wrap").mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 4);
    var amountMovedY = (e.pageY * 1 / 4);
    $('#header1').css('left', amountMovedX * 2);
    $('#header1').css('top', amountMovedY * 2);
    $('#header2').css('left', amountMovedX);
    $('#header2').css('top', amountMovedY);
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
