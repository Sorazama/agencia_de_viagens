import styles from './grand_canyon.module.css'
import ComponenteProps from './componenteprops'
import grandcanyon from '../imagensAgencia/grandcanyonbandeira.jpg'
function Grand_Canyon(){
    return (
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="o Grand Canyon"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odit cupiditate? Optio perspiciatis totam amet laboriosam reiciendis excepturi ullam ea blanditiis saepe. Cupiditate, eos quidem. Laboriosam impedit harum nisi cumque."
            bandeira={grandcanyon}
            />
        </div>

    )
}

export default Grand_Canyon