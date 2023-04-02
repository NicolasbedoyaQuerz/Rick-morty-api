
const Location = ({infolocation}) => {

    return (
      <div className='container-in-location'>
          <div className='container-over-information'>
              <h2>Name:</h2>
              <p>{infolocation.name}</p> 
           </div>
  
          <div className='container-over-information' >
              <h2>Type:</h2>
              <p>{infolocation.type}</p> 
  
          </div>
          <div className='container-over-information'>
              <h2>Dimension:</h2>
              <p>{infolocation.dimension}</p> 
  
          </div>
          <div className='container-over-information'>
              <h2>Residents:</h2>
              <p>{infolocation.residents?.length}</p> 
          </div>
  
      </div>
    )
  }
  
  export default Location;
  
  
  