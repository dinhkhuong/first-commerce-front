import React, { Component } from 'react'
import ProductDataService from '../../service/ProductDataService'
import Card from 'react-bootstrap/Card'

import CardGroup from 'react-bootstrap/CardGroup'

class MyCartComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {
            products: []
        }
        this.refreshMyProduct = this.refreshMyProduct.bind(this)
    }

    componentDidMount() {
        this.refreshMyProduct();
    }

    refreshMyProduct(){
        ProductDataService.retrieveMyProducts()
        .then(
            response => {
                this.setState({
                    products: response.data,
                })
            }
        )
    }

    render() {
        return(
            <div className="container">
                
                    <br/>
                    
                    {/* try out rendering card element from bootstrap */}
                    <CardGroup>
                        {
                            this.state.products.map(
                                product =>
                                <div>                                                  
                                    <Card className="mb-8" style={{margin: '1rem', width: '18rem' , textAlign: "center" }} key={product.productId}>
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title>{product.productName}</Card.Title>
                                            <Card.Text>
                                            {product.productDescription}
                                            </Card.Text>
                                            <Card.Text>
                                            ${product.productPrice}
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>                                                         
                                
                                </div>
                            )
                        }
                    </CardGroup>    
                    <br/>
                    <h3 className="bg-success p-2" style={{ opacity: .8}}>Number of items: {this.state.products.length}</h3>
                    <h2 className="bg-success p-2 text-white">Total: ${this.state.products.reduce((a, v) => a = a + v.productPrice, 0)}</h2>
                    <br/>
                 
           </div>
       )
   } 
}
export default MyCartComponent;
