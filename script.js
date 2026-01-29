
function Weakness() {

    const WeakInfo = document.querySelector('.display-description');
    const Content = document.querySelector('.Content');
    const profile = document.querySelectorAll('.prof');
    const status = document.getElementById('status')
    const originalStatus = status.textContent;

    profile.forEach(prof => {
        prof.addEventListener('mouseenter', () => {
            WeakInfo.style.display = 'block';
            Content.style.display = 'none';
            
            status.textContent = "weakness";

        });

        prof.addEventListener('mouseleave', () => {
            WeakInfo.style.display = 'none';
            Content.style.display = 'block';
            

            status.textContent = originalStatus;
        });
    });
};

Weakness();