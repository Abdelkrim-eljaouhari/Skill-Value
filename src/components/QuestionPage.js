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
        <div className="questions shadow-lg p-3 mb-5 bg-white rounded">
          <header>
            <div className="lef-side-question">
              <span className="avatar question-span">1</span>
            </div>
            <div className="right-side-question"></div>
          </header>
          <section>
            <ul className="suggestions"></ul>
          </section>
        </div>
      </div>
    );
  }
}

export default QuestionPage;
