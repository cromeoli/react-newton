import React, { useState } from "react";
import DocSearch from "./DocSearch";
import DocTable from "./DocTable";
import newtonData from "../../datos.json"

const mathData = newtonData

function DocPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredData = Object.keys(mathData)
        .filter(category => {
            return !selectedCategory || category === selectedCategory;
        })
        .reduce((acc, category) => {
            const filteredCategory = Object.keys(mathData[category])
                .filter(operation => {
                    return (searchTerm === "" ||
                        operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        mathData[category][operation].codigo.includes(searchTerm) ||
                        mathData[category][operation].descripcion
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()));
                })
                .reduce((categoryAcc, operation) => {
                    categoryAcc[operation] = mathData[category][operation];
                    return categoryAcc;
                }, {});

            if(Object.keys(filteredCategory).length > 0 ){
                acc[category] = filteredCategory;
            }
            return acc;
        }, {});

    return (
        <div className="docPage">
            <DocSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <DocTable filteredData={filteredData}/>
        </div>
    );
}

export default DocPage