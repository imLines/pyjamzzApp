import Banner from "../partials/Banner/Banner";
import Navbar from "../partials/Navbar/Navbar";
import {Link} from 'react-router-dom';

import './Home.css'

function Home(){
    return(
        <>
            <Navbar/>
            <Banner/>
            <div className="home-container">
                <h2>Pyjam’Zz, aux côtés des rêves de toutes les femmes.</h2>
                <h3>Catégories</h3>
                <div className="home-card-container">
                    <Link style={{textDecoration: 'none'}} to="/client/products/ange">
                        <div className="home-category-card angel-card">
                            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.97 16.1"><path d="M87.39,277.4a3,3,0,0,0-2.5-.87,19,19,0,0,0-3.08.46c.59,0,.81.27.72.76s-.58.59-1,.5a.72.72,0,0,1-.55-1,1.32,1.32,0,0,1,.62-.68,7.26,7.26,0,0,1,4.93-.52,4.46,4.46,0,0,1,2,1.21,6.7,6.7,0,0,1,1.81,3.41c.27,1.25.69,2.46,1,3.69a7.2,7.2,0,0,0,3.09,4,3.25,3.25,0,0,1-2.39-1.65c-.61-.85-1.09-1.78-1.63-2.68l0,0c-.17-.64-.29-1.3-.5-1.92-.36-1.05-.77-2.09-1.16-3.13l-.29-.1C88.64,278.09,87.83,277.87,87.39,277.4Z" transform="translate(-64.47 -272.46)"/><path d="M68.52,284.09c-.63,1-1.2,2.07-1.89,3a3.16,3.16,0,0,1-2.16,1.35,6.91,6.91,0,0,0,2.84-3.38c.53-1.66,1-3.35,1.5-5a5.59,5.59,0,0,1,2.47-3.46,5.36,5.36,0,0,1,2.45-.7,15.39,15.39,0,0,1,3.34.53,1.32,1.32,0,0,1,.84.74,1,1,0,0,1-.3.93,1.32,1.32,0,0,1-1-.08c-.13-.05-.24-.5-.16-.64s.46-.32.68-.47c-.39-.06-.88-.13-1.38-.23a5.59,5.59,0,0,0-3.36.13,3.9,3.9,0,0,0-.83.65l-1.12,1.36-.29.22-1.65,5.05Z" transform="translate(-64.47 -272.46)"/><path d="M71.63,284.08l.27-.61-1.24.54h0l-1,.6-.11-.15.69-.59-1,.14.11.13-.89.7.06-.74,0,0c.2-.52.39-1,.61-1.55a.9.9,0,0,1,.32-.42c.95-.56,2,.13,3-.26a.18.18,0,0,1,.14,0c.59.64,1,.14,1.4-.23l.05-.05c.18,0,.42-.12.55,0a1.86,1.86,0,0,0,2.33-.05l.18.12c-.41.59-.79,1.21-1.25,1.77-.12.14-.48.1-.73.14l-.06-.93-.48.82-.18-.15.08-.52-.83.79-.07-.69h-.4v.87l0,0-1.57.3Z" transform="translate(-64.47 -272.46)"/><path d="M87.34,284.06a7,7,0,0,1-1.38-.33c-.46-.22-.48-.55.23-.8l-.79,0-.05.57-.13.1-.52-.9-.21.17.14.68-.7-.64-.14.75c-.3-.13-.69-.18-.88-.4a5.67,5.67,0,0,1-.91-1.57,2.08,2.08,0,0,0,2.36,0c.14-.09.4,0,.61,0l0,0c.22.16.47.48.65.44.79-.18,1.61,0,2.37-.18a1.76,1.76,0,0,1,1.9.82c.15.45.36.89.54,1.34l0,0,0,.63-1.67-1-.11.16.75.57-.06.14-1.1-.6h0l-1.22-.52.25.59Z" transform="translate(-64.47 -272.46)"/><path d="M79.17,272.47a8.27,8.27,0,0,1,1.78.14,2.51,2.51,0,0,1,1.13.48c.18.15.39.32.39.54s-.07.36-.74.67a5.34,5.34,0,0,1-3.22.37,4.48,4.48,0,0,1-1.87-.44c-.23-.13-.6-.34-.6-.61s.1-.33.61-.6A5.38,5.38,0,0,1,79.17,272.47Zm-2.63,1.07c0,.38,1.6.62,2.81.59s2.58-.31,2.6-.67-1.38-.79-2.65-.79S76.52,273.18,76.54,273.54Z" transform="translate(-64.47 -272.46)"/><path d="M85,281.7l0,0L84,281l.09.78-1-.36,0,.4c-.86-.17-1.14-.58-1.13-1.6h0l.38-.49.29.82.39-.66,0,0,.35-.2c.24.67.58.67.89.15l.79.19,2-.12v-.2l.57.46,1.6.31.49,1.29-.24.19-.92-.88.09.6-.8-.61-.14.81a2.1,2.1,0,0,1-.69-.33,4.62,4.62,0,0,1-.5-.81l-.09,0,.28.81A1.6,1.6,0,0,1,85,281.7Z" transform="translate(-64.47 -272.46)"/><path d="M74,281.65l-.05.05a1.49,1.49,0,0,1-1.58-.05l.35-.84a5.56,5.56,0,0,0-.68.7,3.63,3.63,0,0,1-.72.41l-.16-.78-.82.59.06-.58-.86.81-.14-.15.47-1.59c.55.22,1.05.58,1.5,0a.86.86,0,0,1,1.26-.21c.4.24,1,.11,1.53.15l.55-.35c.26.54.57.52.94.17.06-.06.21,0,.32,0l0,0,.43.61.23-.7.55.42h0a1.6,1.6,0,0,1-.92,1.54c-.09.06-.28-.05-.42-.08l0-.21-1,.31v-.72Z" transform="translate(-64.47 -272.46)"/><path d="M74.17,280.14c-.52,0-1.13.09-1.53-.15a.86.86,0,0,0-1.26.21L70,280.11l.18-1,.29-.22,1.34.1c.67-.31,1.28-.83,2.1-.46.11,0,.32-.15.48-.23l.52-.05c.26-.27.51-.55.78-.81a1.82,1.82,0,0,1,.55-.4,1.3,1.3,0,0,0,.82,1.55c.45.22.49,1.06.12,1.66h0l-.67-1.37-.14,0,.06,1.21-.46-.22,0,0-.31-1.06-.22.05L75.31,280,75,280l-.2-1.05Z" transform="translate(-64.47 -272.46)"/><path d="M87.57,280.2l-.57-.46v.2l-2,.12-.9-1-.2.94-.27,0-.13-1.08-.23-.05-.3,1,0,0-.44.22v-1.22l-.17,0-.45,1.36h0a1.45,1.45,0,0,1,.37-1.9c.29-.27.35-.77.58-1.32.16.17.37.4.59.61s.45.36.68.53l.42.13a5.1,5.1,0,0,1,1,.07c.55.14,1.08.35,1.62.54l1.25.1.29.1.18,1Z" transform="translate(-64.47 -272.46)"/><path d="M74.88,278.21l-.52.05h-.83l.32-.57c-.4.19-.85.37-1.26.61a8.23,8.23,0,0,0-.81.65l-1.34-.1,1.12-1.36a4.55,4.55,0,0,1,4.06-.46l-.73.16C75.3,277.54,75.3,277.54,74.88,278.21Z" transform="translate(-64.47 -272.46)"/><path d="M84.59,278.26l-.42-.13c-.34-.28-.81-.55,0-.92l-.67-.14a4.51,4.51,0,0,1,3.91.33c.44.47,1.25.69,1.11,1.57l-1.25-.1-2.17-1.25.3.64Z" transform="translate(-64.47 -272.46)"/><path d="M73.15,283.78c0,.16.17.35.13.47a6,6,0,0,1-2.72,3.12c.57-1.05,1.11-2.1,1.73-3.11.16-.25.58-.34.88-.5Z" transform="translate(-64.47 -272.46)"/><path d="M85.57,283.9c1.07-.12,1.23.72,1.6,1.38s.86,1.34,1.3,2A5.5,5.5,0,0,1,85.57,283.9Z" transform="translate(-64.47 -272.46)"/><path d="M87.32,284.08a5,5,0,0,1,.73.73c.72,1.05,1.4,2.12,2.08,3.15a8.44,8.44,0,0,1-3.19-3.57l.4-.33Z" transform="translate(-64.47 -272.46)"/><path d="M71.6,284.06l.41.32a7.44,7.44,0,0,1-3.34,3.54c.18-.21.34-.43.52-.63a4.4,4.4,0,0,0,.58-.56c.5-.75,1-1.54,1.45-2.3.09-.15.27-.23.41-.35Z" transform="translate(-64.47 -272.46)"/><path d="M68.37,287.25c.4-.51.82-1,1.2-1.54s.73-1.14,1.1-1.71h0l.33.28a9,9,0,0,1-3.27,3.84l.67-.91Z" transform="translate(-64.47 -272.46)"/><path d="M88.28,284l2.3,3.25,0,0,.73.85-.05.09a3.18,3.18,0,0,1-.87-.56c-.75-.94-1.45-1.91-2.13-2.9-.1-.15,0-.45.05-.69Z" transform="translate(-64.47 -272.46)"/><path d="M93.22,288.53a6.93,6.93,0,0,1-3.14-3.62c.65-.15.8.34,1,.66C91.86,286.59,92.57,287.62,93.22,288.53Z" transform="translate(-64.47 -272.46)"/><path d="M68.82,285a6.36,6.36,0,0,1-3.16,3.58l3-3.78Z" transform="translate(-64.47 -272.46)"/><path d="M68.39,287.22l-1.34.93c.61-1,1.31-2.12,2-3.25.09-.12.36-.12.76-.24l-1.48,2.59Z" transform="translate(-64.47 -272.46)"/><path d="M84.93,285.28,84,283.67l.22-.14.47.53,1.1,1.38,1.45,1.48-.09.13-2.23-1.79Z" transform="translate(-64.47 -272.46)"/><path d="M90.58,287.25l-1.3-2.35,0-.18c.2.11.49.16.6.32.36.55.62,1.17,1,1.7s.82,1,1.2,1.54l-1.57-1.06Z" transform="translate(-64.47 -272.46)"/><path d="M74.22,284.15l.51-.62c.23,1.05-1.52,3-2.93,3.32l1.37-1.4Z" transform="translate(-64.47 -272.46)"/><path d="M84.91,285.26l.3.7-.13.13-1.92-2.21c.66-.09.63-.07,1,.45a7.35,7.35,0,0,0,.82.95Z" transform="translate(-64.47 -272.46)"/><path d="M75.8,283.93l-1.94,2.16,0-.08c.4-.67.78-1.36,1.22-2,.11-.17.44-.19.67-.28Z" transform="translate(-64.47 -272.46)"/><path d="M74.22,284.15l-1,1.3c0-.87.51-1.72,1.11-1.77Z" transform="translate(-64.47 -272.46)"/><path d="M85.78,285.44l-1.1-1.38c0-.13.09-.37.15-.38s.39.05.43.14C85.46,284.35,85.61,284.9,85.78,285.44Z" transform="translate(-64.47 -272.46)"/></svg>
                            <div>
                                <p>Ange</p>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}}>
                        <div className="home-category-card accessory-card">
                            <div>
                                <p>Accessoires</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
};

export default Home;