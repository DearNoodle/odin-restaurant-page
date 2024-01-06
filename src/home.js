
export function loadHome() {
    const main = document.querySelector('.main');

    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = 'Yumyum Bakery';
    main.appendChild(title);

    const intro = document.createElement('p');
    intro.className = 'intro'
    intro.textContent = `Yumyum Bakery is the best bakery in the world. If I had to take a guess, I’d say she’s about 35 years old. She didn't drink, but she didn't want people to realize that, so she ordered a ginger ale at the bar. If you don't get me a cheetah for Christmas, I will tell everyone you are the worst parents ever.`
    main.appendChild(intro);

    const workHour = document.createElement('div');
    workHour.className = 'work-hour';
    main.appendChild(workHour);

    const subtitle1 = document.createElement('p');
    subtitle1.className = 'subtitle';
    subtitle1.textContent = 'Working Hours';
    workHour.appendChild(subtitle1);

    const content1 = document.createElement('p');
    content1.className = 'content';
    content1.textContent = '7 / 24 all the time! We employ workers to serve you till their death for 100% efficiency!';
    workHour.appendChild(content1);

    const location = document.createElement('div');
    location.className = 'location';
    main.appendChild(location);

    const subtitle2 = document.createElement('p');
    subtitle2.className = 'subtitle';
    subtitle2.textContent = 'Location';
    location.appendChild(subtitle2);

    const content2 = document.createElement('p');
    content2.className = 'content';
    content2.textContent = 'Mars';
    location.appendChild(content2);
}




