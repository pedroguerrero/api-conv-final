const decimalInput = document.getElementById('decimalInput');
const binaryResult = document.getElementById('binaryResult');
const btnConvertirDecimal = document.getElementById('btnConvertirDecimal');

btnConvertirDecimal.addEventListener('click', async () => {
  const decimalValue = parseInt(decimalInput.value);
  const response = await fetch('/tobinary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { decimal: decimalValue } }),
  });
  const data = await response.json();
  const binaryValue = data.data.value;
  binaryResult.value = binaryValue;
});

const binaryInput = document.getElementById('binaryInput');
const btnConvertirBinary = document.getElementById('btnConvertirBinary');
const decimalResult = document.getElementById('decimalResult');

btnConvertirBinary.addEventListener('click', async () => {
  const binaryValue = parseInt(binaryInput.value);
  const response = await fetch('/todecimal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { binary: binaryValue } }),
  });
  const data = await response.json();

  decimalResult.value = data.data.value;
});
