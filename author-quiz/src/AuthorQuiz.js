import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import AddAuthorForm from './components/AddAuthorForm';

class AuthorQuiz extends Component {
    render() {
        return (
            <div className='container-fluid'>
              <AddAuthorForm/>
            </div>
        );
    }
}

export default AuthorQuiz;