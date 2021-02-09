
import { faHtml5, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Styles from './styles.module.scss';

export const CardTecnologies = ({ title = '', faIconOne, faIconTwo, faIconTree, faIconFour }) => {


    return (
    <div className={`mi_grid ${Styles.card}`}>
        <span className={`lg_row_1 ${Styles.header}`}>
            <div className={Styles.rounded_icon}>
                <FontAwesomeIcon icon={ faTerminal } />
            </div>
            <h3 className={Styles.card_caption}>{title}</h3>
        </span>
        <div className={`lg_row_9 mi_grid mi_row_n_4 ${Styles.body}`}>
            <span className="languaje-item lg_row_1">
                <FontAwesomeIcon icon={ faIconOne || faTerminal } /> CMD
            </span>
            <span className="languaje-item lg_rows_2">
                <FontAwesomeIcon icon={ faIconTwo || faJs } /> JavaScript
            </span>
            <span className="languaje-item lg_rows_3">
                <FontAwesomeIcon icon={ faIconTree || faHtml5 } /> HTML5
            </span>
            <span className="languaje-item lg_rows_4">
                <FontAwesomeIcon icon={ faIconFour || faJava } /> Java
            </span>
        </div>
    </div>
    )
}