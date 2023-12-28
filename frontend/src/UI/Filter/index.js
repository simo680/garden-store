
function Filter({ setSaleChecked, setPriceRange, saleChecked }) {
    function handleInputChange(e) {
        const { name, value } = e.target;
        setPriceRange(prev => ({ ...prev, [name]: value ? Number(value) : (name === 'min' ? 0 : Infinity) }));
    }

    function handleSaleCheckboxChange(e) {
        setSaleChecked(e.target.checked);
    }

    return (
        <div>
            <form>
                <input name='min' placeholder="ОТ" type="number" onChange={handleInputChange} />
                <input name="max" placeholder='ДО' type="number" onChange={handleInputChange} />
                <label> Sale:
                    <input type="checkbox" onChange={handleSaleCheckboxChange} checked={saleChecked} />
                </label>
            </form>
        </div>
    );
}

export default Filter;