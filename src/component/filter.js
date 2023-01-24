const Filter = ({ newFilter, handleFilterEvent }) => {

    return (
        <div>
            <form >
                <div>
                    find countries <input value={newFilter} onChange={handleFilterEvent} />
                </div>
            </form>
        </div>
    )
}

export default Filter;