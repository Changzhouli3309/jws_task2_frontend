import { useState } from 'react';
import { Account } from './Account';
import './App.css';
import { ProductList } from './ProductList';

function App() {

  const [user, setUser] = useState({
    username: "",
    token: ""
  })

  const [isLogin, setisLogin] = useState(false);

  return (<>
    <h1>Product App</h1>
    {
      !isLogin ?
        <Account setUser={setUser} setisLogin={setisLogin} />
        : <ProductList user={user} setisLogin={setisLogin} />
    }

  </>
  );
}

export default App;
