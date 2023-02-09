document.getElementById("result").innerHTML = "";
const form = document.getElementById('form');
const result = document.getElementById('result');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('peso');
  const height = getInputNumberValue('altura');
  const activityLevel = getSelectedValue('activity_level');
  const tmb = calculateTMB(gender, weight, height, age);
  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  result.innerHTML = `
    <h2>Aqui está o resultado:</h2>
    <div class="result-content">
      <ul>
        <li>Seu metabolismo basal é de <strong>${tmb} calorias</strong>.</li>
        <li>Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.</li>
        <li>Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.</li>
        <li>Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.</li>
      </ul>
    </div>
  `;
  alert(`
    Seu metabolismo basal é de ${tmb} calorias.
    Para manter o seu peso você precisa consumir em média ${maintenance} calorias.
    Para perder peso você precisa consumir em média ${loseWeight} calorias.
    Para ganhar peso você precisa consumir em média ${gainWeight} calorias.
  `);
}

function calculateTMB(gender, weight, height, age) {
  return Math.round(
    gender === 'female'
    ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 *age))
    : (66 + (13.7 * weight) + (5 * height) - (6.8 *age))
  );
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
