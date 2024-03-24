
import "./Dist.css"
const Dist =(props)=>{

    return(
        <>
           <div>
                <div className= "distributeEach">

                    <div className= "image_sector"> 
                        <img src={props.image} alt="" id="image"/>
                    </div>

                    <div className= "wording_area">
                        <h2 id="headings">{props.headings}</h2>
                        <p id="wordings">{props.wordings}</p>
                        <h3 id="bottomtext">{props.bottom}</h3>

                    </div>


                </div>

           </div>
        </>
    )
}

export default Dist;