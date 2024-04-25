import styles from './aruba.module.css'
import ComponenteProps from './componenteprops'
import bandeiruba from '../imagensAgencia/bandeiruba.png'
function Aruba(){
    return (
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="Praias de Aruba"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odit cupiditate? Optio perspiciatis totam amet laboriosam reiciendis excepturi ullam ea blanditiis saepe. Cupiditate, eos quidem. Laboriosam impedit harum nisi cumque."
            bandeira={bandeiruba}
            />
        </div>

    )
}

export default Aruba