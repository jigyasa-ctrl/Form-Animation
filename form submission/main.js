function animatedForm(){

    const arrows = document.querySelectorAll('.fa-arrow-circle-down');
    arrows.forEach(arrow => {
        
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            if(input.type === 'text' && validateUser(input))
            {
                nextSlide(parent,nextForm);
                 }
            else if(input.type === 'email' && validateEmail(input)) 
            {
                nextSlide(parent, nextForm);
                }
            else if(input.type === 'text' && validatePassword(input))
            {
                nextSlide(parent, nextForm);
            }
            else{
                parent.style.animation = 'shake 0.3s ease';
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
}
    
        
    function validateUser(user) {
        if(user.value.length < 6){

            error('red');
        }else{
            error('green');
            return true;
        }

    }

    function validateEmail(email) {
        const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(validation.test(email.value)){
    error('green');
    return true;
        }else{
            error('red');
    }
    }



    function validatePassword(password) {

    if(password.value.length < 6){
        console.log('not enough characters');
        error('red');
    }else{
        error('green');
        return true;
        }

    }

    function nextSlide(parent, nextForm) {
        parent.classList.add('inactive');
        parent.classList.remove('active');
        nextForm.classList.add('active');

    }

    function error(color) {
        document.body.style.backgroundColor = color;

    }
    
    
animatedForm();