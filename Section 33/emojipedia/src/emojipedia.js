const emojipedia = [
    {
      id: 1,
      emoji: "😀",
      name: "Grinning Face",
      meaning:
        "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text."
    },
    {
      id: 2,
      emoji: "😃",
      name: "Smiling Face With Open Mouth",
      meaning:
        "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy"
    },
    {
      id: 3,
      emoji: "😄",
      name: "Smiling Face With Open Mouth And Smiling Eyes",
      meaning:
        "Smiley's mouth is wide open, its eyes squeezed shut with joy. Laughs loudly, cheerfully and heartily. Only the typical emoji eyes distinguish it from the classical smiley face. Can also be used for sarcasm"
    },
    {
      id: 4,
      emoji: "😁",
      name: "Grinning Face With Smiling Eyes",
      meaning:
        "Happy face with a mischievous laugh. Represents lightheartedness and exuberance. Full of joy due to an event, excited and agitated or just a bit embarrassed."
    },
    {
      id: 5,
      emoji: "😆",
      name: "Smiling Face With Open Mouth And Closed Eyes",
      meaning:
        "Emoji is on the verge of a fit of laughter because something is so silly or incredibly funny. Also, mischievous or bitchy laughter about an event, or something that happened to another person.. Means the same as “XD“ and “X“ as a text-based emoticon."
    },
    {
      id: 6,
      emoji: "😅",
      name: "Smiling Face With Open Mouth & Cold Sweat",
      meaning:
        "Sweaty smile. Relief that a tight situation went well or was coped with positively, e.g. an important appointment. A difficult event is imminent and you are already nervous."
    },
    {
      id: 7,
      emoji: "😂",
      name: "Face With Tears of Joy",
      meaning:
        "I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015."
    },
    {
      id: 8,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
      id: 10,
      emoji: "😊",
      name: "Smiling Face With Smiling Eyes",
      meaning:
        "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^"
    },
    {
      id: 11,
      emoji: "😇",
      name: "Smiling Face With Halo",
      meaning:
        "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
    },
    {
      id: 12,
      emoji: "🙂",
      name: "Slightly Smiling Face",
      meaning:
        "A light smile means you are satisfied with yourself and the world. Can make a statement sound friendlier than it might have been meant. Or have a sarcastic meaning when a smile does not actually fit the content."
    },
    {
      id: 13,
      emoji: "🙃",
      name: "Upside-Down Face",
      meaning:
        "Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke."
    },
    {
      id: 14,
      emoji: "😉",
      name: "Winking Face",
      meaning:
        "Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous."
    },
    {
      id: 15,
      emoji: "😌",
      name: "Relieved Face",
      meaning:
        "Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries."
    },
    {
      id: 16,
      emoji: "😍",
      name: "Smiling Face With Heart-Eyes",
      meaning:
        "Happily beaming face with heart-shaped eyes. Insanely in love: with a person, a place or an object. Expresses the extent of love and affection as well as gratitude and is often part of romantic messages. Just does not know what to do with all the luck."
    },
    {
      id: 17,
      emoji: "🥰",
      name: "Smiling face with smiling eyes and three hearts",
      meaning:
        "You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart."
    },
    {
      id: 18,
      emoji: "😘",
      name: "Face Throwing a Kiss",
      meaning:
        "Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude."
    },
    {
      id: 19,
      emoji: "😗",
      name: "Kissing Face",
      meaning:
        "The face sends kisses to another person. The open eyes and the neutral face are not so much a sign of an intimate kiss but rather a kiss to a friend or relative. “Thank you“, “Hello“ or “Goodbye“. Could also stand for “whistling” or “duck face”."
    },
    {
      id: 20,
      emoji: "😙",
      name: "Kissing Face With Smiling Eyes",
      meaning:
        "Relaxed face expression, smiling eyes and kissing lips. A kiss to friends or “We hug and kiss you“ to relatives. Can also be used for whistling."
    },
    {
      id: 21,
      emoji: "😚",
      name: "Kissing Face With Closed Eyes",
      meaning:
        "Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling."
    },
    {
      id: 22,
      emoji: "😋",
      name: "Face Savouring Delicious Food",
      meaning:
        "Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around."
    },
    {
      id: 23,
      emoji: "😛",
      name: "Face With Stuck-Out Tongue",
      meaning:
        "Horseplay with friends, weakening an ironic remark and making sure that the other does not take seriously what has been said. Making fun of others: I knew you'd screw it up."
    },
    {
      id: 24,
      emoji: "😝",
      name: "Face With Stuck-Out Tongue & Tightly Closed Eyes",
      meaning:
        "Making fun of someone, annoying or jokingly offending someone. In provocative news, crude or black humor as well as with glee."
    },
    {
      id: 25,
      emoji: "😜",
      name: "Face With Stuck-Out Tongue & Winking Eye",
      meaning:
        "Smiley boldly sticks out the tongue, winking with one eye. Has made a joke or wants to flirt with the chat partner. Is carefree and does not mean it seriously."
    },
    {
      id: 26,
      emoji: "🤪",
      name: "Crazy Face",
      meaning:
        "Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke."
    },
    {
      id: 27,
      emoji: "🤨",
      name: "Face With a Raised Eyebrow",
      meaning:
        "With the questioning look on the face, resembles the actor “The Rock“ (Dwayne Johnson). Can be used to express skepticism, disbelief or disapproval."
    },
    {
      id: 28,
      emoji: "🧐",
      name: "Face With Monocle",
      meaning:
        "A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The “upper-class“ version of the pondering smiley."
    },
    {
      id: 29,
      emoji: "🤓",
      name: "Nerd Face",
      meaning:
        "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
    },
    {
      id: 30,
      emoji: "😎",
      name: "Face With Sunglasses",
      meaning:
        "I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach."
    },
    {
      id: 31,
      emoji: "🤩",
      name: "Smirking Face With Starry Eyes",
      meaning:
        "Is very excited about something and already full of anticipation. Overwhelmed and speechless after meeting someone you like a lot. Fascinated by the glory and the world of the stars."
    },
    {
      id: 32,
      emoji: "🥳",
      name: "Face with party blower and party hat",
      meaning:
        "That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season."
    },
    {
      id: 33,
      emoji: "😏",
      name: "Smirking/Whimsical Face",
      meaning:
        "Half a smile that oozes with complacency. Represents irony, coolness or playfulness. Be careful: Somebody could be up to something. Used as an offensive look for flirting or sexual innuendo."
    },
    {
      id: 34,
      emoji: "😒",
      name: "Unamused Face",
      meaning:
        "The grumpy, sullen gaze expresses dissatisfaction. Is not enthusiastic about a thing and shows that. Expression of disinterest and disapproval."
    },
    {
      id: 35,
      emoji: "😞",
      name: "Disappointed Face",
      meaning:
        "Face is drooping and directed downwards. Smiley is very sad and frustrated and gives a disappointed impression. Represents sorrow, remorse and regret."
    },
    {
      id: 36,
      emoji: "😔",
      name: "Pensive Face",
      meaning:
        "A pensive expression on the face. Emoji looks downwards and needs time to think. Represents melancholy, general dissatisfaction and frustration."
    },
    {
      id: 37,
      emoji: "😟",
      name: "Worried Face",
      meaning:
        "Worried looking face due to a complicated situation or important event. Feels anxious, insecure and uncomfortable."
    },
    {
      id: 38,
      emoji: "😕",
      name: "Confused Face",
      meaning:
        "Is confused or does not agree with something. Is uncertain or disappointed, had imagined this in a different way."
    },
    {
      id: 39,
      emoji: "🙁",
      name: "Slightly frowning face",
      meaning:
        "„I’m sorry to hear that“ or „What you’re saying annoys me a little bit“. The frown can show rejection and anger or a person is surprised, anxious."
    },
    {
      id: 40,
      emoji: "😣",
      name: "Suffering Face",
      meaning:
        "Emoji is struggling and suffering. After a hard day, ready to throw in the towel. However, has to endure the situation and will have worked it through some day."
    },
    {
      id: 41,
      emoji: "😖",
      name: "Confounded Face",
      meaning:
        "How on earth could that happen? Smiley is extremely dismayed and bewildered. Or damn angry: That's almost the final straw!"
    },
    {
      id: 42,
      emoji: "😫",
      name: "Tired Face",
      meaning:
        "Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first."
    },
    {
      id: 43,
      emoji: "😩",
      name: "Weary Face",
      meaning:
        "Leave me alone! Reluctant smiley with raised eyebrows and mouth downturned, moaning about grueling, unpleasant but inevitable things. Is weepy, upset and completely exhausted, mentally or physically."
    },
    {
      id: 44,
      emoji: "🥺",
      name: "Face with begging eyes",
      meaning:
        "The big eyes are shining, devoted facial expression. The emoji is entreatingly begging for something: wants to borrow some money or the car. If you cannot get ahead by asking for something, puppy dog eyes are the last resort to get what you want."
    },
    {
      id: 45,
      emoji: "😢",
      name: "Crying Face",
      meaning:
        "Smiley with drooping eyebrows is sad and crying. A tear drop is running down the cheek. A picture of misery. Not so much general sadness, but rather pain over one thing. It still hurts to remember a certain event."
    },
    {
      id: 46,
      emoji: "😭",
      name: "Loudly Crying Face",
      meaning:
        "Emoji is both very sad and distraught, or is dying of laughter. Tears are pouring out of the eyes like a waterfall. Represents injury, pain or defeat. Is also used ironically or something is so funny that you die of laughter."
    },
    {
      id: 47,
      emoji: "😤",
      name: "Face With Look of Triumph",
      meaning:
        "White steam clouds are coming out of the smiley's nose. Is snorting contemptuously as a sign of superiority. Is proud and triumphing over someone else."
    },
    {
      id: 48,
      emoji: "😠",
      name: "Angry Face",
      meaning:
        "Smiley is upset, angry, and totally furious. Reaction to something unfavorable or a sign of rejection. You had better keep out of the person's way."
    },
    {
      id: 49,
      emoji: "😡",
      name: "Pouting Face",
      meaning:
        "The pouting face expresses displeasure with a person or situation. Beware, danger of explosion! Furious emoji face. Is annoyed and already sulking with a deep-red face."
    },
    {
      id: 50,
      emoji: "🤬",
      name: "Face With Symbols Over The Mouth",
      meaning:
        "The symbols over the mouth represent cursing. The serious-looking smiley is really upset and keeps using four-letter words. Represents a sudden outburst of fury or frustration."
    },
    {
      id: 51,
      emoji: "🤯",
      name: "Face With Exploding Head",
      meaning:
        "I cannot believe it. or “That will blow you away.“ Something is very exciting or surprising. The exploding head can also be used to express shock or awe."
    },
    {
      id: 52,
      emoji: "😳",
      name: "Flushed Face",
      meaning:
        "Person is shocked, in an uncomfortable situation or has made a mistake. Expresses shame; something is very embarrassing. Reacts to a compliment or a flattering message that the person did not want to receive."
    },
    {
      id: 53,
      emoji: "🥵",
      name: "Overheated face",
      meaning:
        "It is so hot, I will get a heat stroke right away! Bright red head, the tongue is hanging from the mouth and drops of sweat are on the forehead. The hottest place in the world lies in Iran: In 2005, the highest temperature of 70.7 °C was measured in the Dasht-e Lut desert"
    },
    {
      id: 54,
      emoji: "🥶",
      name: "Freezing face",
      meaning:
        "It is so cold, you are about to freeze to death. The smile is almost frozen. Already totally blue in the face from the cold temperature, tortured facial expression. Only a cup of tea, coffee, or the hot tub can help now."
    },
    {
      id: 55,
      emoji: "😱",
      name: "Face Screaming in Fear",
      meaning:
        "Horror-stricken face with two hands, screaming. Is scared stiff, feeling nothing but fear and panic. The creepy emoji can also be used ironically or as a symbol for Halloween."
    },
    {
      id: 56,
      emoji: "😨",
      name: "Fearful Face",
      meaning:
        "Scared smiley is frightened and stunned. Seems to be deeply shocked and surprised by an ominous event or intense experience."
    },
    {
      id: 57,
      emoji: "😰",
      name: "Face With Open Mouth & Cold Sweat",
      meaning:
        "Smiley with a blue forehead is shocked and worried. Cold sweat is dripping from the forehead and the mouth is open, dumbfounded. Sweating due to physical or mental stress."
    },
    {
      id: 58,
      emoji: "😥",
      name: "Disappointed but Relieved Face",
      meaning:
        "Is relieved that something is over, but also disappointed. Has experienced a stressful situation with an unpleasant outcome, for example, a test. Has gotten out of a difficult or delicate situation, but not without bumps and bruises."
    },
    {
      id: 59,
      emoji: "😓",
      name: "Face With Cold Sweat",
      meaning:
        "Stress or worry about a bad experience. Things went different than they should have. The school is stressing or there is still so much to do in the office. You are tired, but still have so much work to do."
    },
    {
      id: 60,
      emoji: "🤗",
      name: "Hugging Face",
      meaning:
        "Smiley with red cheeks is stretching out its hands toward you. Wants to hug you. It's an open and cordial gesture and an expression of warmth and friendliness."
    },
    {
      id: 61,
      emoji: "🤔",
      name: "Thinking Face",
      meaning:
        "The thinker's pose: Thoughtful face with the characteristic hand on the chin. Puts a statement, a person's intelligence, or an idea into question. Is mulling over something or thinking about a brilliant idea."
    },
    {
      id: 62,
      emoji: "🤭",
      name: "Face With Hand Over The Mouth",
      meaning:
        "Expresses shock, surprise, or a sudden perception. Typical gesture, which shows that the other person is not telling the truth. Thinks he's being lied to."
    },
    {
      id: 63,
      emoji: "🤫",
      name: "Exhorting Face",
      meaning:
        "Shhh! is meant to silence others. Or someone is confiding a secret that should not be retold. Nicely telling your counterpart to shut up."
    },
    {
      id: 64,
      emoji: "🤥",
      name: "Lying Face",
      meaning:
        "As with Pinocchio, the nose becomes longer with each lie, which exposes him as a liar. Symbol of a falsehood, boast, or an unlikely story."
    },
    {
      id: 65,
      emoji: "😶",
      name: "Face Without Mouth",
      meaning:
        "Emoji without a mouth. Is speechless, has no words. Someone does not want to or cannot say anything about a specific topic. Used in difficult, embarrassing or bad conversations. Imagine what it would say if it had a mouth!"
    },
    {
      id: 66,
      emoji: "😐",
      name: "Neutral Face",
      meaning:
        "Pokerface: Expressionless face with a neutral look. Unimpressed, awkward or indifferent."
    },
    {
      id: 67,
      emoji: "😑",
      name: "Expressionless Face",
      meaning:
        "Face without any emotional expression, with closed eyes and mouth. Tired, annoyed, emotionless, no patience, the end of the flagpole is reached. The right words are missing to continue a conversation."
    },
    {
      id: 68,
      emoji: "😬",
      name: "Grimacing Face",
      meaning:
        "This is really embarrassing for me now! Expression of nervousness, awkwardness or embarrassment. Scared and guilty smile: Someone has done something stupid and tries to resolve the tense situation by grimacing."
    },
    {
      id: 69,
      emoji: "🙄",
      name: "Face With Rolling Eyes",
      meaning:
        "Smiley is rolling its eyes. Finds the current situation or a person boring or annoying. Will disregard the message."
    },
    {
      id: 70,
      emoji: "😮",
      name: "Face With Open Mouth",
      meaning:
        "Wow, I'm impressed! Perplexed smiley is looking completely puzzled. Is positively or negatively surprised: from mildly astonished to completely steamrolled."
    },
    {
      id: 71,
      emoji: "😦",
      name: "Frowning Face With Open Mouth",
      meaning:
        "I cannot believe you did that! Expresses horror as well as fear, worry and mistrust. In response to a negative surprise. Got caught red-handed and just feels totally taken by surprise."
    },
    {
      id: 72,
      emoji: "😧",
      name: "Anguished Face",
      meaning:
        "Something unexpected happened! Face with raised eyebrows, open eyes and open mouth. A mixture of shock and disappointment. Represents fear, frustration, horror and unexpected, negative surprises."
    },
    {
      id: 73,
      emoji: "😯",
      name: "Speechless Face",
      meaning:
        "Oh my goodness! The unpleasantly surprised face is lost for words due to a shocking affair. In response to bad behavior or a rude message. Nothing can be added to what has just been said."
    },
    {
      id: 74,
      emoji: "😲",
      name: "Astonished Face",
      meaning:
        "That's incredible, I had no idea! Astonished face with wide open mouth and eyes: overwhelmed with surprise, completely shocked or sheer incredulity. Can hardly believe what just happened!"
    },
    {
      id: 75,
      emoji: "🥱",
      name: "Yawning face",
      meaning:
        "I am dog-tired! The eyes are closed and the hand covers a yawn. The night was too short, you couldn't get enough sleep. Indication that a topic or a person is not of interest, but rather boring."
    },
    {
      id: 76,
      emoji: "😴",
      name: "Sleeping Face",
      meaning:
        "Good night and sweet dreams! In comics or cartoons, zZz above the head stands for sleeping characters. The emoji is tired, wants to go to bed or is just about to fall asleep from boredom."
    },
    {
      id: 77,
      emoji: "🤤",
      name: "Drooling Face",
      meaning:
        "Slobbering face, the saliva flowing from the corner of the mouth. Represents desire for a person, delicious food, the new car, or the anticipation of an event. Expression of extreme interest and desire."
    },
    {
      id: 78,
      emoji: "😪",
      name: "Sleepy Face",
      meaning:
        "Emoji is dead tired and would love to sleep now. The bubble emerging from the nose is a typical manga symbol for a sleeping character. Or as an expression that a conversation or excursion is extremely boring and drowsy."
    },
    {
      id: 79,
      emoji: "😵",
      name: "Dizzy Face",
      meaning:
        "I feel dizzy! Smiley with crossed eyes and open mouth is totally dazed. Is confused and so dizzy it doesn't know which side is up. Also symbolizes strong emotions or drunkenness."
    },
    {
      id: 80,
      emoji: "🤐",
      name: "Zipper-Mouth Face",
      meaning:
        "Smiley with zipper instead of a mouth is keeping a secret for itself. Lips are closed or chat partner's lips should remain closed. Can also mean silence because you cannot find the right words."
    },
    {
      id: 81,
      emoji: "🥴",
      name: "Face with unequal eyes and wavy mouth",
      meaning:
        "Eyes half open, half closed, slanted mouth, flushed cheeks. The emoji has a confused facial expression: due to tiredness or the currently confused emotional world. Also known as drunken face."
    },
    {
      id: 82,
      emoji: "🤢",
      name: "Nauseated Face",
      meaning:
        "Disgusted smiley, which is already green with sickness and nausea. Might mean disgust, reluctance, or aversion, or stand for sickness."
    },
    {
      id: 83,
      emoji: "🤮",
      name: "Face With Open Mouth, Throwing Up",
      meaning:
        "I could almost throw up. Might show how drunk the person was last night. The puking smiley can also state what you think of something."
    },
    {
      id: 84,
      emoji: "🤧",
      name: "Sneezing Face",
      meaning:
        "A sneezing face with eyes closed, blowing its nose into a handkerchief. I caught a cold! Shows that someone is ill or feels uncomfortable."
    },
    {
      id: 85,
      emoji: "😷",
      name: "Face With Medical Mask",
      meaning:
        "The mask is for protection. Either to protect yourself or others from infection. Someone is in the hospital, has to go to the doctor or has caught a disease. Wearing the masks is widely spread in Asia."
    },
    {
      id: 86,
      emoji: "🤒",
      name: "Face With Thermometer",
      meaning:
        "The sad face with the thermometer in the mouth expresses illness. Caught a flu or other illness that is associated with fever. Or is worried about getting sick."
    },
    {
      id: 87,
      emoji: "🤕",
      name: "Face With Head Bandage",
      meaning:
        "Sad looking face with head bandage: Someone is ill, had an accident, or is in hospital. The bandage symbolizes health problems."
    },
    {
      id: 88,
      emoji: "🤑",
      name: "Money-Mouth Face",
      meaning:
        "Smiley has dollar signs in its eyes, the tongue is a banknote. Could have won something or is sensing a financial chance. Implicates a sense of wealth."
    },
    {
      id: 89,
      emoji: "🤠",
      name: "Face With Cowboy Hat",
      meaning:
        "Howdy! Typical American smiley with cowboy hat from the Wild West. Stands for freedom, nature, and hard work."
    },
    {
      id: 90,
      emoji: "😈",
      name: "Smiling Face With Horns",
      meaning:
        "Mischievously grinning goblin smiley with small devil horns. Wants to cause trouble, is a real teaser or planning something ugly just now."
    },
    {
      id: 91,
      emoji: "👿",
      name: "Goblin",
      meaning:
        "The goblin is frowning, looking grim, and does not feel like joking. You should be particularly careful. Represents mischievous acts or remarks as well as treachery."
    }
  ];
  
  export default emojipedia;
  