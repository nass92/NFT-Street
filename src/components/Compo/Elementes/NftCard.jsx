import React, { useState } from "react";
import "../../styles/Elemente-style/NftCard.css";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ethers } from "ethers";
import Card from "./Card";


const NFTCard = ({ nft, button}) => {

  const [isLike, setIsLike] = useState(false);
  const [colors] = useState([]);

  const isARSupport = nft.types==='ar/vr';


  const like = () => setIsLike(!isLike);







  return (
    <div id="card-list" >
    <Card
      blurColor={colors[0]}

      child={<>
    
         

  {isARSupport ? <model-viewer ar-scale="auto" ar ar-modes="webxr scene-viewer quick-look" id="reveal" loading="eager" camera-controls auto-rotate src={nft.uri} > </model-viewer> : 
  nft.types === 'image' ? <img src={nft.uri} alt={nft.title} className="img" type="image" /> : (<video controls src={nft.uri} alt={nft.title} className="video"  type ="video/mp4"  />)}
        


    

        <div className="wrapper">
          <div className="info-container">
            <p className="owner"> {nft.author}</p>
            <p className="name">{nft.title}</p>
          </div>

          <div className="price-container">
            <p className="price-label">Price</p>
            <p className="price">
              {" "}
              <FaEthereum /> {nft.forSell ? ethers.utils.formatEther(nft.price) : "Not For Sell" } 
            </p>
          </div>
        </div>
        <div className="buttons">
          {/* <button className="buy-now">Buy Now</button> */}
          {/*nft.forSell ? <Buy nft={nft} /> : <DescriptionModal nft={nft}/> */}
          {button}
     
          <div className="like-container">
            <button className="like" onClick={like}>
              {!isLike ? (
                <AiOutlineHeart size="30" color="white" />
              ) : (
                <AiFillHeart size="30" style={{
                  stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`
                }} color='#00f5c966' />
              )}
            </button>
            <p className="like-count">123</p>
          </div>
        </div>
        
      </>}>

    </Card>
    </div> );
};

export default NFTCard;

