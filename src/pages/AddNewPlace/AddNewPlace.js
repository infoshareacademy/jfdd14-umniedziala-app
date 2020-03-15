import React, {Component} from 'react';
import './AddNewPlace.css';
import {Form} from 'semantic-ui-react'; // jezeli wprowadzanie zaawansowane to musi być form jezeli nie to wywalić
import {Link} from 'react-router-dom'


// function AddNewPlace() {
    
//     return (
//         <main className='dashboard'>
//             <div className='addPlace'>
//                 <h1 className='addPlace__h1'>Dodaj swoje miejsce</h1>
//                 <div className='addPlace__name'><span>Nazwa miejsca:</span><Input></Input></div>
//                 <div className='addPlace__price'><span>Cena:</span><Input></Input>(tanio, średnio, drogo)</div>
//                 <div className='addPlace__category'><span>Kategoria:</span><Input></Input></div>
//                 <div className='addPlace__img'><span>Zdjęcie:</span><Input></Input ></div>
//                 <div className='addPlace__location'><span>Lokalizacja:</span><Input></Input></div>
//                 <div className='addPlace__description'><span>Opis:</span><Input></Input></div>
//                 <Button>Dodaj nowe miejsce</Button>
//             </div>
//         </main>
       
//     )
//     }
    
//     export default AddNewPlace;

   
    
    const options = [
      { key: 'Gda', text: 'Gdańsk', value: 'gdańsk' },
      { key: 'Sop', text: 'Sopot', value: 'sopot' },
      { key: 'Gdy', text: 'Gdynia', value: 'gdynia' },
    ]
    
    class FormAddPlace extends Component {
      state = {}
    
      handleChange = (e, { value }) => this.setState({ value })
    
      render() {
        const { value } = this.state
        return (
            <main className='dashboard'>
                <h1 className='dashboard__h1'>Dodaj swoją atrakcję</h1>
                <br></br>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Nazwa atrakcji' placeholder='Nazwa atrakcji' />
              <Form.Input fluid label='Zdjęcie' placeholder='Zdjęcie' />
              <Form.Select
                fluid
                label='Lokalizacja'
                options={options}
                placeholder='Wybierz lokalizację'
              />
            </Form.Group>
            <Form.Group inline>
              <label>Kategoria:</label>
              <Form.Radio
                label='Gastronomia'
                value='gastro'
                checked={value === 'gastro'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Natura'
                value='natura'
                checked={value === 'natura'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Kultura'
                value='kultura'
                checked={value === 'kultura'}
                onChange={this.handleChange}
              />
               <Form.Radio
                label='Sport'
                value='sport'
                checked={value === 'sport'}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group inline>
              <label>Cena:</label>
              <Form.Radio
                label='Tanio ($)'
                value='sm'
                checked={value === 'sm'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Średnio ($$)'
                value='md'
                checked={value === 'md'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Drogo ($$$)'
                value='lg'
                checked={value === 'lg'}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea label='Opis' placeholder='Opisz atrakcję' />
            <Form.Checkbox label='Zgadzam się z warunkami korzystania z usługi' />
            <Link to='/placeadded'>
                <Form.Button>Dodaj atrakcję</Form.Button>
            </Link>
          </Form>
          </main>
        )
      }
    }
    
    export default FormAddPlace