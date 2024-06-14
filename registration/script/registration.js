function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" value="" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}">
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

function successTemplate(info) {
  return `Thank you ${info.adultName} for registering. You have registered ${info.numParticipants} participant(s) and owe $${info.totalFees.toFixed(2)} in fees.`;
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  const total = feeElements.reduce((sum, feeInput) => {
    const fee = parseFloat(feeInput.value) || 0;
    return sum + fee;
  }, 0);
  return total;
}

function submitForm(event) {
  event.preventDefault();

  const totalFee = totalFees();
  const adultName = document.getElementById('adult_name').value;
  const numParticipants = document.querySelectorAll('input[name^="fee"]').length;

  const successMessage = successTemplate({
    adultName,
    numParticipants,
    totalFees: totalFee,
  });

  const formContainer = document.querySelector('.testbox');
  const summaryElement = document.getElementById('summary');

  formContainer.style.display = 'none';
  summaryElement.style.display = 'block';

  summaryElement.innerHTML = `<p>${successMessage}</p>`;
}

let participantCount = 1;

const addButton = document.getElementById('add');
const participantsFieldset = document.querySelector('.participants');
const form = document.querySelector('form');

addButton.addEventListener('click', () => {
  participantCount++;

  const participantTemplate = participantTemplate(participantCount);

  const newParticipantHTML = participantTemplate.replace(/\b(\w+)(\d+)\b/g, (match, p1, p2) => {
    return `${p1}${participantCount}`;
  });

  addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

form.addEventListener('submit', submitForm);