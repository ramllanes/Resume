
function Weakness() {

    const WeakInfo = document.querySelector('.display-description');
    const Content = document.querySelector('.Content');
    const profile = document.querySelector('.prof1');
    const status = document.getElementById('status')
    const profile2 = document.querySelector('.prof2');
     const profile3 = document.querySelector('.prof3');
    const originalStatus = status.textContent;
    

    // profile.forEach(prof => {
    //     prof.addEventListener('mouseenter', () => {
    //         WeakInfo.style.display = 'block';
    //         Content.style.display = 'none';
            
    //         status.textContent = "weakness";
            

    //     });

    profile.addEventListener('mouseenter', () => {

            WeakInfo.style.display = 'block';
            Content.style.display = 'none';
            
            status.textContent = "weakness";
    })    

        profile.addEventListener('mouseleave', () => {
            WeakInfo.style.display = 'none';
            Content.style.display = 'block';
            

            status.textContent = originalStatus;
        });

     profile2.addEventListener('mouseenter', () => {

            WeakInfo.style.display = 'block';
            Content.style.display = 'none';
            
            status.textContent = "Strength";
    })    

        profile2.addEventListener('mouseleave', () => {
            WeakInfo.style.display = 'none';
            Content.style.display = 'block';
            

            status.textContent = originalStatus;
        });
        
        
     profile3.addEventListener('mouseenter', () => {

            WeakInfo.style.display = 'block';
            Content.style.display = 'none';
            
            status.textContent = "Goal";
    })    

        profile3.addEventListener('mouseleave', () => {
            WeakInfo.style.display = 'none';
            Content.style.display = 'block';
            

            status.textContent = originalStatus;
        });    
    };




Weakness();