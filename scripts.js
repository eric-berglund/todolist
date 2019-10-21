// eslint-disable-next-line no-unused-vars
function myAlert(task, days) {
  const wrapper = document.createElement('div');

  // using bootstrap naming convention, determine the color of the alert based on how
  // many days the taks needs to be completed by
  let alertColor = '';
  if (days < 3) {
    alertColor = 'alert-danger';
  } else if (days < 7) {
    alertColor = 'alert-warning';
  } else {
    alertColor = 'alert-secondary';
  }
  wrapper.innerHTML = `<div class="alert ${alertColor} alert-dismissible fade show" role="alert">
    ${task}</br>${days}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
  document.getElementById('alerts').appendChild(wrapper);
}
