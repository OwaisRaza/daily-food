import React, { Component } from 'react'
import Header from '../header/Header'
import Carousels from '../carousel/Carousels'
import Categories from '../categories/Categories'
import food1 from '../../images/food-1.png'; 
import food2 from '../../images/food-2.png'; 
import food3 from '../../images/food-3.png';

class Dashboard extends Component {
    state = { 
        data: [
            {
                id: 1,
                title: 'Food',
                price: '$34',
                imageUrl: food1,
                discription: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',
                count: 0
            }, {
                id: 2,
                title: 'Burgur',
                price: '$34',
                imageUrl: food2,
                discription: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',
                count: 0
            }, {
                id: 3,
                title: 'Pizza',
                price: '$34',
                imageUrl: food3,
                discription: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',
                count: 0
            }, {
                id: 4,
                title: 'Burgur',
                price: '$34',
                imageUrl: food2,
                discription: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',
                count: 0
            }, {
                id: 5,
                title: 'Pizza',
                price: '$34',
                imageUrl: food3,
                discription: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',
                count: 0
            }
        ]
    }

    handleCount = (i, type, value) => {
        const { data } = this.state;

        switch (type) {
            case 'incremen':
              this.setState({ data: [...data.slice(0, i), {...data[i], count: data[i].count + 1}, ...data.slice(i + 1)] })
              break;  

            case 'decrement':
              this.setState({ data: [...data.slice(0, i), {...data[i], count: data[i].count - 1}, ...data.slice(i + 1)] })
              break;

            case 'number':
              const re = /^[0-9\b+]+$/;
              this.setState({ data: [...data.slice(0, i), {...data[i], count: value === '' ||  re.test(value) ? +value : 0 }, ...data.slice(i + 1)] })
              break;

            default:
                break;
        }
    }

    render() { 
        const { data } = this.state;
        return ( 
            <div className="dashboard-cotent">
                <Header />
                <Carousels />
                <Categories 
                    categories={data}
                    onHandleCount={this.handleCount} />
            </div>
         );
    }
}
 
export default Dashboard;