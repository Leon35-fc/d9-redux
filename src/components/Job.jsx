import { Row, Col, Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

// const Favourite = () => {
//   const favourite = useSelector((currentState) => {
//     return currentState.favourite.content
//   })
//   console.log('Funzione Favourite', favourite);
  
// }

// Favourite()

const changeFav = ((fav) => {
  
})



const Job = (({ data, favourite, addFavourite }) => {
  
  console.log(favourite);

  const changeFav = ((fav) => {
    console.log(fav);
    
    fav ? addFavourite(false) : addFavourite(false)
  })
  

  return (

  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={1}>
      <Button onClick={changeFav(e.target)} >
        <i className='bi bi-star'></i>
      </Button>
    </Col>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  
)
})

export default Job
