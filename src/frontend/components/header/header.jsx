import React from 'react';
import './header.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from 'jquery';

class Header extends React.Component {
  constructor(props){
    super(props);
  }


    // $('#header-wrap').mousemove(function(e){
    //   var amountMovedX = (e.pageX * -1 / 6);
    //   var amountMovedY = (e.pageY * -1 / 6);
    //   $('#landing-content').css('left', amountMovedX * 4);
    //   $('#landing-content').css('top', amountMovedY);
    //   // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    // });
    //
    // $(".header-wrap").mousemove(function(e){
    //   var amountMovedX = (e.pageX * 1 / 4);
    //   var amountMovedY = (e.pageY * 1 / 4);
    //   $('#header1').css('left', amountMovedX * 2);
    //   $('#header1').css('top', amountMovedY * 2);
    //   $('#header2').css('left', amountMovedX);
    //   $('#header2').css('top', amountMovedY);
    // });

  render() {
    return(
      <div id="home">
        <div className="header-wrap">

          <div id="landing-content"></div>

          <div className="header1"></div>

          <div className="header2"></div>

        </div>
      </div>
    );
  }
}
export default Header;
