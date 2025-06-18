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

const checklistDiv = document.getElementById('checklist');

checklistItems.forEach((item, index) => {
  const container = document.createElement('div');
  container.className = 'check-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `check${index}`;

  const info = document.createElement('div');
  info.className = 'check-info';
  info.innerHTML = `
    <label for="check${index}"><strong>${item.label}</strong></label>
    <p>${item.info}</p>
    <textarea rows="2" placeholder="Notes..."></textarea>
  `;

  container.appendChild(checkbox);
  container.appendChild(info);
  checklistDiv.appendChild(container);
});

function downloadPDF() {
  alert("Download PDF feature coming soon...");
}

function shareViaEmail() {
  const email = prompt("Enter email address to send report to:");
  if (email) {
    alert("Sharing report to " + email + " (feature in development)");
  }
}
