import React from "react";

function DocTable({filteredData}){
    return (
        <div className="docDataBoard">
            {Object.keys(filteredData).map((category, index) => (
                <div key={index}>
                    <h2 className="docCategoryTitle">{category}</h2>
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