import React, {Component} from 'react'
import './style.css'

class TodoItems extends Component{

    constructor(props){
        super(props);
        this.state={};
        this.delete = this.delete.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        return(
            <div className='items'>
                <ul>
                    {this.props.lista.map((item) =>{
                        return(
                            <li className='listaItems' onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
                            
                        );
                    })}
                    
                </ul>
                
            </div>
        );
    }
}
export default TodoItems;