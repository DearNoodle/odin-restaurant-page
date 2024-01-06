
export function loadContact() {
    const main = document.querySelector('.main');

    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = 'Contact Number';
    main.appendChild(title);

    const phoneNumber = document.createElement('p');
    phoneNumber.id = 'phone-number';
    phoneNumber.textContent = '1233211234567';
    main.appendChild(phoneNumber);
}