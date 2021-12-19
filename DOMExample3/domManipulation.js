const link = document.querySelector('a');

link.textContent = 'Mozilla developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');

//creating a element
const para = document.createElement('p');
para.textContent = 'we hope you enjoyed the ride';

//adding an element at the end of the section tag
sect.appendChild(para);

//adding text node
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkpara = document.querySelector('p');
linkpara.appendChild(text);

//moving the node
sect.appendChild(linkpara);

//removing the node
// sect.removeChild(linkpara);
// linkpara.remove();
linkpara.parentNode.removeChild(linkpara);

//styles manipulation
/*
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/

para.setAttribute('class','highlight');