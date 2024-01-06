import lasagna from './lasagna.jpg';
import pasta from './pasta.jpg';

export function loadMenu() {
    const main = document.querySelector('.main');

    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = 'Menu';
    main.appendChild(title);

    const food1 = document.createElement('div');
    food1.className = 'lasagna';
    main.appendChild(food1);

    const subtitle1 = document.createElement('p');
    subtitle1.className = 'subtitle';
    subtitle1.textContent = 'Bitch Lasagna $123';
    food1.appendChild(subtitle1);

    const content1 = document.createElement('p');
    content1.className = 'content';
    content1.textContent = 'This recipe is a blend of flavors that will transport you to the heart of Italy. It starts with a base of meatballs and onions, followed by a layer of tomato sauce, lasagna noodles, and a sprinkle of cottage cheese. The final touch is a generous amount of mozzarella cheese that gives the soup a rich, creamy texture.';
    food1.appendChild(content1);

    const img1 = document.createElement('img');
    img1.id = 'lasagna';
    img1.src = lasagna;
    food1.appendChild(img1);

    const food2 = document.createElement('div');
    food2.className = 'pasta';
    main.appendChild(food2);

    const subtitle2 = document.createElement('p');
    subtitle2.className = 'subtitle';
    subtitle2.textContent = 'Skadoodle $321';
    food2.appendChild(subtitle2);

    const content2 = document.createElement('p');
    content2.className = 'content';
    content2.textContent = 'This pasta is made from a blend of flour and water or eggs, forming a dough that is then molded into a variety of shapes before being cooked. The unique texture of Skadoodle is a result of the use of durum wheat, which gives it a high gluten content and low moisture, making it perfectly suited to pasta production.';
    food2.appendChild(content2);

    const img2 = document.createElement('img');
    img2.id = 'pasta';
    img2.src = pasta;
    food2.appendChild(img2);
}