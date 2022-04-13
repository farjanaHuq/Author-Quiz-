import React from 'react';
import ReactDOM from 'react-dom';
import { AuthorQuiz } from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

const state = {
    turnData: {
      books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
      author: {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
      },
    },
    highlight: 'none'
  }

describe("Author Quiz", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Router><AuthorQuiz {...state} onAnswerSelected={()=>{}} /></Router>, div);
    });

    describe("When no answer has been selected", ()=>{
        let wrapper;
        beforeAll(()=> {
            wrapper = mount(<Router><AuthorQuiz {...state} onAnswerSelected={()=> {}}/></Router>);
        });

        it("should have no background color", () => {
            expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
        });
    });

    describe('When the wrong answer has been selected', () => {
        let wrapper;
    
        beforeAll(() => {
          wrapper = mount(
            <Router><AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}} /></Router>);
        });
    
        it('should have a red background color', () => {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
        });        
      });

      describe('When the correct answer has been selected', () => {
        let wrapper;
    
        beforeAll(() => {
          wrapper = mount(
            <Router><AuthorQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={()=>{}} /></Router>);
        });
    
        it('should have a green background color', () => {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('green');
        });        
      });

});
