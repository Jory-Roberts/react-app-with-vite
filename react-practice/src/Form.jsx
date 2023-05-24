const Form = () => {
    return (
        <form className="form">
            <label htmlFor="item">Item</label>
            <input
                type="text"
                autoFocus
                id="addItem"
                placeholder="Add Item"
                required
            />

            <button type="submit" aria-label="Add Information"></button>
        </form>
    );
};
export default Form;
