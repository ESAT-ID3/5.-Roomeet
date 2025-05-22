import "./FlatGrid.css"

export const FlatGrid = () => {

  return (
    <div className="flat_grid_container">
        <div className="flat_grid__big_image"></div> {/* Cambiar todas estas imágenes por las que le pasemos*/}
        <div className="flat_grid__horizontal_flex">
            <div className="flat_grid__medium_image"></div>
            <div className="flat_grid__small_grid">
                <div className="flat_grid__small_grid__horizontal">
                    <div className="flat_grid__small_grid__image"></div>
                    <div className="flat_grid__small_grid__image"></div>
                </div>
                <div className="flat_grid__small_grid__horizontal">
                    <div className="flat_grid__small_grid__image"></div>
                    <div className="flat_grid__small_grid__image more_images">+3</div>
                </div>
            </div>
        </div>
    
    </div>
  )
}
