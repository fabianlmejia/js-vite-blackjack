import { pedirCarta, valorCarta, crearCartaHTML } from "./";
/**
 * Turno computadora
 * @param {Number} puntosMinimos puntos minimos q la pc necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento muestra las cartas
 * @param {Array<String>} deck  
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck =[] ) => {

    if(!puntosMinimos) throw Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw Error('Argumento html necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        // imgCarta.classList.add('carta');

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}