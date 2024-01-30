console.log("iSpock");

 // Get all the navigation links

 const links = document.querySelectorAll('#divLNav a');

 // Add focus event listeners to each link

 links.forEach(link => {
     link.addEventListener('focus', () => {
         link.classList.add('focused');
         link.classList.remove('blurred');
     });
     
     // Add blur event listeners to each link
     link.addEventListener('blur', () => {
         link.classList.remove('focused');
         link.classList.add('blurred');
     });
 });