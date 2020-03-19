import React, { Component } from 'react';
import './AddNewPlace.css';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import data from '../../data'

const options = [
  { key: 'Gda', text: 'Gdańsk', value: 'gdańsk' },
  { key: 'Sop', text: 'Sopot', value: 'sopot' },
  { key: 'Gdy', text: 'Gdynia', value: 'gdynia' },
]
const atractionData = data;
console.log(atractionData);
console.log(atractionData.length.value);

class FormAddPlace extends Component {

  state = {
    name: "",
    id: "",
    favorite: false,
    priceRange: "",
    typeRestaurant: false,
    typeNatura: false,
    typeSport: false,
    typeKultura: false,
    img: "",
    location: "",
    descriptionShort: "",
    descriptionLong: "",
    terms: false,
  }
  //handle Change Function
  handleChangeAtractionName = (e, { value }) => this.setState({ name: value });
  handleChangePhoto = (e, { value }) => this.setState({ img: value });
  handleChangeLocation = (e, { value }) => this.setState({ location: value });
  handleChangeCheckboxGastro = (e, { checked }) => { this.setState({ typeRestaurant: checked }) };
  handleChangeCheckboxNatura = (e, { checked }) => { this.setState({ typeNatura: checked }) };
  handleChangeCheckboxSport = (e, { checked }) => { this.setState({ typeSport: checked }) };
  handleChangeCheckboxKultura = (e, { checked }) => { this.setState({ typeKultura: checked }) };
  handleChange = (e, { value }) => this.setState({ priceRange: value });
  handleChangeTextArea = (e, { value }) => this.setState({ descriptionLong: value });
  handleChangeTerms = (e, { checked }) => this.setState({ terms: checked });
  
  // add To Local Storage Function
  addToLocalStorageaAtractionName = () => (localStorage.setItem('AtractionName', this.state.name));
  addToLocalStoragePhoto = () => (localStorage.setItem('Photo', this.state.img));
  addToLocalStorageLocation = () => (localStorage.setItem('Location', this.state.location));
  addToLocalStorageCheckboxGastro = () => (localStorage.setItem('typeRestaurant', this.state.typeRestaurant));
  addToLocalStorageCheckboxNatura = () => (localStorage.setItem('typeNatura', this.state.typeNatura));
  addToLocalStorageCheckboxSport = () => (localStorage.setItem('typeSport', this.state.typeSport));
  addToLocalStorageCheckboxKultura = () => (localStorage.setItem('typeKultura', this.state.typeKultura));
  addToLocalStorage = () => (localStorage.setItem('Price', this.state.priceRange));
  addToLocalStorageTextAreaValue = () => (localStorage.setItem('Description', this.state.descriptionLong));
  addToLocalStorageTerms = () => (localStorage.setItem('Terms', this.state.terms));
  //addToLocalStorageIncrementId = () => (localStorage.setItem('id', this.incrementId));
  //increment Id
  //incrementId = () => {this.setState({ id: this.state.id + 1 })
    
//};

 
  //check term value
  checkTermValue = () => {
    if (this.state.terms === true) {
      this.wrapedFunction()
      return //fajnie jak by tu dodac redirect ponownie do formatki z dodawaniem
    } else {
      alert('zaznacz wymagane zgody')
      return
    }
  };
  // add to data
  addToData = () => {
    atractionData.push(this.state)
    return console.log(atractionData)
  };
  // Wraped Function set on Add Atraction button
  wrapedFunction = () => {
    this.addToLocalStorageaAtractionName();
    this.addToLocalStoragePhoto();
    this.addToLocalStorageLocation();
    this.addToLocalStorageCheckboxGastro();
    this.addToLocalStorageCheckboxNatura();
    this.addToLocalStorageCheckboxSport();
    this.addToLocalStorageCheckboxKultura();
    this.addToLocalStorage();
    this.addToLocalStorageTextAreaValue();
    this.addToLocalStorageTerms();
    this.addToLocalStorageIncrementId();
    this.incrementId();
    this.addToData();
  };


  render() {
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
            <Form.Checkbox inline label='Restauracja' name='typeRestaurant' checked={this.state.typeRestaurant} onChange={this.handleChangeCheckboxGastro}></Form.Checkbox>
            <Form.Checkbox inline label='Natura' name='typeNatura' checked={this.state.typeNatura} onChange={this.handleChangeCheckboxNatura}></Form.Checkbox>
            <Form.Checkbox inline label='Sport' name='typeSport' checked={this.state.typeSport} onChange={this.handleChangeCheckboxSport}></Form.Checkbox>
            <Form.Checkbox inline label='Kultura' name='typeKultura' checked={this.state.typeKultura} onChange={this.handleChangeCheckboxKultura}></Form.Checkbox>
          </Form.Group>
          <Form.Group inline>
            <label>Cena:</label>
            <Form.Radio
              label='Darmowe'
              value='darmowe'
              checked={this.state.priceRange === 'darmowe'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Tanio ($)'
              value='tanio'
              checked={this.state.priceRange === 'tanio'}
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
          <Form.Checkbox label='Zgadzam się z warunkami korzystania z usługi' name='terms' checked={this.state.terms} onChange={this.handleChangeTerms} />
          <Link to='/placeadded'>
            <Form.Button onClick={this.checkTermValue}>Dodaj atrakcję</Form.Button>
          </Link>
        </Form>
      </main>
    )
  }
}

export default FormAddPlace