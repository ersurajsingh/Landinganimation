document.addEventListener('DOMContentLoaded', () => {
    const moon = document.getElementById('moon');
    const planet = document.getElementById('planet');
    const navigation = document.getElementById('navigation');
    const social = document.getElementById('social');
    const description = document.getElementById('description');
    const mainInnerInner = document.getElementById('main-inner-inner');

    moon.addEventListener('click', (event) => {
        event.stopPropagation();

        gsap.to(moon, { duration: 2, left: '832px', top: '218px' });
        gsap.to(planet, { duration: 2, width: '2400px', height: '2400px', top: '50%', left: 'calc(65% + 1200px)' });

        gsap.to([navigation, social, description], { duration: 0.5, opacity: 0 });

        // Delay replacement of content until after fade out animation completes
        setTimeout(() => {
            mainInnerInner.innerHTML = '<h1>Hello World</h1>';
            gsap.to(mainInnerInner, { duration: 0.5, opacity: 1 });
        }, 500); // Wait for 0.5s (duration of fade out animation)
    });
});