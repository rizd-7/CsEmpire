const getElement = (selector) => {
    const element = document.querySelector(selector)
   
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }

const MenuHamburger = getElement('.space-y-2');
const nav_links = getElement('.nav_links');

MenuHamburger.addEventListener('click',()=>{
  
  if(nav_links.style.height=="0px"){
    nav_links.style.height="fit-content"
  }else{
    nav_links.style.height="0px"
  }
  })

const answer = document.querySelectorAll('.answer');
const showAnswer = document.querySelectorAll('.showAnswer');

showAnswer.forEach((element, index) => {
  element.addEventListener('click', () => {
    // Assuming "height" is a variable or a property of the elements
    // and "answer" is an array of elements
    const height = answer[index].style.height || "0";

    if (height === "0px") {
      answer[index].style.height = 'fit-content';
    } else {
      answer[index].style.height = '0px';
    }
  });
});


  

 