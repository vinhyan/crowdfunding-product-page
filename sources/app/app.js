const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const backProjectBtn = document.querySelector('#back-project-btn');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close');
const rewardButtons = document.querySelectorAll('.cyan-select');
const overlay = document.querySelector('.overlay');
const radioBtns = document.querySelectorAll('.default-radio');
const borders = document.querySelectorAll('.border');
const pledgeForms = document.querySelectorAll('.pledge-form');
const forms = document.querySelectorAll('form');
const successModal = document.querySelector('.success');
const successCloseBtn = document.querySelector('.success-close-btn');
const amountInputs = document.querySelectorAll('.amount');
const backedAmount = document.querySelector('.backed-amount');
const noOfBackers = document.querySelector('.no-of-backers');
const bambooRewardsLeft = document.querySelector('#bamboo-slot');
const blackEditionRewardsLeft = document.querySelector('#black-edition-slot');
const bambooRewardsLeftMain = document.querySelector('#bamboo-slot-main');
const blackEditionRewardsLeftMain = document.querySelector('#black-edition-slot-main');
const modalContentBox = document.querySelector('.content-box');
const progressionBar = document.querySelector('.progress');



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
        modalContentBox.scrollTo(0, 0);
       
    });


    closeModal.addEventListener('click', close);


    rewardButtons.forEach(rewardButton => {
        const currentRewardBtnId = rewardButton.id;
        const bambooRadioBtn = document.querySelector('#bamboo-stand');
        const blackEditRadioBtn = document.querySelector('#black-edition-stand');

        
        rewardButton.addEventListener('click', (e) => {
            e.preventDefault();
            open();

            if (currentRewardBtnId == 'bamboo-btn-main') {
                const offsetTop = bambooRadioBtn.closest('.border').offsetTop;
                modalContentBox.scrollTo(0, offsetTop);
                bambooRadioBtn.checked = true;
                bambooRadioBtn.closest('.border').classList.add('highlight');
                bambooRadioBtn.closest('.border').querySelector('.pledge-container-top-line').classList.add('active');

            } else if (currentRewardBtnId == 'black-edition-btn-main') {
                const offsetTop = blackEditRadioBtn.closest('.border').offsetTop;
                modalContentBox.scrollTo(0, offsetTop);
                blackEditRadioBtn.checked = true;
                blackEditRadioBtn.closest('.border').classList.add('highlight');
                blackEditRadioBtn.closest('.border').querySelector('.pledge-container-top-line').classList.add('active');
                
            }
        });
    });

    overlay.addEventListener('click', () => {
        nav.classList.remove('mobile-nav');
        close();

    });





    radioBtns.forEach(radioBtn => {

        const selectedBorder = radioBtn.closest('.border');
        const selectedPledge = selectedBorder.querySelector('.pledge-container-top-line');
        const currentBtnId = radioBtn.id;
        
        radioBtn.addEventListener('change', () => {

            selectedBorder.classList.add('highlight');
            if (selectedPledge !== null) {
                selectedPledge.classList.add('active');
            }

            const offsetTop = selectedBorder.offsetTop;

            modalContentBox.scrollTo(0, offsetTop);

            // selectedBorder.scrollIntoView();
            


            radioBtns.forEach((btn) => { 
                //skip if this is the current selected radio button
                if (btn.id == currentBtnId) return; 

                //remove the container border highlight of the radio buttons that are not being selected
                const notSelectedBorder = btn.closest('.border');
                notSelectedBorder.classList.remove('highlight');

                //remove pledge card when radio buttons are not being selected
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
            let maxValue = 100000;
            let progressionPercent = currentValue/maxValue * 100;
            ;

            progressionBar.style.width = `${progressionPercent > 100 ? 100 : progressionPercent}` + '%';
            
        })
        
    })

    const successModalOpen = () => {
        successModal.classList.add('activate');
        overlay.classList.add('overlay-active');
        body.classList.add('modal-on');

    }
    

    

    



    let currentBackers = 5007;
    let currentBambooSpots = 101;
    let currentBlackEditSpots = 64;

    pledgeForms.forEach(form => {
        const currentFormId = form.id;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            close();
            successModalOpen();

            currentBackers++;
            noOfBackers.textContent = currentBackers.toLocaleString();

            if (currentFormId == 'bamboo-submit') {
                currentBambooSpots--;
                bambooRewardsLeft.textContent = currentBambooSpots;
                bambooRewardsLeftMain.textContent = currentBambooSpots;
            } else if (currentFormId == 'black-edition-submit') {
                currentBlackEditSpots--;
                blackEditionRewardsLeft.textContent = currentBlackEditSpots;
                blackEditionRewardsLeftMain.textContent = currentBlackEditSpots;
            }

            
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