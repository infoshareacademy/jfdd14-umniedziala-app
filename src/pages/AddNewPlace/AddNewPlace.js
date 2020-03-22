import React, { Component } from 'react';
import './AddNewPlace.css';
import { Form, Popup, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import data from '../../data';

const options = [
  { key: 'Gda', text: 'Gdańsk', value: 'Gdańsk' },
  { key: 'Sop', text: 'Sopot', value: 'Sopot' },
  { key: 'Gdy', text: 'Gdynia', value: 'Gdynia' },
];

const type = [
  { key: 'Res', text: 'Restauracja', value: 'restauracja' },
  { key: 'Nat', text: 'Natura', value: 'natura' },
  { key: 'Spo', text: 'Sport', value: 'sport' },
  { key: 'Kul', text: 'Kultura', value: 'kultura' },
];
const atractionData = JSON.parse(localStorage.getItem("atractionData")) || data;;

class FormAddPlace extends Component {
  state = {
    name: "",
    id: atractionData.length + 1,
    favorite: false,
    priceRange: "",
    type: "",
    img: "",
    location: "",
    descriptionShort: "",
    descriptionLong: "",
    terms: false,
  };

  //handle Change Function
  handleChangeAtractionName = (e, { value }) => this.setState({ name: value });
  handleChangePhoto = (e, { value }) => this.setState({ img: value });
  handleChangeLocation = (e, { value }) => this.setState({ location: value });
  handleChangeType = (e, { value }) => this.setState({ type: value });
  handleChange = (e, { value }) => this.setState({ priceRange: value });
  handleChangeTextArea = (e, { value }) => this.setState({ descriptionLong: value });
  handleChangeTerms = (e, { checked }) => this.setState({ terms: checked });

  // add to data
  addToData = () => atractionData.push(this.state);
  jsonToLocalStorage = () => localStorage.setItem("atractionData", JSON.stringify(atractionData));

  // Wraped Function set on Add Atraction button
  wrapedFunction = () => {
    this.addToData();
    this.jsonToLocalStorage();
  };

  render() {
    const isTermTrue = this.state.terms;
    let buttonTrue;
    let buttonFalse;
    if (isTermTrue) {
      buttonTrue =
        <Link to='/placeadded'>
          <Form.Button onClick={this.wrapedFunction}>Dodaj atrakcję</Form.Button>
        </Link>
    } else {
      buttonFalse = <Popup content='Zaznacz wymagane zgody' trigger={<Button>Dodaj atrakcję</Button>} />;
    };
    return (
      <main className='addNewPlace__dashboard'>
        <h1 className='addNewPlace__dashboard--h1'>Dodaj swoją atrakcję</h1>
        <br></br>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input input={this.state.name} onChange={this.handleChangeAtractionName} label='Nazwa atrakcji' placeholder='Nazwa atrakcji' />
            <Form.Input input={this.state.img} onChange={this.handleChangePhoto} label='Zdjęcie' placeholder='Zdjęcie' />
            <Form.Select
              input={this.state.location} onChange={this.handleChangeLocation}
              label='Lokalizacja'
              options={options}
              placeholder='Wybierz lokalizację'
            />
            <Form.Select
              input={this.state.type}
              onChange={this.handleChangeType}
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
              label='Umiarkowanie ($$)'
              value='umiarkowanie'
              checked={this.state.priceRange === 'umiarkowanie'}
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
          {buttonTrue}
          {buttonFalse}
        </Form>
      </main>
    )
  }
}

export default FormAddPlace;
export { atractionData };