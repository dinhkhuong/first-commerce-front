import React, { Component } from 'react'
import ProductDataService from '../../service/ProductDataService'
import Card from 'react-bootstrap/Card'
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
            <div className="container">
                
                    <br/>
                    
                    <CardGroup>
                        {
                            this.state.products.map (
                                product =>                                                  
                                <Card className="mb-2" style={{ width: '18rem' , textAlign: "center" }} key={product.productId}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.productName}</Card.Title>
                                        <Card.Text>
                                        {product.productDescription}
                                        </Card.Text>
                                        <Card.Text>
                                        ${product.productPrice}
                                        </Card.Text>
                                        <Button className="sticky-bottom" variant="primary" onClick={() => this.addToCartClicked(product.productId)}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>                                
                            )
                        }
                    </CardGroup>    
                    <br/>
                    
                   <br/>
                 
           </div>
       )
   } 
}

export default AllProductComponent;
