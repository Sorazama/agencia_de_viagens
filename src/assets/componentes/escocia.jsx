import styles from './escocia.module.css'
import ComponenteProps from './componenteprops'
import escocia from '../imagensAgencia/escociabandeira.png'
function Escocia(){
    return (
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="Escócia"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odit cupiditate? Optio perspiciatis totam amet laboriosam reiciendis excepturi ullam ea blanditiis saepe. Cupiditate, eos quidem. Laboriosam impedit harum nisi cumque."
            bandeira={escocia}
            />

        </div>

    )
}

export default Escocia