// Define checklist items
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

// Render checklist items
window.onload = () => {
  const container = document.querySelector(".checklist-container");
  checklistItems.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <input type="checkbox" id="item${i}" />
      <div>
        <label for="item${i}">${item.label}</label>
        <div class="info">${item.info}</div>
        <textarea class="notes" id="note${i}" placeholder="Notes..."></textarea>
      </div>
    `;
    container.appendChild(card);

    // Checkbox toggle for card styling
    const checkbox = card.querySelector("input");
    checkbox.addEventListener("change", () => {
      card.classList.toggle("checked", checkbox.checked);
    });
  });
};

// Download report as image (PNG for now)
document.getElementById("downloadBtn").addEventListener("click", () => {
  const el = document.body;

  html2canvas(el, {
    scrollY: -window.scrollY,
    scale: 2
  }).then(canvas => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `HSE-Checklist-${new Date().toISOString().slice(0,10)}.png`;
    link.href = image;
    link.click();
  });
});

// Fake email share
document.getElementById("emailBtn").addEventListener("click", () => {
  const email = prompt("Enter your email to receive the report:");
  if (email) {
    alert(`Sharing report to ${email} (feature in development)`);
  }
});
