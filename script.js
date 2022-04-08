const help_button = document.getElementById('btn');
const text_input = document.getElementById('inp');

help_button.onclick = () => {
  if (text_input.value == '') {
    alert('empty string');
  }

  console.log(text_input.value);
};
