import { useState } from 'react';
import './Home.css';

function Home() {
    const [products, setProducts] = useState([
        { id: 1547, name: 'Fire Up', price: 1, image: '/fireup.PNG' },
        { id: 2898, name: 'Power Glove', price: 99999, image: '/powerglove.PNG' },
        { id: 2454, name: 'Remote Control', price: 500, image: '/remotecontrol.PNG'},
    ]);

    const removeProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <div className="home-container">
            <div className="item-container">
                <h1>Main Stage – Power-ups</h1>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '50px' }}></th> 
                            <th>Code</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="product-icon"
                                    />
                                </td>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>R$ {product.price.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeProduct(product.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
    );
}

export default Home;