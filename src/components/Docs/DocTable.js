import React from "react";

/**
 * DocTable - Componente secundario que renderiza la tabla de los datos una vez filtrados
 *
 * @param {Object} filteredData - Un objeto que contiene los datos filtrados a mostrar en la tabla
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function DocTable({filteredData}){
    return (
        <div className="docDataBoard">
            {/* Iteramos sobre las categorías del objeto filteredData */}
            {Object.keys(filteredData).map((category, index) => (
                <div key={index}>
                    <h2 className="docCategoryTitle">{category}</h2>
                    {/* Iteramos sobre las operaciones de la categoría actual */}
                    {Object.keys(filteredData[category]).map((operation, index) => (
                        <div key={index} className="math-block">
                            <h3 className="docTitle" >{operation}</h3>
                            <div>
                                <p>
                                    <strong>Nombre de la operación:</strong>{" "}
                                    {filteredData[category][operation].operacion}
                                </p>
                                <p>
                                    <strong>Código para la calculadora:</strong>{" "}
                                    {filteredData[category][operation].codigo}
                                </p>
                                <p>
                                    <strong>Descripción:</strong>{" "}
                                    {filteredData[category][operation].descripcion}
                                </p>
                                <div className="math-block__image">
                                    {filteredData[category][operation].imagen !== "" ? (
                                        <img
                                            src={filteredData[category][operation].imagen}
                                            alt={operation}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default DocTable