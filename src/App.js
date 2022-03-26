import React, {Component} from 'react';
import TodoList from './components/TodoList'
import './style.css';
class App extends Component{
  render(){
    return(
      <div>
        <h1 className='Titulo'>Lista de Tarefas</h1>
        <TodoList/>
      </div>
    );
  }
}
export default App;