import React, { useState } from "react";
import newtonData from "../../datos.json"

const mathData = newtonData

function DocSearch({searchTerm, setSearchTerm, selectedCategory, setSelectedCategory}) {

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    function handleCategorySelect(e) {
        setSelectedCategory(e.target.value);
    }
    return (
            <div>
                <div className="docSearchArea">
                    <input
                        type="text"
                        placeholder="Buscar por operación, código o descripción"
                        onChange={handleSearch}
                        className="formInputBox docSearchBar"
                    />
                    <select onChange={handleCategorySelect} className="customSelect docCustomSelect">
                        {/**/}
                        <option value="">Todas las categorías</option>
                        {Object.keys(mathData).map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
    )
}

export default DocSearch