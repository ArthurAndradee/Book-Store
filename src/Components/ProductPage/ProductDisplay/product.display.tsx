import './product.display.css'

interface ProductBackground {
    imgLink: string
}

function ProductDisplay(props: ProductBackground) {
    return (
        <div style={{backgroundImage:"url(" + props.imgLink + ")" }} className='display'></div>
    )
}

export default ProductDisplay;