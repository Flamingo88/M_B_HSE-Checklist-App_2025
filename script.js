document.addEventListener("DOMContentLoaded", () => {
  const checklistItems = [
    {
      label: "Are escape routes clear",
      info: "Ensure all emergency exits are free of obstructions and clearly marked."
    },
    {
      label: "Good lighting",
      info: "Check that workspaces and walkways are well-lit with functioning lights."
    },
    {
      label: "Fire extinguishers inspected",
      info: "Check the stamp or tag for the last service date. Take a photo if needed."
    },
    {
      label: "Fire hydrant accessible and not expired",
      info: "Check hydrant accessibility and validity tag. BAS: 4, Metronor: 5."
    },
    {
      label: "Trip hazards or cable hazards",
      info: "Look for loose cables, power cords, uneven floors, or obstacles."
    },
    {
      label: "Chemical safety (use & smell)",
      info: "Ensure proper labeling, PPE use, ventilation, and no unusual odors."
    },
    {
      label: "Hygiene equipment available",
      info: "Check sanitizers, soap, and wipes are present and not empty."
    },
    {
      label: "Office emergency exit map is correct",
      info: "Locate and verify map accuracy with the current layout."
    },
    {
      label: "Protective gear is properly located",
      info: "Inspect PPE stations for completeness and accessibility."
    },
    {
      label: "T5 truck routines followed",
      info: "Ensure forklift is parked, charged, and logbook updated."
    },
    {
      label: "Chemical book updated to latest version",
      info: "Verify the latest chemical registry entry is logged."
    },
    {
      label: "First aid is stocked and not expired",
      info: "Open kit and confirm all items are valid and stocked."
    }
  ];

  const container = document.getElementById("checklist-container");

  checklistItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "check-item";
    div.innerHTML = `
      <input type="checkbox" id="check${index}" />
      <div>
        <label for="check${index}">${item.label}</label>
        <div class="info">${item.info}</div>
      </div>
    `;
    container.appendChild(div);
  });

  document.getElementById("downloadBtn").addEventListener("click", () => {
    const checklistResults = checklistItems.map((item, index) => {
      const checked = document.getElementById(`check${index}`).checked;
      return `${item.label}: ${checked ? "✔ Done" : "✖ Not done"}`;
    }).join("\n");

    const notes = document.getElementById("notes").value;
    const blob = new Blob([
      `HSE Mobile Checklist Report\n\n${checklistResults}\n\nAdditional Notes:\n${notes}`
    ], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hse_checklist_report.txt";
    link.click();
  });

  document.getElementById("emailBtn").addEventListener("click", () => {
    alert("Sharing report to oines88@gmail.com (feature in development)");
  });
});
