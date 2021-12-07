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
                    
                    <CardGroup>
                        {
                            this.state.products.map (
                                product =>                                                  
                                <Card className="mb-8" style={{ width: '18rem' , textAlign: "center" }} key={product.productId}>
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
                            )
                        }
                    </CardGroup>    
                    <br/>
                    
                    <br/>
                 
           </div>
       )
   } 
}
export default MyCartComponent;
