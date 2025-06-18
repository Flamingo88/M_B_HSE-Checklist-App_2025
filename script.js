
function toggleCheck(el) {
  el.classList.toggle("checked");
}
function downloadChecklist() {
  const items = document.querySelectorAll('.item');
  const notes = document.getElementById('notes').value;
  let output = 'HSE Checklist:\n\n';
  items.forEach((item, index) => {
    const text = item.querySelector('p').innerText;
    const status = item.classList.contains('checked') ? '[✔]' : '[ ]';
    output += `${status} ${text}\n`;
  });
  output += `\nNotes:\n${notes}\n`;
  const blob = new Blob([output], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'HSE_Checklist.txt';
  link.click();
}
function shareChecklist() {
  const email = "mailto:?subject=HSE Checklist&body=";
  const items = document.querySelectorAll('.item');
  const notes = document.getElementById('notes').value;
  let output = 'HSE Checklist:\n\n';
  items.forEach((item) => {
    const text = item.querySelector('p').innerText;
    const status = item.classList.contains('checked') ? '[✔]' : '[ ]';
    output += `${status} ${text}\n`;
  });
  output += `\nNotes:\n${notes}\n`;
  window.location.href = email + encodeURIComponent(output);
}
