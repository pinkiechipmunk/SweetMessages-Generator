const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "you're doing your best, keep going, rafael!",
    "thank you for existing",
    "i'm so happy we met",
    "flowers grow back even after the harshest winters, you will too",
    "doing your best might look different each day, but at least you're trying",
    "you're good enough",
    "your existence matters",
    "you'll achieve your dreams one day",
    "i adore you",
    "please smile, happiness looks so gorgeous on you",
    "you're dealing with stuff the best you can, even if you don't feel like the best at it. i'm cheering you on!",
    "hope you know how loved you are",
    "YOU ARE SO AMAZING AND PRECIOUS !!!",
    "when you can't look on the bright side I will sit with you in the dark.",
    "you are doing amazingly, even if you dont feel like it, and I'm super proud of you.",
    "remember you are one in a million, you are loved, unique and unbelievably special just the way you are",
    "sorry if your naughty brain told you otherwise, but you are truly doing a great job.",
    "forgive yourself for not knowing better at the time.",
    "take a break, recharge, and come back stronger",
    "i don't always have the right words to help or make things better, but i care very much, i promise",
    "sending support and good wishes your way today. and cheering you on one step at a time - you're doing just fine",
    "when you feel like giving up, look back at how far you've come: be strong. stay on your path. never stop going.",
    "today is a beautiful day to remind you that you deserve everything you dream of and that you are capable of achieving everything you set your mind to.",
    "ONE DAY YOU WILL LOOK BACK ON THIS. AND YOU WILL BE PROUD THAT YOU DIDN'T GIVE UP. SO KEEP ON GOING. YOU GOT THIS!",
    "take care of that beautiful mind of yours! your mental health is just as important as your physical health. remember to give yourself some love today",
    "taking a break is not lazy",
    "slowing things down is not procrastination",
    "taking time to think is not indecisive",
    "all you need is love, so i give this",
    "taking care of yourself is not selfish",
    "taking time to heal is not a waste of time",
    "you are a strong person, you can overcome anything, you are a very beautiful person and you deserve things that are just as beautiful.",
    "i hope you smiled today. if not, quick, do it now!",
    "to me, you are perfect",
    "I AM PROUD OF YOU FOR SURVIVING ANOTHER DAY!!!",
    "wishing you a day free from whatever hell your brain says should be happening",
    "in case no one has told you, im so proud of you, and i know how hard you're trying",
    "i hope something nice comes your way, and you get the full bloom you deserve",
    "i'm cheering you on through it all, and hoping something nice blooms for you soon",
    "if you are reading this, i hope something good happens to you today.",
    "your hard work will pay off! every day you're getting stronger. everything you're doing matters, so please don't give up!",
    "if i get paid for being proud of you, i would be a millionaire by now, haha",
    "you can be happy, so don't give up on yourself like that. i see a lot of happiness in your future, please keep fighting for it. You CAN do it.",
    "you don't need to be the best. no one needs to eat the best apple every day. you just need a good one. and you're a good apple.",
    "may you be filled with lots of positive energy and yummy snacks.",
    "i really care about you and hope you're getting enough sleep and eating okay, and I'm always here for you!",
    "may this month be full of little joys, small victories, and tiny steps forward.",
    "don't be afraid to celebrate the mini successes! they do add up in the right direction!",
    "YOU JUST GOT: 1 order of happiness with a side of smiles and extra sunshine!",
    "i'm blessing your day! +I happiness +1 good luck positive thoughts.",
    "LIFE IS TOO SHORT, RAFAEL. SO DON'T SPEND IT TRAPPED SOMEWHERE YOU DON'T WANT TO BE!",
    "life can only be understood backwards: but it must be lived forward",
    "forgive yourself for past behaviors",
    "beauty begins the moment you decide to be yourself",
    "you might not feel like you are at your strongest right now and that's okay. just know that you have come this far and you are doing extremely well. you will come out on the other side as a much stronger person",
    "you are not behind it's not too late, you are exactly where you need to be right now. every step you've taken has been necessary give yourself credit, rather than berating yourself for how long your journey is taking. we all need our own time to travel our own distance",
    "you don't need to spend your time proving yourself to others. if someone doesn't appreciate you, it's not your job to convince them. you are enough and are doing AMAZING",
    "i am really blessed to know you in my life.",
    "you know, someone is happy today just because YOU exist.",
    "you're scared because you care, and caring is a never bad thing your feelings are real and valid",
    "the way you talk to yourself in your head matters. make sure that voice is kind",
    "your anxious thoughts are lying to you",
    "you don't have to be perfect when dealing with hard stuff right now, or make amazing leaps and strides",
    "you are more than other people's opinions",
    "your mistakes do not define you",
    "it's OK to have days where the only thing you do is survive",
    "life is too short to spend it at war with yourself.,
    "i hope you sleep a little better tonight",
    "hope you remember that everything's gonna be alright",
    "hope you know you are loved. i hope things get simpler for you, peaceful. spend your days with easy breaths and soft words. you deserve light through your windowsill. i hope it comes your way soon.",
    "you deserve to be loved without having to hide the parts of yourself that you think are unlovable",
    "i'm rooting for you and for happiness that you deserve so please, keep going!",
    "some things have to end for better things to begin.",
    "you deserve so much more than what you've been given you owe it to yourself to give yourself the love that you've misplaced in others",
    "no matter what happens next, i will always be glad to know there is someone like you in the world.",
    "in some alternate universe, i hope you chose to stay strong",
    "just because you took longer than others, doesn't mean you failed. remember that.",
    "people will come and go in life, but the person in the mirror will be there forever. so be good to yourself.",
    "CHOOSE TO PUT YOURSELF FIRST EVERY SINGLE DAY. TAKE TIME FOR YOURSELF AND MAKE THAT TIME SACRED. MAKE IT A PRIORITY. DON'T GET CAUGHT UP WITH ALL THE REASONS WHY YOU CAN'T. PLAN IT. SCHEDULE IT. MAKE THE COMMITMENT TO YOURSELF.",
    "it's okay to feel how you feel. let's be understanding and kind while we make it through.",
    "allow yourself to be proud of yourself and all the progress you've made, especially the progress that no one else has seen",
    "you are not a burden",
    "love = you + God.",
    "stay close to those who make your heart smile",
    "remember: you are allowed to take your time, to grow in your own beautiful way",
    "wanna know something? you are precious.",
    "you should be proud of yourself for still trying, for not giving up.",
    "your current situation is not your final destination. the best is yet to come.",
    "sometimes you just got to make peace with the fact that you will fall from time to time. the truth is you can't have it all, and it's okay.",
    "in my eyes, you are perfect. i adore you.",
    "failure happens and that's about it. it duesn't say much about you. everyone fails at some point of their lives. it's part of sur world as we know it. be kind to yourself, you can always try again",
    "it's okay if your life isn't where you want it to be right now, everyone blooms in their own time. your time will come.",
    "sometimes the pressure to always be improving, changing. and working on yourself can be too much. it's OK to step back and appreciate all you've done- all progress is good, including works in progress",
    "hope you're doing okay. but if you're not, i hope things improve soon",
    "you have no idea the amount of happiness you brought into someone's life.",
    "sending you good vibes and cheering you on today you're doing great - you're a total star!",
    "IF NO ONE HAS TOLD YOU YET, I AM PROUD OF YOU. I SEE YOU TRYING YOUR BEST, EVEN WHEN THINGS GET REALLY TOUGH. I SEE YOU",
    "i'm rooting for you, rafael!",
    "YOU ARE A VERY IMPORTANT HUMAN BEING, I JUST THOUGHT YOU SHOULD KNOW IT!",
    "courage doesn’t always roar",
    "you are allowed to be both a masterpiece and a work in progress, simultaneously.",
    "if you can’t fly, then run. if you can’t run, then walk. if you can’t walk, then crawl. but whatever you do, you have to keep moving forward",
    "we must let go of the life we have planned, so as to accept the one that is waiting for us",
    "I feel the sparks every time you kiss me.",
    "Can I borrow a kiss? I promise Ill give it back.",
    "I have discovered that home too has a smell. You are my home.",
    "To the sun and moon, I love you.",
    "The only thing I want to be an expert at is loving you!",
    "Every atom, molecule, and cell of me loves you.",
    "Im so lucky to have you! I love you forever!",
    "Being in love with you makes every morning worth getting up for.",
    "Its just you and me against the world. I love you!",
    "My love for you is like the water in the ocean. It will never dry up.",
    "I want to be your favorite hello, and hardest goodbye.",
    "To the moon and back, I love you.",
    "I have many reasons to die for, but only one to live for, that is you!",
    "You stole my heart and I dont want it back ever!",
    "Thank you, my love, for making me feel like the most beautiful person in the world.",
    "I am blessed to be with a man like you!",
    "I love you—now and always.",
    "Its you and me against the universe. Were the strongest team there is.",
    "Hold my hand, hold my heart, and hold me forever. I love you",
    "If I know what love is, it is because of you.",
    "You are my forever. I will love you always.",
    "I wish you were here, or I was there, or we were together anywhere",
    "Distance means so little when someone means so much",
    "You bring happiness into my life",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})
