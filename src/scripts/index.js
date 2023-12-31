const links = document.querySelectorAll('.navigation a');
const uls = document.querySelectorAll('ul.random');

for (var i = 0; i < links.length; i++) {
  if (links[i].href == document.URL) {
    links[i].className = 'active'
  }
};

uls.forEach(ul => {
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0])
  };
});
