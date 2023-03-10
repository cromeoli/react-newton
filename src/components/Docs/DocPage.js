import React, { useState } from "react";
import DocSearch from "./DocSearch";
import DocTable from "./DocTable";
import newtonData from "../../datos.json"
import {useParams} from "react-router-dom";

/**
 * @typedef {Object} MathData
 * @property {Object} Aritmética - contiene información sobre operaciones aritméticas
 * @property {Object} Análisis matemático - contiene información sobre operaciones de análisis matemático
 * @property {Object} Trigonometría - contiene información sobre operaciones trigonométricas
 * @property {Object} Constantes matemáticas - contiene información sobre constantes matemáticas
 * @property {string} operacion - nombre de la operación
 * @property {string} codigo - código para utilizar en una calculadora
 * @property {string} descripcion - descripción de la operación
 * @property {string} imagen - ruta de la imagen relacionada a la operación
 */

/**
 * @type {MathData} mathData - Contiene información sobre las operaciones matemáticas
 */

const mathData = newtonData

/**
 * DocPage - Componente principal que sirve para construir y mostrar un buscador y una tabla para buscar y
 * visualizar información sobre operaciones matemáticas
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */

function DocPage() {
    // State para almacenar el término de búsqueda
    const [searchTerm, setSearchTerm] = useState("");
    // State para almacenar la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState("");

    //Parametros de la URL para
    const {searchParam} = useParams()
    console.log(searchParam)

    // Filtro de datos según el término de búsqueda y la categoría seleccionada
    const filteredData = Object.keys(mathData) //Todas las keys del 1er nivel únicamente
        .filter(category => { // Filter para los que coincidan con la categoría seleccionada
            // Si no hay categoría seleccionada o la categoría es igual a la seleccionada, se incluye
            return !selectedCategory || category === selectedCategory;
         }
        ).reduce((acc, category) => {
            // Filtro de operaciones según el término de búsqueda
            const filteredCategory = Object.keys(mathData[category]) //cojo la categoría una vez que existe, 2º Nivel
                .filter(operation => {
                    // Si el término de búsqueda está vacío o se encuentra en el nombre de la operación,
                    // código o descripción, se incluye
                    return searchTerm === "" ||
                        operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        mathData[category][operation].codigo.includes(searchTerm) ||
                        mathData[category][operation].descripcion
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                 }
                )
                .reduce((categoryAcc, operation) => {
                    categoryAcc[operation] = mathData[category][operation];
                    return categoryAcc;
                }, {});
            // Si hay operaciones filtradas, se incluye la categoría
            if(Object.keys(filteredCategory).length > 0 ){
                acc[category] = filteredCategory;
            }
            return acc;
        }, {});

    return (
        <div className="docPage">
            {/* Se pasa el estado y los setters al componente DocSearch */}
            <DocSearch searchTerm={searchTerm}
                       setSearchTerm={setSearchTerm}
                       selectedCategory={selectedCategory}
                       setSelectedCategory={setSelectedCategory}
                       searchParam={searchParam}
            />
            {/* Se pasa el estado filtrado al componente DocTable */}
            <DocTable filteredData={filteredData}/>
        </div>
    );
}

export default DocPage