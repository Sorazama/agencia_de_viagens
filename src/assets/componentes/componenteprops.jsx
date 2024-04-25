import styles from './componenteprops.module.css'

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div className={styles.corpo_texto}>
            <h2>Venha explorar esse lugar incrível! Venha conhecer {lugar}</h2>
            <p>{texto}</p>
            <img className={styles.imagem}src={bandeira} alt="Bandeira" />
        </div>
    )
}

export default ComponenteProps