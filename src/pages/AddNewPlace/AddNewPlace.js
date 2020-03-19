import React, { Component } from 'react';
import './AddNewPlace.css';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import data from '../../data'

const options = [
  { key: 'Gda', text: 'Gdańsk', value: 'Gdańsk' },
  { key: 'Sop', text: 'Sopot', value: 'Sopot' },
  { key: 'Gdy', text: 'Gdynia', value: 'Gdynia' },
]

const type = [
  { key: 'Res', text: 'Restauracja', value: 'Restauracja' },
  { key: 'Nat', text: 'Natura', value: 'Natura' },
  { key: 'Spo', text: 'Sport', value: 'Sport' },
  { key: 'Kul', text: 'Kultura', value: 'Kultura' },
]
const atractionData = data;
console.log(atractionData);
console.log(atractionData.length);

class FormAddPlace extends Component {
  state = {
    name: "",
    id: "",
    favorite: false,
    priceRange: "",
    type: "",
    img: "",
    location: "",
    descriptionShort: "",
    descriptionLong: "",
    terms: false,
  }

  // increment Id
  incrementId = () => {this.setState({ id: this.state.id + 1 })};

  //handle Change Function
  handleChangeAtractionName = (e, { value }) => this.setState({ name: value });
  handleChangePhoto = (e, { value }) => this.setState({ img: value });
  handleChangeLocation = (e, { value }) => this.setState({ location: value }); // location
  handleChangeType = (e, { value }) => this.setState({ type: value }); // type
  handleChange = (e, { value }) => this.setState({ priceRange: value });
  handleChangeTextArea = (e, { value }) => this.setState({ descriptionLong: value });
  handleChangeTerms = (e, { checked }) => this.setState({ terms: checked });

  // add To Local Storage Function
  addToLocalStorageaAtractionName = () => (localStorage.setItem('AtractionName', this.state.name));
  addToLocalStoragePhoto = () => (localStorage.setItem('Photo', this.state.img));
  addToLocalStorageLocation = () => (localStorage.setItem('Location', this.state.location));
  addToLocalStorageType = () => (localStorage.setItem('type', this.state.type));
  addToLocalStorage = () => (localStorage.setItem('Price', this.state.priceRange));
  addToLocalStorageTextAreaValue = () => (localStorage.setItem('Description', this.state.descriptionLong));
  addToLocalStorageTerms = () => (localStorage.setItem('Terms', this.state.terms));
  addToLocalStorageIncrementId = () => (localStorage.setItem('id', this.state.id));
    

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
    atractionData.push(this.state);
    return (console.log(atractionData));
  };
  // Wraped Function set on Add Atraction button
  wrapedFunction = () => {
    this.addToLocalStorageaAtractionName();
    this.addToLocalStoragePhoto();
    this.addToLocalStorageLocation();
    this.addToLocalStorage();
    this.addToLocalStorageTextAreaValue();
    this.addToLocalStorageTerms();
    this.incrementId();
    this.addToLocalStorageIncrementId();
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
          <Form.Group>
            <Form.Select input={this.state.type} onChange={this.handleChangeLocation}
              label='Kategoria'
              options={type}
              placeholder='Wybierz kategorię'
            />
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