
import React , { Component } from 'react' ;
class Product extends Component{
    render() {
        const { match } = this.props ;
        return (
            <div className = 'product'>
                 Thông Tin Sản Phẩm {match.params.name}
            </div>
        );
    }
}
export default Product ;