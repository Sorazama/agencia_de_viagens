import styles from './muralha.module.css'
import ComponenteProps from './componenteprops'
import china from '../imagensAgencia/chinabandeira.png'
function Muralha(){
    return (
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="a Muralha da China"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odit cupiditate? Optio perspiciatis totam amet laboriosam reiciendis excepturi ullam ea blanditiis saepe. Cupiditate, eos quidem. Laboriosam impedit harum nisi cumque."
            bandeira={china}
            />
        </div>

    )
}

export default Muralha