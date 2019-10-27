/* eslint-disable eqeqeq */
// eslint-disable-next-line no-unused-vars
function myAlert(task, date) {
  const wrapper = document.createElement('div');

  const currentDate = new Date();
  const goalDate = new Date(date);
  // find the difference, in milliseconds, between current time and goal time
  const timeDifference = goalDate.getTime() - currentDate.getTime();
  // convert milliseconds to days
  const days = Math.floor(timeDifference / (1000 * 3600 * 24));

  // functionality to display 'day' for 1 day and 'days' for values > 1
  let dayOrDaysLabel = '';
  if (days == 1) {
    dayOrDaysLabel = 'day';
  } else {
    dayOrDaysLabel = 'days';
  }

  // using bootstrap naming convention, determine the color of the alert based on how
  // many days are remaining for the task to be completed
  let alertColor = '';
  if (days < 3) {
    alertColor = 'alert-danger'; // red alert box
  } else if (days < 7) {
    alertColor = 'alert-warning'; // yellow alert box
  } else {
    alertColor = 'alert-secondary'; // grey alert box
  }

  // create the HTML for the alert using form input data
  wrapper.innerHTML = `<div class="alert ${alertColor} alert-dismissible fade show" role="alert">
    ${task}</br>${days} ${dayOrDaysLabel}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
  // add the alert to the page
  document.getElementById('alerts').appendChild(wrapper);
}
