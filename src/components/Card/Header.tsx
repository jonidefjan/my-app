import  * as React from 'react';



export default class Header extends React.Component {
  render() {
    return(
      <div className='card__header'>
        <h1>Design + Code</h1>
        <div className='header__overlay'></div>
        <img src='https://source.unsplash.com/2aoVQXwLf3g/350x150' />
      </div>
    )
  }
}