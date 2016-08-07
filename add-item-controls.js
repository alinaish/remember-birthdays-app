var AddBirthdayForm = React.createClass({
  render: function() {
    return (
      <form class="add-birthday-form">
        <input type="text" class="add-birthday-form__name"></input>
        <input type="date" class="add-birthday-form__date"></input>
      </form>
    );
  }
});

ReactDom.render(
  <AddBirthdayForm />,
  document.getElementByClassName('content');
);
