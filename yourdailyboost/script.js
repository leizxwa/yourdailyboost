document.addEventListener('DOMContentLoaded', () => {

    const motivations = [
        "Today is a blank page. Write a happy story.",
        "Your smile is a language everyone understands.",
        "Breathe in peace, breathe out the noise.",
        "You are more powerful than you know and more brilliant than you think.",
        "Something amazing is waiting for you just around the corner.",
        "Find joy in the small sips, the quiet moments, and the big laughs.",
        "Walk like you own the room, because in your world, you do.",
        "It's a perfect day to start believing in yourself.",
        "Let your confidence be your best outfit today.",
        "Relax. You are exactly where you need to be.",
        "Get excited about the person you are becoming.",
        "Your potential is endless. Go do something with it.",
        "Choose happiness. It looks gorgeous on you.",
        "Close your eyes, take a deep breath, and let it all go.",
        "You are a limited edition. Shine bright.",
        "Feel the thrill of possibility in the air today.",
        "Trust the journey, even when you don't understand the path.",
        "You have the power to make today amazing.",
        "Every new second is a new chance to change everything.",
        "A little bit of progress each day adds up to big results.",
        "Embrace the glorious mess that you are.",
        "Your energy is contagious. Make it a positive one.",
        "Stop doubting yourself. Work hard and make it happen.",
        "Life is short. Make every hair flip count.",
        "You are capable of incredible things.",
        "Let your mind be calm and your soul be free.",
        "The best is yet to come. Get excited for it.",
        "Stand tall, smile big, and own the day.",
        "Remember that you are strong, smart, and kind.",
        "Allow yourself to be proud of all that you are.",
        "Today's forecast: 100% chance of winning.",
        "Just for a moment, be still and feel the peace.",
        "You are crafting a life you love. Keep going.",
        "The world is a better place with you in it.",
        "Don't just fly, soar.",
        "Be the reason someone smiles today.",
        "Your positive action combined with positive thinking results in success.",
        "Let your dreams be your wings.",
        "You are enough. You have always been enough.",
        "Today, let go of what's gone and appreciate what remains.",
        "Get ready. Your best chapter is about to begin.",
        "Confidence is silent. Insecurities are loud.",
        "Be gentle with yourself. You're doing the best you can.",
        "The future is bright and full of possibilities.",
        "Own your magic. Don't apologize for it.",
        "Find your fire and let it light up your world.",
        "A calm mind is the ultimate weapon against your challenges.",
        "Let your heart be your compass and your mind be your map.",
        "You are a masterpiece in progress.",
        "Feel the excitement of a new day, a fresh start.",
        "Be so good they can't ignore you.",
        "Give yourself permission to rest and recharge.",
        "Adventure awaits. Go find it.",
        "You didn't come this far to only come this far.",
        "Shine on. The world needs your light.",
        "Take a deep breath. It's just a bad day, not a bad life.",
        "The person you want to be is just one brave decision away.",
        "Believe in the power of 'yet'. You'll get there.",
        "Get excited! You have no idea what amazing things are ahead.",
        "You are worthy of all the good things that are coming your way.",
        "Let peace be your priority.",
        "Wake up. Be awesome. Repeat.",
        "You have a unique and beautiful perspective to offer.",
        "Don't be afraid to sparkle a little brighter.",
        "The universe is conspiring in your favor.",
        "Relax and trust the timing of your life.",
        "Something wonderful is about to happen.",
        "Your value doesn't decrease based on someone's inability to see your worth.",
        "Be the CEO of your life. Hire, fire, and promote accordingly.",
        "Let your intuition guide you. It knows the way.",
        "The possibilities for today are limitless.",
        "You are a magnet for miracles.",
        "Turn your face to the sun and the shadows fall behind you.",
        "A moment of calm can change your entire day.",
        "Get excited for the journey, not just the destination.",
        "Your comeback is going to be stronger than your setback.",
        "You are an artist. Your life is your canvas.",
        "Breathe. It's the simplest way to find your center.",
        "The world is ready for you. Go show it what you've got.",
        "You are not a drop in the ocean. You are the entire ocean in a drop.",
        "Choose to be optimistic. It feels better.",
        "Take a moment to appreciate how far you've come.",
        "Let's make today ridiculously amazing.",
        "Your mind is a garden. Your thoughts are the seeds. You can grow flowers or you can grow weeds.",
        "Be fearless in the pursuit of what sets your soul on fire.",
        "The quietest moments often hold the loudest truths.",
        "Get ready to be surprised by your own strength.",
        "You are doing better than you think you are.",
        "Let's do what we love and do a lot of it.",
        "There is a quiet beauty in simplicity.",
        "Today is your day to shine.",
        "You are made of stardust and wishes and magical things.",
        "Let the excitement of a new opportunity fuel you.",
        "Be proud of your journey. It's uniquely yours.",
        "Find your calm in the chaos.",
        "The best project you'll ever work on is you.",
        "Today, expect something good to happen.",
        "You are the author of your own story. Make it a bestseller.",
        "Relax. Refresh. Recharge.",
        "Get excited! Every day is a new adventure.",
        "You have everything you need to succeed.",
        "Be brave, be kind, be you.",
        "The world needs your unique magic.",
        "Trust that you are on the right path."
    ];

    const randomIndex = Math.floor(Math.random() * motivations.length);
    const todaysMotivation = motivations[randomIndex];
    document.getElementById('motivation-text').textContent = todaysMotivation;

    const dateContainer = document.getElementById('date-container');
    const timeContainer = document.getElementById('time-container');

    const updateTime = () => {
        const now = new Date();

        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateContainer.textContent = now.toLocaleDateString('en-US', dateOptions);

        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
        timeContainer.textContent = now.toLocaleTimeString('en-US', timeOptions);
    };

    updateTime();
    setInterval(updateTime, 1000);
});