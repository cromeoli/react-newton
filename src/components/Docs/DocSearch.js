import React, { useState } from "react";
import newtonData from "../../datos.json"

/**
 * @type {MathData} mathData - Contiene información sobre las operaciones matemáticas
 */
const mathData = newtonData

/**
 * DocSearch - componente que muestra un buscador para filtrar las operaciones matemáticas
 *
 * @param {Function} setSearchTerm - Estado del término de búsqueda
 * @param {Function} setSelectedCategory - Estado para la categoría seleccionada
 *
 * @param searchParam - Parametro que pasado a la URL para la funcion de ir a la documentación
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function DocSearch({setSearchTerm, setSelectedCategory, searchParam}) {

    /**
     * handleSearch - manejador del evento onChange del input de búsqueda
     * @param {Event} e - evento generado por el cambio en el input
     */
    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    /**
     * handleCategorySelect - manejador del evento onChange del select de categorías
     * @param {Event} e - evento generado por el cambio en el select
     */
    function handleCategorySelect(e) {
        setSelectedCategory(e.target.value);
    }

    return (
        <div>
            <div className="docSearchArea">
                <input
                    type="text"
                    placeholder={searchParam === "all" ? "Buscar por operación, código o descripción" : searchParam + "/"}
                    onChange={handleSearch}
                    className="formInputBox docSearchBar"
                />
                <select onChange={handleCategorySelect} className="customSelect docCustomSelect">
                    <option value="">Todas las categorías</option>
                    {/* Generación dinámica de las opciones del select a partir del
                        objeto mathData */}
                    {Object.keys(mathData).map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                      )
                     )
                    }
                </select>
            </div>
        </div>
    )
}

export default DocSearch