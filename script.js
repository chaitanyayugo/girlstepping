window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    // 1. STAIR MOVEMENT (The Treadmill Effect)
    // As we scroll down, stairs move Up and Left
    const stairX = (scrollTop * 0.5); 
    const stairY = (scrollTop * 0.8);
    const stairs = document.getElementById('stairs');
    stairs.style.transform = `translate(${-stairX}px, ${-stairY}px)`;

    // 2. THE LADY'S DIAGONAL PROGRESSION (VW/VH)
    // She slowly drifts across the screen as she "descends"
    const moveX = (scrollTop / window.innerHeight) * 5; // moves 5vw total
    const moveY = (scrollTop / window.innerHeight) * 10; // moves 10vh total

    // 3. THE "BOB" (Math.sin Walking Animation)
    // frequency: how fast she steps | amplitude: how high the bob is
    const frequency = 0.05; 
    const amplitude = 15; 
    const bob = Math.sin(scrollTop * frequency) * amplitude;

    // Apply all movements to the lady
    const lady = document.getElementById('ladyWrapper');
    lady.style.transform = `translate(${moveX}vw, ${moveY + bob}px)`;
    
    // 4. OPTIONAL: Scale effect
    // Makes her look like she's getting closer to the camera
    const scale = 1 + (scrollTop / 5000);
    lady.style.transform += ` scale(${scale})`;
});
