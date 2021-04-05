import { Container, Button } from 'react-bootstrap';
 

const Categories = (props) => {

    const { categories, onHandleCount } = props
  
    return ( 
        <Container>
            <section className="categories-section">
                <h3>Menu</h3>
                <ul>
                    { categories.map((category, i) => {
                    return <li key={i}>
                                <img variant="top" src={category.imageUrl} alt='test' width="130" height="130" />
                                <div className="discription">
                                    <h5>{category.title}</h5>
                                    <h5>{category.price}</h5>
                                    <p>{category.discription}</p>
                                </div>
                                <div className="counter">
                                    <Button 
                                        variant="secondary" 
                                        size="sm" 
                                        onClick={() => onHandleCount(i, 'incremen')}>
                                        +
                                    </Button>
                                        <input 
                                        type="text" 
                                        value={category.count} 
                                        onChange={(e) => onHandleCount(i, 'number', e.target.value)} />
                                    <Button 
                                        variant="secondary" 
                                        size="sm"  
                                        onClick={() => onHandleCount(i, 'decrement')}> 
                                            -
                                    </Button>
                                    {/* <a href="" className="cross-icon">×</a> */}
                                </div>
                            </li>
                    }) }
                </ul>
            </section>
        </Container>
     );
}
 
export default Categories;