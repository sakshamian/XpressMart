import React from "react";
import {
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector} from "react-redux";



const SuperCoinBalance = ({ coins }) => {
    return (
        <Row>
        
      <div style={{padding:'40px'}}>
      <h4>
  XCoin Balance: <span style={{ color: 'orange' }}>{coins}</span>
  <img src="https://rukminim2.flixcart.com/lockin/32/32/images/super_coin_icon_22X22.png?q=90" alt="XCoin Icon" style={{ width: '16px', height: '16px', marginLeft: '5px' }} />
</h4>    
  </div>
      <div >
      <img style={{width:'100%',height:'100%'}} src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690301873/Croma%20Assets/CMS/LP%20Page%20Banners/2023/ZipCare/HP%20Highlights%20and%20Rotating/Zipcare_Homepagerotating_Desktop_bfpb4y.png?tr=w-2048' alt='hey'/>

        </div>
        </Row>
    );
  };
  const CoinAct = () => {

  const {
    loading: loadingOrders,
    error: errorOrders,
    orders,
  } = useSelector((state) => state.orderListMy);


    const superCoinBalance = 328; 
    return (
        <Row>
      <div className="super-coins-page">
        
        <SuperCoinBalance coins={superCoinBalance} />

        
      </div>
      <Col md={11}>
        <h2>Recent Transactions</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Transaction Date</th>
                <th>Coins</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderItems[0].name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>+{Math.min(Math.floor(order.totalPrice % 15 * 4),40)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
      </Row>
    );
  };
  
  export default CoinAct;
  