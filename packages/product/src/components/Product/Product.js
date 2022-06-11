import styles from "./Product.module.css"
import { useProduct } from "./useProduct"

export function Product() {
  const { state } = useProduct()

  return (
    <div className={styles.Root}>
      <h1 className={styles.Title}>{state.name}</h1>
      <img
        className={styles.FeaturedImage}
        src={state.featuredImage.src}
        alt={state.featuredImage.alt}
      />
      <p className={styles.Description}>{state.description}</p>
    </div>
  )
}
