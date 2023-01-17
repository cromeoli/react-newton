import React from "react";
import "../../css/style.css"

/**
 * AboutText - Componente secundario que añade el texto principal de la
 * página about
 *
 * @component
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function AboutText(props){
    return (
        <>
            <section className="aboutText">
                <p className="commonText centerParagraph">
                    Copyright (C) 2016-2020 Gerald Nash
                </p>
                <p className="commonText">
                    This program is free software: you can redistribute it and/or modify
                    it under the terms of the GNU General Public License as published by
                    the Free Software Foundation, either version 3 of the License, or
                    (at your option) any later version.
                </p>
                <p className="commonText">
                    This program is distributed in the hope that it will be useful,
                    but WITHOUT ANY WARRANTY; without even the implied warranty of
                    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
                    GNU General Public License for more details.
                </p>
                <p className="commonText">
                    You should have received a copy of the GNU General Public License
                    along with this program.
                </p>
                <p className="commonText">
                    If not, see <a className="customLink"
                                   href="https://www.gnu.org/licenses/">http://www.gnu.org/licenses</a>.
                </p>
            </section>
        </>
    );
}

export default AboutText;