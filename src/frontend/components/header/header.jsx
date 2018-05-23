import React from 'react';
import './header.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillAppear(func){
    func = () => (console.log('boop'))
  }

  func() {
    console.log('this is funk')
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        component="div"
        className="header"
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}>
        <h1>Fading at Initial Mount</h1>
     </ReactCSSTransitionGroup>
    );
  }
}
export default Header;
