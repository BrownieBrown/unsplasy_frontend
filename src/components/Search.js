import {FaSearch} from "react-icons/fa";

const Search = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <section className={"search"}>
            <form className={"search-form"}>
                <input type="text" placeholder={"search"} className={"form-input"}/>
                <button type={"submit"} className={"submit-btn"} onClick={handleSubmit}>
                    <FaSearch/>
                </button>
            </form>
        </section>
    )

}

export default Search