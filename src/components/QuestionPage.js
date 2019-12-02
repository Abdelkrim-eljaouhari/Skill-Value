import React, { Component } from 'react';
class QuestionPage extends Component {
  state = {
    questions: [
      {
        question: 'What is CSS ?',
        suggestions: ['something', 'something', 'something', 'something']
      }
    ]
  };
  render() {
    return (
      <div className="question-wrapper">
        <div className="questions-inner-wrapper shadow-lg  mb-5 bg-white rounded">
          <header>
            <div className="question">
              <span className="avatar question-span">1</span>
              <span>What is CSS ?</span>
            </div>
          </header>
          <hr className="line" />
          <section>
            <ul className="suggestions">
              <li>
                <input type="radio" name="answer" value="first" />
                <span>It is cascading style sheet</span>
              </li>
              <li>
                <input type="radio" name="answer" value="second" />
                <span>It is a machine system</span>
              </li>
              <li>
                <input type="radio" name="answer" value="third" />
                <span>It is a style </span>
              </li>
              <li>
                <input type="radio" name="answer" value="four" />
                <span>Nothing of the above</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default QuestionPage;
