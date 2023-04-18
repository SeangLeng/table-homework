import './App.css';
import CardRender from './Components/CardRender';
import {useState} from "react";
function App() {
  const [products, setProducts]  = useState([]);
  let link = 'https://api.escuelajs.co/api/v1/products';
  fetch(link).then(res => {
      return res.json();
  }).then(data => setProducts(data))
  
  return(
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <CardRender link={products}/>
    </table>
  )
}

export default App;
