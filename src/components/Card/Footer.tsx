import  * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Footer extends React.Component {
  @observable isActive = false;

  setActive = (e: { preventDefault: any; }) => {
    e.preventDefault;
    this.isActive = this.isActive === false ? true : false;
  };

  render() {    
    return(
      <div className='card__footer'>
        <ul>
          <li>
            <a onClick={this.setActive} className={this.isActive === true ? 'icon-active' : 'icon-nonactive'} href='#'><span className='fa fa-star'></span></a>
          </li>
        </ul>
      </div>
    )
  }
}