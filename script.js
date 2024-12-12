const contacts = [
    { name: "John Doe", phone: "+123456789" },
    { name: "Jane Smith", phone: "+987654321" },
    { name: "Emily Johnson", phone: "+112233445" },
    { name: "Michael Brown", phone: "+998877665" }
];
function searchContacts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(query));
    const contactListDiv = document.getElementById('contact-list');
    const noResultsDiv = document.getElementById('no-results');
    contactListDiv.innerHTML = '';
    if (filteredContacts.length > 0) {
        filteredContacts.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.classList.add('contact-item');
            contactItem.innerHTML = `<span>Name:</span> ${contact.name} | <span>Phone:</span> ${contact.phone}`;
            contactListDiv.appendChild(contactItem);
        });
        noResultsDiv.style.display = 'none'; 
    } else {
        noResultsDiv.style.display = 'block'; 
    }
}