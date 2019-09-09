import * as React from 'react'
import { livrosData } from "./LivrosStore";

export default class Carrinho extends React.Component{
    renderFilters = () => {
        return [...livrosData.filters].map(([key, value]) => {
          return (
            <li key={key + value}>
              {key} - {value.toString()}
            </li>
          );
        });
      };

    render(){
        return(
            <div>
                
            </div>
        )
    }
}