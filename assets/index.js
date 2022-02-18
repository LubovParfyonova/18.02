'use strict';

//React
//ReactDOM

/* const reactElement = React.createElement('h1', {
    title: 'hello', 
    className: 'heading'},
     'Hello, React.js!'); */

/* 
const pElement = React.createElement('p', {title: 'p'}, 'TEXT text TEXT','TEXT text TEXT','TEXT text TEXT' );
const articleElement = React.createElement('article', {title: 'article'}, 'This is article.', pElement);

ReactDOM.render(articleElement, WHERE);
 */

/* class Heading extends React.Component {
    render() {
        console.log(this.props);
        const {titleForHeading, classForHeading, children} = this.props;
        return React.createElement('h1', {
            title: titleForHeading,
            className: classForHeading
        }, 
        ...children);//'Class heading'
    }
}
const reactElement = React.createElement(Heading, {
    titleForHeading: 'Now Im here',
    classForHeading: 'heading'},
    'str1');
const reactElement2 = React.createElement(Heading, {
    classForHeading: 'new-heading'
}, 'New heading')

const reactWrapperElement = React.createElement('div' , null, reactElement, reactElement2);

ReactDOM.render(reactWrapperElement, document.getElementById('root')); */

/* ReactDOM.render([reactElement, reactElement2], document.getElementById('root')); */ // bad practise

/* class Article extends React.Component{
    render() {
        return React.createElement('article', {
            title: 'Article'
        },
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis accusantium velit sint excepturi! Aspernatur animi officia deleniti voluptatem cumque, quibusdam ex optio hic, fugiat labore quaerat eum error! Asperiores, magnam. ');
    }
} */
/* const articleElement = React.createElement(Article);
ReactDOM.render([reactElement, articleElement], document.getElementById('root')) */


class Counter extends React.Component {
    constructor (props, ) { 
        super (props);
        this.state = {
            counter: 0
        }

    }
    increment = () => {
       this.setState({
           counter : this.state.counter + 1
       })
    }
    decrement = () => {
        if (this.state.counter > 0){
        this.setState({
            counter : this.state.counter - 1
        })
    }
    }
    render() {
        console.log(this);
        const {counter} = this.state;
        console.log(counter);
        return React.createElement(React.Fragment, null, 
        React.createElement('h1', null, counter),
        React.createElement('button', {
            onClick: this.increment
        }, '+'),
        React.createElement('button',  {
            onClick: this.decrement
        }, '-')
        )
    }
}
const reactCounterElement = React.createElement(Counter, {});
ReactDOM.render(reactCounterElement, document.getElementById('root'))