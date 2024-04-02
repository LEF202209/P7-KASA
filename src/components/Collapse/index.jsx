/***************************************************************************/
/**********            components/collapse index.jsx                 *******/
/***************************************************************************/
import  { useState } from 'react';
import '../../styles/Collapse.css';
import arrow from '../../assets/down_arrow.png';

export default function Collapse({title, content,collapseDirection}) {
    /* Variable isOpen initialisée à false */
    const [isOpen, setIsOpen] = useState(false);
    /* Fonction toggleCollapsible pour inverser la valeur de isOpen */
    const toggleCollapsible = () => {setIsOpen(!isOpen);};
    return (
            <div className={`collapse_container ${collapseDirection}`}>
                <div className={`collapse_title_container ${collapseDirection==='row'?'collapse_title_container_row':''}`} onClick={toggleCollapsible}>
                    <h3 >{title}</h3>
                    <img onClick={toggleCollapsible} 
                        className={`arrow ${isOpen ? 'up_arrow' : 'down_arrow'}`}
                        src={arrow} 
                        alt="content" 
                    /> 
                </div>
                {isOpen && content && (
                <div className={`${isOpen ? `collapsible_open ${(collapseDirection==='row')?'collapsible_open_row':''}` : 'collapsible_close' }  collapse_content_container `}>
                     {content} 
                </div>
                )}  
            </div>
    )
}