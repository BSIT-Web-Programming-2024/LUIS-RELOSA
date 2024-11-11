document.getElementById('btn').addEventListener('click', function () {
    const image = document.getElementById('loptop');
    
    // Enlarge the image
    image.classList.add('enlarged');
    
    // Wait for the animation to complete before redirecting
    setTimeout(() => {
        window.location.href = 'desktop.html'; // Change this to your desired URL
    }, 250); // Match the delay to your CSS transition time (0.5s = 500ms)
});
