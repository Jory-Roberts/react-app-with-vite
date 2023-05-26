import { useState } from 'react';
const Form = ({ handleSubmit }) => {
    const [item, setItem] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(item);
        setItem('');
    };
    return (
        <form className="form" onSubmit={onSubmit}>
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
