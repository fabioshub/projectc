import React, { Component } from 'react';
import './adminpanel.css';
import { Link } from 'react-router-dom';
import Product from './product';

class AdminPanel extends Component {

    constructor(props){
        super(props);
        this.createProduct = this.createProduct.bind(this);
        this.loadProduct = this.loadProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        // this.deleteProduct = this.deleteProduct.bind(this);
        this.onChangeProductId = this.onChangeProductId.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductNumber = this.onChangeProductNumber.bind(this);
        this.onChangeProductEAN = this.onChangeProductEAN.bind(this);
        this.onChangeProductInfo = this.onChangeProductInfo.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductSpecification = this.onChangeProductSpecification.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductColor = this.onChangeProductColor.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onChangeBrandId = this.onChangeBrandId.bind(this);
        this.onChangeBrandName = this.onChangeBrandName.bind(this);
        this.onChangeTypeName = this.onChangeTypeName.bind(this);
        this.onChangeTypeId = this.onChangeTypeId.bind (this);
        this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeCollectionId = this.onChangeCollectionId.bind(this);
        this.onChangeCollectionName = this.onChangeCollectionName.bind(this);

        this.state = {
            productId: 0,
            productName: '',
            productNumber: '',
            productEan: '',
            productInfo: '',
            productDesc: '',
            productSpec: '',
            price: 0,
            color: '',
            image: '',
            stock: 0,
            brandId: 0,
            brandName: '',
            typeName: '',
            typeId: 0,
            categoryId: 0,
            categoryName: '',
            collectionId: 0,
            collectionName: '',
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {

    }

    createProduct(event) {
        event.preventDefault()
        let newproduct = {"ProductName": this.state.productName, "ProductNumber": this.state.productNumber, "ProductEAN": this.state.productEan, "ProductInfo": this.state.productInfo, "ProductDescription": this.state.productDesc, "ProductSpecification": this.state.productSpec, "ProductPrice": this.state.price, "ProductColor": this.state.color, "ImageURL": this.state.image, "Stock": this.state.stock, "BrandId": this.state.brandId, "BrandName": this.state.brandName, "TypeName": this.state.typeName, "TypeId": this.state.typeId, "CategoryId": this.state.categoryId, "CategoryName": this.state.categoryName, "CollectionId": this.state.collectionId, "CollectionName": this.state.collectionName}
    
        fetch(`http://localhost:3000/api/product/create`, {
            method: 'POST',
            body: JSON.stringify(newproduct),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(response) {
            console.log(response)
        })
    }

    loadProduct(id = this.state.productId) {

        fetch(`http://localhost:3000/api/product/${id}`, {
           host: 'localhost',
           port: 5000,
           path: '/',
           method: 'GET',
           type: 'application/json',

           rejectUnauthorized: false,
           requestCert: true,
           mode: "no-cors",
           headers:{"Access-Control-Allow-Credentials" : true},
           agent: false
        }).then(results => {
            console.log("RETRIEVED ITEM SUCCESS!")
            return results.json();
        })
    }

    updateProduct(id = this.state.productId, event) {
        event.preventDefault()
        let updatedproduct = {"ProductName": this.state.productName, "ProductNumber": this.state.productNumber, "ProductEAN": this.state.productEan, "ProductInfo": this.state.productInfo, "ProductDescription": this.state.productDesc, "ProductSpecification": this.state.productSpec, "ProductPrice": this.state.price, "ProductColor": this.state.color, "ImageURL": this.state.image, "Stock": this.state.stock, "BrandId": this.state.brandId, "BrandName": this.state.brandName, "TypeName": this.state.typeName, "TypeId": this.state.typeId, "CategoryId": this.state.categoryId, "CategoryName": this.state.categoryName, "CollectionId": this.state.collectionId, "CollectionName": this.state.collectionName}

        fetch(`http://localhost:3000/api/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedproduct),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(response) {
            console.log(response)
        })
    }

    deleteProduct(id = this.state.productId, event) {
        event.preventDefault()
        let deletedproduct = {"ProductId": this.state.productId}

        fetch(`http://localhost:3000/api/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(deletedproduct),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(response) {
            console.log(response)
        })
    }

    onChangeProductId = (p) => {
        this.setState({ productId: p.target.value });
    }
    onChangeProductName = (p) => {
        this.setState({ productName: p.target.value });
    }
    onChangeProductNumber = (p) => {
        this.setState({ productNumber: p.target.value });
    }
    onChangeProductEAN = (p) => {
        this.setState({ productEan: p.target.value });
    }
    onChangeProductInfo = (p) => {
        this.setState({ productInfo: p.target.value });
    }
    onChangeProductDescription = (p) => {
        this.setState({ productDesc: p.target.value });
    }
    onChangeProductSpecification = (p) => {
        this.setState({ productSpec: p.target.value });
    }
    onChangeProductPrice = (p) => {
        this.setState({ price: p.target.value });
    }
    onChangeProductColor = (p) => {
        this.setState({ color: p.target.value });
    }
    onChangeImageURL = (p) => {
        this.setState({ image: p.target.value });
    }
    onChangeStock = (p) => {
        this.setState({ stock: p.target.value });
    }
    onChangeBrandId = (p) => {
        this.setState({ brandId: p.target.value });
    }
    onChangeBrandName = (p) => {
        this.setState({ brandName: p.target.value });
    }
    onChangeTypeName = (p) => {
        this.setState({ typeName: p.target.value });
    }
    onChangeTypeId = (p) => {
        this.setState({ typeId: p.target.value });
    }
    onChangeCategoryId = (p) => {
        this.setState({ categoryId: p.target.value });
    }
    onChangeCategoryName = (p) => {
        this.setState({ categoryName: p.target.value });
    }
    onChangeCollectionId = (p) => {
        this.setState({ collectionId: p.target.value });
    }
    onChangeCollectionName = (p) => {
        this.setState({ collectionName: p.target.value });
    }

    render() {
        return(
            <div class="container admin-container" style={{marginTop: "130px"}}>
                <h1>Admin Panel</h1>
                <div class="row">
                    <div class ="col-md-6 admin-form">
                        <h4>Creëer nieuw product</h4>
                        <form onSubmit={this.createProduct} >
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productnummer *" onChange={this.onChangeProductNumber} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productnaam" onChange={this.onChangeProductName} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Product-EAN *" onChange={this.onChangeProductEAN} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productinfo" onChange={this.onChangeProductInfo} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productomschrijving" onChange={this.onChangeProductDescription} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productspecificatie" onChange={this.onChangeProductSpecification} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Prijs *" onChange={this.onChangeProductPrice} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Kleur" onChange={this.onChangeProductColor} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Afbeelding (URL)" onChange={this.onChangeImageURL} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Voorraad *" onChange={this.onChangeStock} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Merk-ID" onChange={this.onChangeBrandId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Merknaam" onChange={this.onChangeBrandName} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Soort-ID" onChange={this.onChangeTypeId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Soort" onChange={this.onChangeTypeName} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Categorie-ID" onChange={this.onChangeCategoryId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Categorie" onChange={this.onChangeCategoryName} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Collectie-ID" onChange={this.onChangeCollectionId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Collectie" onChange={this.onChangeCollectionName} />
                            </div>
                            <div class="form-group">
                                <h5>Velden met een * zijn verplicht.</h5>
                            </div>
                            <div class='form-group'>
                                <input type="submit" class="btnSubmit" value="Creëer" />
                            </div>
                        </form>

                        <h4>Delete product</h4>
                        <form onSubmit={this.deleteProduct}>
                        <div class='form-group'>
                                <input type="number" min="0" class="form-control" placeholder="Product-ID" />
                            </div>
                            <div class='form-group'>
                                <input type="submit" class="btnSubmit" value="Verwijderen" />
                            </div>
                        </form>
                    </div>
                    <div class ="col-md-6 admin-form">
                        <h4>Update product</h4>
                        <form onSubmit={this.loadProduct}>
                            <div class='form-group'>
                                <input type="number" min="0" class="form-control" placeholder="Product-ID" onChange={this.onChangeProductID} />
                            </div>
                            <div class='form-group'>
                                <input type="submit" class="btnSubmit" value="Laden" />
                            </div>
                        </form>

                        <form onSubmit={this.updateProduct}>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productnummer *" onChange={this.onChangeProductNumber}>{this.productNumber}</input>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productnaam" onChange={this.onChangeProductName} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Product-EAN *" onChange={this.onChangeProductEAN} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productinfo" onChange={this.onChangeProductInfo} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productomschrijving" onChange={this.onChangeProductDescription} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Productspecificatie" onChange={this.onChangeProductSpecification} />
                            </div>
                            <div class="form-group">
                                <input type="number" step="0.01" min="0" class="form-control" placeholder="Prijs *" onChange={this.onChangeProductPrice} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Kleur" onChange={this.onChangeProductColor} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Afbeelding (URL)" onChange={this.onChangeImageURL} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Voorraad *" onChange={this.onChangeStock} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Merk-ID" onChange={this.onChangeBrandId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Merknaam" onChange={this.onChangeBrandName} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Soort-ID" onChange={this.onChangeTypeId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Soort" onChange={this.onChangeTypeName} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Categorie-ID" onChange={this.onChangeCategoryId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Categorie" onChange={this.onChangeCategoryName} />
                            </div>
                            <div class="form-group">
                                <input type="number" min="0" class="form-control" placeholder="Collectie-ID" onChange={this.onChangeCollectionId} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Collectie" onChange={this.onChangeCollectionName} />
                            </div>
                            <div class="form-group">
                                <h5>Velden met een * zijn verplicht.</h5>
                            </div>
                            <div class='form-group'>
                                <input type="submit" class="btnSubmit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPanel;