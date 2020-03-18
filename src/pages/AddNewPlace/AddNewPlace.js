import React, { Component } from 'react';
import './AddNewPlace.css';
import { Form } from 'semantic-ui-react'; // jezeli wprowadzanie zaawansowane to musi być form jezeli nie to wywalić
import { Link } from 'react-router-dom'


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
// {
//   "name": 'Park Oliwski',
//   "id": 1,
//   "favorite": false,
//   "priceRange": 'free',
//   "type": 'nature',
//   "img": 'https://www.zatokapiekna.pl/slir/w730/images/uploads/articles/584/24-park_oliwski.jpg',
//   "location":'Gdańsk',
//   "descriptionShort": 'Zabytkowy park w gdańskiej dzielnicy Oliwa, nad Potokiem Oliwskim.',
//   "descriptionLong": 'Początkiem dzisiejszego parku był przyklasztorny ogród założony przez cystersów. Prawdopodobnie był położony po wschodniej stronie starej siedziby opatów z XV wieku, dalej do Zatoki Gdańskiej rozciągał się nadmorski las, który rozcinał Potok Oliwski. Po wzniesieniu przez opata Franciszka Zaleskiego pod koniec pierwszej połowy XVII wieku nowej siedziby opatów, ogród został poszerzony w kierunku południowo-zachodnim, stykając się ze starszym ogrodem klasztornym. ajmłodszymi częściami parku są: położony na południowo-zachodnim krańcu fragment pomiędzy ul. Opata Jacka Rybińskiego a budynkiem Gdańskiego Seminarium Duchownego - dawny ogród użytkowy cysterskiego konwentu; oraz 2-hektarowy obszar dawnego folwarku Saltzmanna z XVIII-XIX wieku wokół dworu, przejętego w 2001 na biura przez firmę Doraco, obsadzony m.in. grabami pospolitymi i kasztanowcami czerwonymi Briotti, bukszpanem, lawendą wąskolistną i tawulcem pogiętym. Obszar ten udostępniono 22 maja 2015. Na obszarze parku znajduje się również Spichlerz Opacki (Oddział Etnografii Muzeum Narodowego w Gdańsku)',
// },

const options = [
  { key: 'Gda', text: 'Gdańsk', value: 'gdańsk' },
  { key: 'Sop', text: 'Sopot', value: 'sopot' },
  { key: 'Gdy', text: 'Gdynia', value: 'gdynia' },
]

class FormAddPlace extends Component {

  state = {
    atractionData: {
      name: "",
      id: "",
      favorite: false,
      priceRange: "",
      typeGastronomia: false,
      typeNatura: false,
      typeSport: false,
      typeKultura: false,
      img: "",
      location: "",
      descriptionShort: "",
      descriptionLong: "",
    },
  }
  handleChangeAtractionName = (e, { value }) => this.setState({ name: value });
  handleChangePhoto = (e, { value }) => this.setState({ img: value });
  handleChangeLocation = (e, { value }) => this.setState({ location: value });
  handleChangeCheckbox = (e, { checked }) => { /* make switch*/    console.log(checked) };
  handleChange = (e, { value }) => this.setState({ priceRange: value });
  handleChangeTextArea = (e, { value }) => this.setState({ descriptionLong: value });
  //////////////////
  addToLocalStorageaAtractionName = () => (localStorage.setItem('AtractionName', this.state.name));
  addToLocalStoragePhoto = () => (localStorage.setItem('Photo', this.state.img));
  addToLocalStorageLocation = () => (localStorage.setItem('Location', this.state.location));
  addToLocalStorageCheckbox = () => (localStorage.setItem('Type', this.state.type)) ////
  addToLocalStorage = () => (localStorage.setItem('Price', this.state.priceRange));
  addToLocalStorageTextAreaValue = () => (localStorage.setItem('Description', this.state. descriptionLong));
  //////////////
  wrapedFunction = () => {
    this.addToLocalStorageaAtractionName();
    this.addToLocalStoragePhoto();
    this.addToLocalStorageLocation();
    this.addToLocalStorageCheckbox();
    this.addToLocalStorage();
    this.addToLocalStorageTextAreaValue();
  };

  render() {
    // const { value } = this.state
    return (
      <main className='addNewPlace__dashboard'>
        <h1 className='addNewPlace__dashboard--h1'>Dodaj swoją atrakcję</h1>
        <br></br>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input input={this.state.name} onChange={this.handleChangeAtractionName} fluid label='Nazwa atrakcji' placeholder='Nazwa atrakcji' />
            <Form.Input input={this.state.img} onChange={this.handleChangePhoto} fluid label='Zdjęcie' placeholder='Zdjęcie' />
            <Form.Select input={this.state.location} onChange={this.handleChangeLocation}
              fluid
              label='Lokalizacja'
              options={options}
              placeholder='Wybierz lokalizację'
            />
          </Form.Group>
          <Form.Group >
            <label>Kategoria:</label>
            <Form.Checkbox inline label='Gastronomia' name='gastronomia' checked={this.state.typeGastronomia} onChange={this.handleChangeCheckbox}></Form.Checkbox>
            <Form.Checkbox inline label='Natura' name='natura' checked={this.state.typeNatura} onChange={this.handleChangeCheckbox}></Form.Checkbox>
            <Form.Checkbox inline label='Sport' name='sport' checked={this.state.typeSport} onChange={this.handleChangeCheckbox}></Form.Checkbox>
            <Form.Checkbox inline label='Kultura' name='kultura' checked={this.state.typeKultura} onChange={this.handleChangeCheckbox}></Form.Checkbox>
          </Form.Group>
          <Form.Group inline>
            <label>Cena:</label>
            <Form.Radio
              label='Tanio ($)'
              value='tanio'
              checked={this.state.setStatepriceRange === 'tanio'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Średnio ($$)'
              value='średnio'
              checked={this.state.priceRange === 'średnio'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Drogo ($$$)'
              value='drogo'
              checked={this.state.priceRange === 'drogo'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea input={this.state.descriptionLong} onChange={this.handleChangeTextArea} label='Opis' placeholder='Opisz atrakcję' />
          <Form.Checkbox label='Zgadzam się z warunkami korzystania z usługi' />
          <Link to='/placeadded'>
            <Form.Button onClick={this.wrapedFunction} >Dodaj atrakcję</Form.Button>
          </Link>
        </Form>
      </main>
    )
  }
}

export default FormAddPlace