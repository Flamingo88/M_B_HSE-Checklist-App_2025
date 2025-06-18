const checklistItems = [
  { label: "Are escape routes clear", info: "Ensure all emergency exits are free of obstructions and clearly marked." },
  { label: "Good lighting", info: "Check that workspaces and walkways are well-lit with functioning lights." },
  { label: "Fire extinguishers inspected", info: "Check the stamp or tag for the last service date. Take a photo if needed." },
  { label: "Fire hydrant accessible and not expired", info: "Check hydrant accessibility and validity tag. BAS: 4, Metronor: 5." },
  { label: "Trip hazards or cable hazards", info: "Look for loose cables, power cords, uneven floors, or obstacles." },
  { label: "Chemical safety (use & smell)", info: "Ensure proper labeling, PPE use, ventilation, and no unusual odors." },
  { label: "Hygiene equipment available", info: "Check sanitizers, soap, and wipes are present and not empty." },
  { label: "Office emergency exit map is correct", info: "Locate and verify map accuracy with the current layout." },
  { label: "Protective gear is properly located", info: "Inspect PPE stations for completeness and accessibility." },
  { label: "T5 truck routines followed", info: "Ensure forklift is parked, charged, and logbook updated." },
  { label: "Chemical book updated to latest version", info: "Verify the latest chemical registry entry is logged." },
  { label: "First aid is stocked and not expired", info: "Open kit and confirm all items are valid and stocked." }
];

const container = document.getElementById("checklistContainer");
checklistItems.forEach((item, i) => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = \`
    <input type="checkbox" id="item\${i}" onchange="toggleCheck(this)">
    <label for="item\${i}"><strong>\${item.label}:</strong> \${item.info}</label>
  \`;
  container.appendChild(div);
});

function toggleCheck(box) {
  if (box.checked) {
    box.parentElement.classList.add("checked");
  } else {
    box.parentElement.classList.remove("checked");
  }
}

function downloadChecklist() {
  html2canvas(document.querySelector(".container")).then(canvas => {
    const link = document.createElement("a");
    link.download = "HSE_Checklist_Report.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

function shareChecklist() {
  const subject = encodeURIComponent("HSE Checklist Report");
  const notes = encodeURIComponent(document.getElementById("notes").value);
  const body = encodeURIComponent("Attached is my HSE checklist.\n\nNotes:\n" + notes);
  window.location.href = \`mailto:?subject=\${subject}&body=\${body}\`;
}
