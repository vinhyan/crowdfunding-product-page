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
const borders = document.querySelectorAll('.border');
const submitPledgeForms = document.querySelectorAll('.pledge-form');
const forms = document.querySelectorAll('form');
const successModal = document.querySelector('.success');
const successCloseBtn = document.querySelector('.success .cyan-continue');
const amountInputs = document.querySelectorAll('.amount');
const backedAmount = document.querySelector('.backed-amount');
const noOfBackers = document.querySelector('.no-of-backers');
const noOfrewardsLeft = document.querySelectorAll('.reward-no-small');



const app = () => {


    // Toggle mobile navigation menu:

    burger.addEventListener('click', () => {
        nav.classList.toggle("mobile-nav");
        if (nav.classList.contains('mobile-nav')) {
            overlay.classList.add('overlay-active');
            body.classList.add('modal-on');

        } 
        
    });
    

    const open = () => {
        projectModal.classList.add('active');
        overlay.classList.add('overlay-active');
        body.classList.add('modal-on');

    }

    const close = () => {
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

            const selectedPledge = border.querySelector('.pledge-container-top-line');

            if (selectedPledge !== null && selectedPledge.classList.contains('active')) {
                selectedPledge.classList.remove('active')
            }
            
            
        })

        forms.forEach(form => {
            form.reset();
        })

        successModal.classList.remove('activate');

    };

   

    backProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        open();

    });

    closeModal.addEventListener('click', close);

    bookmark.addEventListener('click', (e) => {
        e.preventDefault();
        bookmark.classList.toggle('bookmarked');
        
    });

    rewardButtons.forEach(rewardButton => {
        
        rewardButton.addEventListener('click', (e) => {
            e.preventDefault();
            open();

        });

    });

    overlay.addEventListener('click', () => {
        nav.classList.remove('mobile-nav');
        close();

    });

    

    



    radioBtns.forEach((radioBtn) => {

        const selectedBorder = radioBtn.closest('.border');
        // const selectedPledge = selectedBorder.lastElementChild;
        const selectedPledge = selectedBorder.querySelector('.pledge-container-top-line');
        const currentBtnId = radioBtn.id;
        
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
                

                
            })
           
            
        })

      
    })

    let currentValue = 89914;

    amountInputs.forEach(input => {

        input.addEventListener('change', (e) => {
            const inputValue = Number(e.target.value);
            const newValue = currentValue + inputValue;
            currentValue = newValue;
            backedAmount.textContent = `$${currentValue.toLocaleString()}`;
            
        })
        
        
        
    })

    let currentBackers = 5007;

    submitPledgeForms.forEach(form => {
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            close();
            successModal.classList.add('activate');
            overlay.classList.add('overlay-active');
            body.classList.add('modal-on');
            currentBackers++;
            noOfBackers.textContent = currentBackers.toLocaleString();
           

   

            
        })
    })

    successCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        successModal.classList.remove('activate');
        overlay.classList.remove('overlay-active');
        body.classList.remove('modal-on');



    })










        

 
        
       
    
















}







app();