import React, { Component } from 'react'
import ProductDataService from '../../service/ProductDataService'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
 

class AllProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {
            products: []
        }
        this.refreshAllProduct = this.refreshAllProduct.bind(this)
        this.addToCartClicked = this.addToCartClicked.bind(this)
    }
    
    componentDidMount() {
        this.refreshAllProduct();
    }

    refreshAllProduct(){
        setTimeout(() => {
        ProductDataService.retrieveAllProducts()
            .then(
                response => {
                    this.setState({
                        products: response.data,
                    })
                }
            )
        }, 350)
    }

    addToCartClicked(productId){
        ProductDataService.addToCart(productId)
        console.log('Add item to Cart')
    }

    render() {
        return(
            <div className="container   bg-success " style={{marginTop: '.5rem'}}>
                <div class="row">
                    <div class="col-12">
                        <br/>                    
                        <CardGroup className="mt-4">
                            {
                                this.state.products.map (
                                    product =>                                                  
                                                                        
                                    <div classname="card mb-2 " style={{margin: '1.2%', width: '18rem' , textAlign: "center" }} key={product.productId}>
                                        <img className="card-img-top img-thumbnail " src={product.image} alt={product.productName}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.productName}</h5>
                                            <p class="card-text">{product.productDescription}</p>
                                            <p class="card-text">${product.productPrice}</p>
                                            <Button className="btn btn-danger sticky-bottom" variant="primary" onClick={() => this.addToCartClicked(product.productId)}>Add To Cart</Button>
                                        </div>

                                    </div>
                                    
                                )
                            }
                        </CardGroup>    
                        <br/>   
                    </div>
                </div>   
                 
           </div>
       )
   } 
}

export default AllProductComponent;
