let heart = document.getElementById("heart");
let message = document.getElementById("message");
let pigkisses = document.getElementById("pig-kisses");
let smallHearts = document.querySelectorAll(".small-heart");
let size = 1;

heart.addEventListener("click", function() {
    // Increase size on each click
    size += 0.1;
    heart.style.transform = `scale(${size})`;

    // Check if the heart has reached a certain size (explosion threshold)
    if (size >= 3) {
        // Trigger explosion effect
        heart.style.animation = "explode 1s forwards";

        // Trigger explosion effect for each small heart
        smallHearts.forEach((smallHeart, index) => {
            // Make hearts visible
            smallHeart.style.opacity = 1;

            // Apply different animation timing for each small heart
            smallHeart.style.animation = `smallHeartExplosion 1s forwards ${index * 0.1}s`;  
       // Stagger the animation
        });

        // Show the message after explosion
        setTimeout(() => {
            message.style.display = "block";
        }, 1000);  // Wait for the explosion animation to complete
    }
        // Show the pigkisses GIF after the heart explodes
        setTimeout(() => {
            pigkisses.style.display = "block";
    }, 6000);
});