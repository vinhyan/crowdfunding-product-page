const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const backProjectBtn = document.querySelector('#back-project-btn');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close');
const bookmark = document.querySelector('.bookmark-btn');
const rewardButtons = document.querySelectorAll('.cyan-select');
const overlay = document.querySelector('.overlay');
const radioBtns = document.querySelectorAll('.default-radio');
// const radioBtns = document.querySelectorAll('input[type=radio]');
const borders = document.querySelectorAll('.border');




const app = () => {


    // Toggle mobile navigation menu:

    burger.addEventListener('click', () => {
        nav.classList.toggle("mobile-nav");
        
    });

    backProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectModal.classList.add('active');
        overlay.classList.add('overlay-active');
        body.classList.add('modal-on');


    });

    closeModal.addEventListener('click', () => {
        projectModal.classList.remove('active');
        overlay.classList.remove('overlay-active');
        body.classList.remove('modal-on');
        radioBtns.forEach(radioBtn => {
            radioBtn.checked = null;
        })

        borders.forEach(border => {
            if (border.classList.contains('highlight')) {
                border.classList.remove('highlight')
            }
        })

    });

    bookmark.addEventListener('click', (e) => {
        e.preventDefault();
        bookmark.classList.toggle('bookmarked');
        
    });

    rewardButtons.forEach(rewardButton => {
        
        const currentBtnId = rewardButton.id;
        rewardButton.addEventListener('click', (e) => {
            e.preventDefault();
            projectModal.classList.add('active');
            overlay.classList.add('overlay-active');
            body.classList.add('modal-on');

        });

    });

    overlay.addEventListener('click', () => {
        projectModal.classList.remove('active');
        overlay.classList.remove('overlay-active');
        body.classList.remove('modal-on');
        radioBtns.forEach(radioBtn => {
            radioBtn.checked = null;
        })
        borders.forEach(border => {
            if (border.classList.contains('highlight')) {
                border.classList.remove('highlight')
            }
        })


    });

    



    radioBtns.forEach((radioBtn) => {

        const selectedBorder = radioBtn.closest('.border');
        // const selectedPledge = selectedBorder.lastElementChild;
        const selectedPledge = selectedBorder.querySelector('.pledge-container-top-line');
        const currentBtnId = radioBtn.id;

        console.log(selectedBorder);
        console.log(selectedPledge);

        
        radioBtn.addEventListener('click', () => {

            selectedBorder.classList.add('highlight');
            if (selectedPledge !== null) {
                selectedPledge.classList.add('active');
            }
            

            radioBtns.forEach((btn) => { 
                //skip if this is the current selected radio button
                if (btn.id == currentBtnId) return; 
                //remove the border highlight of the radio buttons that are not being selected
                const notSelectedBorder = btn.closest('.border');
                notSelectedBorder.classList.remove('highlight');

                //remove pledge input when radio buttons are not being selected
                const notSelectedPledge = notSelectedBorder.querySelector('.pledge-container-top-line');
                if (notSelectedPledge !== null) {
                    notSelectedPledge.classList.remove('active');

                }
                

                // if (btn.id !== currentBtnId) {
                //     console.log(btn.id);
                //     console.log(btn);
                //     const prevBorder = btn.closest('.border');
                //     prevBorder.classList.remove('highlight');

                // }
                
                // btn.checked = false;
            })
           
            
        })

   

        
        
      
    })








        

 
        
       
    
















}







app();