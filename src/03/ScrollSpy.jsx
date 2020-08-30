import React, { PureComponent } from 'react';

export default class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    console.log('constructor()');
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener('scroll', this.checkPosition);
  }

  setRef(ref) {
    console.log('setRef()');
    this.ref = ref;
  }

  checkPosition() {
    console.log('checkPosition()');
    console.log('this.ref.getBoundingClientRect().top = ', this.ref.getBoundingClientRect().top);
    console.log('window.innerHeight = ', window.innerHeight);
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
    console.log('componentWillUnmount()');
  }

  render() {
    return (
      <div ref={this.setRef}>
        hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha
      </div>
    );
  }
}
