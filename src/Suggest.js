import React, { Component } from 'react';
import Quill from 'quill';
import { Link } from 'react-router-dom';
import request from 'superagent';

import 'quill/dist/quill.snow.css';
import './Suggest.css';

class Suggest extends Component {
  state = {
    displayForm: true,
    category: 'Écologie',
    name: '',
    excerpt: '',
    localisation: '',
    twitter: '',
  };

  componentDidMount() {
    this.quill = new Quill('#description', {
      theme: 'snow'
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { category, name, excerpt, location, twitter } = this.state;
    request.post('https://us-central1-greve-generale.cloudfunctions.net/suggest')
    .send({
      category,
      name,
      excerpt,
      description: this.quill.getText().trim().length !== 0 ? this.quill.root.innerHTML : '',
      location,
      twitter
    })
    .end((err, res) => {
      if (!err) {
        this.setState({
          displayForm: false,
        });
      } else {
        console.log(err);
      }
    });
  }

  render() {
    if (this.state.displayForm) {
      return (
        <div className="Suggest">
          <h1>Proposer une lutte</h1>
          <form onSubmit={this.handleSubmit}>
              <fieldset>
                  <label htmlFor="category">Catégorie</label>
                  <select id="category" name="category" onChange={this.handleInputChange} value={this.state.category}>
                      <option value="Écologie">Écologie</option>
                      <option value="Éducation">Éducation</option>
                      <option value="Santé">Santé</option>
                      <option value="Justice">Justice</option>
                      <option value="Public">Service Public</option>
                      <option value="Transport">Transport</option>
                      <option value="Comité5mai">Comité #5mai</option>
                      <option value="Autres">Autres</option>
                  </select>
              </fieldset>
              <fieldset>
                  <label htmlFor="name">Nom de l'organisme</label>
                  <input id="name" name="name" onChange={this.handleInputChange} type="text" value={this.state.name} />
              </fieldset>
              <fieldset>
                  <label htmlFor="excerpt">Courte phrase de résumé (apparaît dans la liste)</label>
                  <input id="excerpt" name="excerpt" onChange={this.handleInputChange} type="text" value={this.state.excerpt} />
              </fieldset>
              <fieldset>
                  <label htmlFor="description">Description</label>
                  <div id="description" />
              </fieldset>
              <fieldset>
                  <label htmlFor="location">Localisation</label>
                  <input id="location" name="location" onChange={this.handleInputChange} type="text" value={this.state.location} />
              </fieldset>
              <fieldset>
                  <label htmlFor="twitter">Compte Twitter</label>
                  <input id="twitter" name="twitter" onChange={this.handleInputChange} type="text" value={this.state.twitter} />
              </fieldset>
              <button type="submit">Proposer</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="Suggest thanks">
          <h1>Proposer une lutte</h1>
          <p>
            Merci pour votre participation ! Nous la validerons dés que possible.
          </p>
          <Link to="/">Retourner à la carte</Link>
        </div>
      );
    }
  }
}

export default Suggest;