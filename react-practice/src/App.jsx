import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Form from './Form';
import { useState } from 'react';

function App() {
    const [item, setItem] = useState('');

    const handleSubmit = (value) => {
        setItem(value);
    };
    return (
        <div className="App">
            <Header />
            <Form handleSubmit={handleSubmit} />
            <Content item={item} />
            <Footer />
        </div>
    );
}

export default App;
