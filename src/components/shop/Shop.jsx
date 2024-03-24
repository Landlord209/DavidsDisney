import "./Shop.css"

const Shop =()=>{

    return(
        <>
           <div className= "shopSection">
                <h2 id="shopW">Shop</h2>
                <div className= "shopImage">
                  <div className="imgText">
                    
                    <div className="divimg"><span><img src="./src/assets/disneyLogo.png" alt="noth" id="textImg"/>
                        </span><span className="textimg">store.co.uk</span></div>
                    <p>Shop the stories you love for you and your family</p>

                    <h3><a href="" id="linkText">SHOP NOW</a></h3>
                  </div>
                </div>
           </div>
        </>
    )
}

export default Shop;