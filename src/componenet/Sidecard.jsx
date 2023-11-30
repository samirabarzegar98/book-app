 import styles from "./sideCard.module.css"

function Sidecard({data:{image ,title}}) {
  return (
    <div className={styles.cards}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default Sidecard