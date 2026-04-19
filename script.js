function generatePrompt() {
  const task = document.getElementById('task').value;
  const goal = document.getElementById('goal').value;
  const domain = document.getElementById('domain').value;

  const prompt = `Act as a ${domain} expert.

Goal: ${goal}

Task: ${task}

Provide:
- Step-by-step solution
- Practical examples
- Actionable insights
`;

  document.getElementById('output').innerText = prompt;
}