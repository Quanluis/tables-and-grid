import React, { Component } from 'react';
import './Index.css'

class App extends Component {
  render() {
    return (
     <div>
      <table>
        <caption>Employee information</caption>
        <tfoot>This is a table footer</tfoot>
        <thead>
        <tr> 
          <th scope = "col" >Luis Garzon</th>
          <th scope = "col">Web developer</th>
          <th scope = "col">quanluis@protonmail.com</th>
        </tr>
        </thead>
        <tr> 
          <th scope = "row" >Luis Garzon</th>
          <th>Web developer</th>
          <th>quanluis@protonmail.com</th>
        </tr>
      </table>
      <div>
        <div className = "grid">    
        <header>Header</header>
        <nav>Nav</nav>
        <main>Main</main>
        <aside>Aside</aside>
        <footer>Footer</footer>
        </div>
      </div>
     </div>    
    );
  }
}

export default App;
