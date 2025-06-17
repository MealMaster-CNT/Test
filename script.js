const pageOne = `
    <img src="https://avatars.githubusercontent.com/u/109224891?v=4"
      class="profile-picture" onclick='window.open("https://github.com/anmattroi")'
    ">
    <div>
    <h1 style="text-align:center;"> Hello! Welcome to my profile! </h1>
    <hr/>

    <p> My name is: Nguyễn Hải An </p>
    <p> How old I am: 17 </p>
    <p> My birthday: 10/11/2007 </p>
    <p> My primary job: Certified everything developer </p>
    <p> The school that I am currently studying at: 
      <a href="https://chuyennguyentrai.edu.vn/" target="blank">Nguyen Trai High School for The Gifted</a>
    </p>
    <hr/>
    </div>
    <div class="audio">
      <div>
      <script src="./js-audio-script.js"></script>
    </div> 
`;
const pageTwo = `
  </h1> Nothing here ¯\\_(ツ)_/¯ </h1>
`;
const pageThree = `

`;

const pages = [pageOne, pageTwo, pageThree];

const pageContent = document.querySelector(`.content`);

pageContent.innerHTML = pageOne;

document.querySelectorAll(`.button`).forEach((value) => {
  value.addEventListener(`click`, () => {
    if (value.getAttribute(`class`).includes(`button-active`)) return;
    document.querySelector(`.button-active`).setAttribute(`class`, `button`);
    value.setAttribute(`class`, `button button-active`);
    pageContent.innerHTML = pages[Number(value.dataset.index)];
  });
});
