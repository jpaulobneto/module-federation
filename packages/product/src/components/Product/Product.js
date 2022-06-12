import { Loader } from "../Loader/Loader"
import styles from "./Product.module.css"
import { useProduct } from "./useProduct"

export function Product() {
  const { state } = useProduct()

  return (
    <>
      <Loader
        src="http://localhost:3003/remoteEntry.js"
        lib="checkout"
        mod="./Cart"
      />
      <div className={styles.Root}>
        <h1 className={styles.Title}>{state.name}</h1>
        <img
          className={styles.FeaturedImage}
          src={state.featuredImage.src}
          alt={state.featuredImage.alt}
        />
        <p className={styles.Description}>{state.description}</p>
      </div>
      <Loader
        src="http://localhost:3003/remoteEntry.js"
        lib="checkout"
        mod="./AddToCart"
        item={state}
      >
        Adicionar ao carrinho
      </Loader>
    </>
  )
}
