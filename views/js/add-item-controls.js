var AddBirthdayForm = React.createClass({
  render: function() {
    return (
      <form className="add-birthday-form">
        <input type="text" className="add-birthday-form__name"></input>
        <input type="date" className="add-birthday-form__date"></input>
      </form>
    );
  }
});

ReactDOM.render(
  <AddBirthdayForm />,
  document.getElementsByClassName('content')[0]
);
