const btnMob = document.querySelector('.btn2'),
       btnTwo = document.querySelector('.experience'),
       btnOne = document.querySelector('.about'),
       btnTre = document.querySelector('.contact');

btnMob.addEventListener('click', () => {
    btnTre.style.display = 'none',
    btnOne.style.display = 'none',
    btnTwo.style.display = 'flex'; 
})
const btnMobi = document.querySelector('.btn1'),
       btnTwoi = document.querySelector('.experience'),
       btnOnei = document.querySelector('.about'),
       btnTrei = document.querySelector('.contact');

btnMobi.addEventListener('click', () => {
    btnOnei.style.display = 'flex',
    btnTwoi.style.display = 'none'; 
    btnTrei.style.display = 'none'; 
})
const btnMobj = document.querySelector('.btn3'),
       btnTwoj = document.querySelector('.about'),
       btnTrej = document.querySelector('.contact'),
       btnOnej = document.querySelector('.experience');

btnMobj.addEventListener('click', () => {
    btnTwoj.style.display = 'none',
    btnOnej.style.display = 'none',
    btnTrej.style.display = 'flex'; 
})

