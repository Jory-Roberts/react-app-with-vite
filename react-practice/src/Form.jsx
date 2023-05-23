const Form = () => {
    return (
        <form className="form">
            <label htmlFor="name">Name</label>
            <input autoFocus id="addName" placeholder="Add Name" required />

            <label htmlFor="email">Email</label>
            <input autoFocus id="addEmail" placeholder="Add Email" required />

            <button type="submit" aria-label="Add Information"></button>
        </form>
    );
};
export default Form;
