import React from 'react';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const TokenEarningRules = () => {
    return (
      <div className="token-earning-rules">
        <h2>Rules and Guidelines</h2>  
        <h5>How To Earn more Xpress coins: </h5>
        <ul>
          <li>You can earn 4 coins per $15 spent and a maximum of 40 XpressCoins per order.</li>
          <li>Refer to your family members and friends and earn 5 XpressCoins.</li>
          <li>Complete 5 product reviews this month and earn 10 XpressCoins for meeting the challenge.</li>
          <li>Earn 2 XpressCoins by sharing purchases on social media.</li>
          <li>You can play Games on the Express App and win XpressCoins.</li>
          <li>You can check details on the Order History page or the XpressCoins Zone.</li>
        </ul>  
        <h5>How To Use Xpress coins: </h5>
        <ul>
          <li>You can pay using XpressCoins for products on Express. Use the " XpressCoins Price" filter to find applicable products.</li>
          <li>Buy coupons & EGVs from the  XpressCoins Zone.</li>
          <li>Buy exclusive deals on  XpressCoins Zone using  XpressCoins.</li>
        </ul>  
        <h5>Validity: </h5>
        <p>XpressCoins will expire after one year from the date of credit. For e.g  XpressCoins credited on 20th August 2023 will expire on 30th June 2024.</p>
         
        <h5>Must Know: </h5>
        <p>XpressCoins will be credited once the Return Policy period of all items in your order is completed. You can check all transactions of XpressCoins by visiting your SuperCoin Zone.</p>
       <p>Once 'Rewards' are purchased from XpressCoins they cannot be cancelled or returned.</p>
  
        <h5>Fraud Prevention and Rules Violations:</h5>
        <p>Engaging in fraudulent activities or violating the established rules will result in penalties. Penalties may include the loss of earned tokens or suspension of accounts, as deemed appropriate by our team.</p>
  
        <h5>Dispute Resolution:</h5>
        <p>If users believe there has been an error in the allocation of earned tokens, a designated procedure for dispute resolution is in place. Please contact our support team for assistance.</p>
  
        <h5>Updates and Modifications:</h5>
        <p>These rules and guidelines may be subject to updates or modifications over time. Users will be informed of any changes that could impact their ability to earn tokens within our ecosystem.</p>
  
        <h5>Privacy and Data Protection:</h5>
        <p>We prioritize user privacy and data protection. Your data will be used in accordance with our privacy policy. Rigorous security measures are in place to safeguard your information.</p>
    
        <h5>Legal Considerations:</h5>
        <p>Earning tokens does not constitute a legal claim to any financial or material benefits. Tokens hold no intrinsic value outside of our designated ecosystem.</p>
      </div>
    );
  };
  
const Header = () => {
  return (
    
        <Container>
            <div >
            <LinkContainer to='/Coin-activites'>
            <div >
                <button style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}> View coin activity </button>
                   
            </div>
        </LinkContainer>

    
    <div style={{padding:'20px'}}>
                <img style={{width:'100%',height:'100%'}} src='https://img.freepik.com/premium-vector/sale-banner-template_39897-38.jpg?w=1060' alt='hey'/>

    </div>
</div>
</Container>
    
  );
};
const Coupons = () => {
  return(
      <div className="redeem-coupons">
    <h2>Redeem Coupons</h2>
    <div className="coupon-slider ">
      {/* Add multiple coupon squares here */}
      <div className="coupon-square">
        <img src="https://rukminim2.flixcart.com/fk-p-www/100/100/promos/26/04/2023/fd698f41-e448-4856-86ce-9337955da8fa.jpg?q=50" alt="Coupon" />
      </div>
      <div className="coupon-square">
        <img src="https://rukminim2.flixcart.com/fk-p-www/100/100/promos/13/08/2023/1357173a-1c84-4521-b241-93dc570469aa.png?q=50" alt="Coupon" />
      </div>
      <div className="coupon-square">
        <img src="https://rukminim2.flixcart.com/fk-p-www/100/100/promos/13/08/2023/8c9dadb2-71b3-4c9e-87cd-494088053f5d.png?q=50" alt="Coupon" />
      </div>
      <div className="coupon-square">
        <img src="https://rukminim2.flixcart.com/fk-p-lockin/100/100/rs-img/1908T200OWG01_hybrid_980_765_01-10-2021_20-37-57.jpg?q=50" alt="Coupon" />
      </div>
      <div className="coupon-square">
        <img src="https://rukminim2.flixcart.com/fk-p-lockin/100/100/rs-img/2003T50FLF01_hybrid_980_765_12-18-2020_23-57-09.jpg?q=50" alt="Coupon" />
      </div>
      <div className="coupon-square">
        <img src="https://rukminim2.flixcart.com/fk-p-www/100/100/promos/05/09/2022/b8777150-a49e-40f8-8d97-21a90470c7c8.png?q=50" alt="Coupon" />
      </div>
      
      {/* Add more coupon squares as needed */}
    </div>
  </div>

  );
};
const SuperCoinBalance = ({ coins }) => {
  return (
    <div style={{padding:'40px'}} >
 <h4 > 
  XCoin Balance: <span style={{ color: 'orange' }}>{coins}</span>
  <img src="https://rukminim2.flixcart.com/lockin/32/32/images/super_coin_icon_22X22.png?q=90" alt="XCoin Icon" style={{ width: '16px', height: '16px', marginLeft: '5px' }} />
</h4>       </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Xpress Coins: Your Shopping Rewards</h2>
        <p>Love rewards? Xpress Coins is here for you. Earn 4 Xpress Coins for every 15$ spent.
        With Xpress Coins, shop more, earn more!Members enjoy up to 40 Coins per order.
        Use your Xpress Coins to pay for purchases or get vouchers from Gaana, Zomato, and more. Plus, buy products for just 1$.</p>

        <h2>Xpress Coins: More Rewards, More Fun</h2>
        <p>Transform your Xpress mart Plus Coins into Xpress Coins, a reward system that offers even greater possibilities. Earn 4 Coins for every 15$ spent </p>
        <p>Maximize your rewards with up to 40 Coins per order. Leverage your Xpress Coins for gift vouchers, memberships, or snag products starting from 1$. Dive into the world of enhanced rewards!</p>      </div>
    </footer>
  );
};

const XpressCoin = () => {
  const superCoinBalance = 328; 
  return (
    <div className="super-coins-page">
      
      <SuperCoinBalance coins={superCoinBalance} />
      <Header />
      <Coupons />   
      <TokenEarningRules />
      <Footer />
    </div>
  );
};

export default XpressCoin;
