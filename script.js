const pageOne = `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCk6dsWUEEQ0ISe-9ZIGIdD48ncvYOUY5ixw&s"/>
`;
const pageTwo = `
`;
const pageThree = `
`;
const pageFour = `
`;

const pages = [pageOne, pageTwo, pageThree, pageFour];

const pageContent = document.querySelector(`.content`);

pageContent.innerHTML = pageOne;

document.querySelectorAll(`.button`).forEach((value) => {
  value.addEventListener(`click`, () => {
    if (value.getAttribute(`class`).includes(`active`)) return;
    document.querySelector(`.active`).setAttribute(`class`, `button`);
    value.setAttribute(`class`, `button active`);
    pageContent.innerHTML = pages[Number(value.dataset.index)];
  });
});
