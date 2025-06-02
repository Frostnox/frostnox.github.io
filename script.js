
function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  const tabs = document.querySelectorAll('.tabs li');

  sections.forEach(section => {
    section.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById('tab-' + id).classList.add('active');
}
