function generatePrompt() {

  const task = document.getElementById("task").value;
  const goal = document.getElementById("goal").value;
  const domain = document.getElementById("domain").value;
  const level = document.getElementById("level").value;
  const tools = document.getElementById("tools").value;
  const constraints = document.getElementById("constraints").value;
  const output = document.getElementById("output").value;
  const advanced = document.getElementById("advanced").checked;

  let modeInstruction = "";

  if(domain.toLowerCase().includes("data")) {
    modeInstruction = "Focus on KPIs, EDA, and business insights.";
  } else if(domain.toLowerCase().includes("code")) {
    modeInstruction = "Write clean, modular, production-level code.";
  } else if(domain.toLowerCase().includes("career")) {
    modeInstruction = "Focus on job strategy and execution.";
  }

  let prompt = `Act as a highly experienced ${domain} expert.

My goal is to ${goal}.

Task:
${task}

Context:
- Level: ${level}
- Tools: ${tools}
- Constraints: ${constraints}

Approach:
1. Understand the goal
2. Break down the problem
3. Provide structured solution
4. Suggest improvements

Additional Instructions:
${modeInstruction}

Output:
- Explanation
- Step-by-step solution
- Examples
- Actionable insights

Requirements:
- Avoid generic answers
- Be practical and professional
- Focus on real-world application

Expected Output Type: ${output}`;

  if(advanced){
    prompt += `

Advanced Instructions:
- Think step-by-step
- Provide alternatives
- Identify blind spots
- Optimize for real-world use`;
  }

  document.getElementById("result").innerText = prompt;
}

function copyPrompt() {
  const text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}