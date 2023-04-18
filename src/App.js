import './App.css';
import CardRender from './Components/CardRender';
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  let link = 'https://api.escuelajs.co/api/v1/products';
  fetch(link).then(res => {
    return res.json();
  }).then(data => setProducts(data))

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Imgages</th>
              </tr>
            </thead>
            <CardRender link={products} />
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;
