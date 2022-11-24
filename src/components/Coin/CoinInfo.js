import React,{useState} from 'react'
import './coin.css'


// dangerousSetInnerhtml ues to link work as a link in description (a tag )
// price change with respectvie time stamp
function CoinInfo({name,description}) {
  
    const [truncate, setTruncate] = useState(true);
    var truncatedDesc =
      description.slice(0, 500) +
      "<p style='color:var(--grey); cursor:pointer'> Read More...</p>";
  
    var fullDesc =
      description + "<p style='color:var(--grey); cursor:pointer'> Read Less...</p>";
  
    return (
<div>
        <h3 style={{ marginTop: "0.5rem" }}>{name}</h3>
        <p
          onClick={() => setTruncate(!truncate)}
          className="desc-links"
          dangerouslySetInnerHTML={{
            __html: truncate ? truncatedDesc : fullDesc,
          }}
        />
      </div>
    );
  }

export default CoinInfo

