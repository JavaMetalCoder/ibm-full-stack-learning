
  const form = document.querySelector('form');
  const container = document.querySelector('.recom-container');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value || 'Anonymous';
    const msg  = document.getElementById('message').value.trim();
    if (!msg) return alert('Please enter a message.');

    // Crea il div
    const div = document.createElement('div');
    div.className = 'racom-item';
    div.innerHTML = `<p>“<strong>${name}:</strong> ${msg}”</p>`;
    container.append(div);

    form.reset();
    alert('Thank you for your recommendation!');  // Task 9
  });

