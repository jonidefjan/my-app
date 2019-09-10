import  * as React from 'react';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class Cartao extends React.Component {
  render() {
    return(
      <div className='card'>
        <Header />
        
        <Body />
        
        <Footer />
      </div>
    )
  }
}

export default Cartao