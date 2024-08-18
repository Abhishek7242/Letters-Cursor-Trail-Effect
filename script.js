const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Set of random letters

document.addEventListener('mousemove', (e) => {
    const letter = document.createElement('span');
    letter.className = 'letter';

    letter.textContent = letters[Math.floor(Math.random() * letters.length)];

    document.body.appendChild(letter);

    letter.style.left = `${e.clientX}px`;
    letter.style.top = `${e.clientY}px`;

    letter.style.transform = `scale(1) translate(-50%, -50%)`;
    letter.style.opacity = '1';

    setTimeout(() => {
        letter.style.transform = `scale(0.5) translate(-50%, -50%)`;
        letter.style.opacity = '0';
    }, 500);

    setTimeout(() => {
        letter.remove();
    }, 1000); 
});
