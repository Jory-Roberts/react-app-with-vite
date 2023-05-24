import { useState } from 'react';
const Form = () => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem('');
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input
                type="text"
                autoFocus
                id="addItem"
                placeholder="Add Item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                required
            />

            <button type="submit" aria-label="Add Information"></button>
        </form>
    );
};
export default Form;
