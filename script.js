// Arrays that contain inspirational quotes that will be randomly output to the console.
let arrOne= [`It doesn't matter where you are coming from. All that matters is where you are going.`, `If you cannot find peace within yourself, you will never find it anywhere else.`, `No one ever does live happily ever after, but we leave the children to find that out for themselves.`,
    `Sometimes life happens.`, `But what is life if you don't live it?`, `Everything you can imagine is real.`, `Your "I CAN" is more important than your IQ.`, `The past can not be cured.`, `While there's life, there's hope.`, `When you make a choice, you change the future.`, `Live free or die.`, `Be happy, but never satisfied.`, `Dreams are necessary to life.`, `People are successful because they think and act like successful people.`
];

let arrTwo = [`Alone we can do so little; together we can do so much`, `Don't Worry Be Happy`, `Love and friendship. They are what make us who we are, and what can change us, if we let them.`, `One lives in the hope of becoming a memory.`, `You cannot find peace by avoiding life.`, `Motivation gets you going; Inspiration keeps you going`, `You can only do what you believe you can do.`, `What you do you become.`, `The only way to make progress is to start.`, `Pain is temporary. Quitting lasts forever.`, `A smart person knows how to talk. A wise person knows when to be silent.`, `Your true beauty is found in being yourself.`, `What you do now builds your future later.`, `You are as powerful as you believe you are.`,
    `He who make no enemies makes no difference.`, `Life is real, and you canot live a lie.`, `Inspiration is what keeps us well.`, `You cannot expect victory and plan for defeat.`, `Failures are the stairs we climb to reach success.`, `Great leaders create more leaders, not followers.`, `Momentum builds success.`, `Seek learning even if you were to die tomorrow.`, `The only way to overcome a difficulty is to try again.`, `Dare to be great.`, `Dying is a given, living is an option.`, `Be the positive impact on the lives of others.`, `You can t coast uphill.`, `The best thing you can do is try your best.`, `Great goals make great people. People cannot hit what they do not aim for.`, `Most ideas are born and lost in isolation.`, `Neither forget the past nor its pain.`
];

let arrThree = [`Even a faint light will shine far in the dark.`, `Start now. Make it happen.`, `Vision creates motivation.`, `I love mistakes. It shows you were trying.`, `A bruise is a lesson... and each lesson makes us better.`, `To soar, we must leave anything that weighs us down.`, `Love is the source of all happiness.`, `Your pain becomes your strength.`, `Vision is your first creation of the future.`, `Sometimes questions are more important than answers.`, `Duty is dedication.`, `The beginning is always NOW.`, `Why be average when you can be extraordinary?`, `Be positive. Be true. Be kind.`, `What you stay focused on will grow.`, `The only way to make progress is to start.`, `Don't try to follow trends. Create them.`, `Small actions can lead to big changes.`,
    `Obstacles are things a person sees when he takes his eyes off his goal.`, `You cannot control the behavior of others, but you can always choose how you respond to it.`, `Every villian is a hero in his own mind.`, `Crying does not indicate that you are weak. Since birth, it has always been a sign that you are alive.`, `Treat everyone with politeness and kindness, not because they are nice, but because you are.`, `Accept yourself, love yourself, and keep moving forward.`, `At the root of all good is love.`, `Be like a postage stamp. Stick to it until you get there`, `Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it.`, `If you didn't earn something, it's not worth flaunting.`, `It's hard to beat a person who never gives up.`
];

let arrFour = [`Love is a fearless force.`, `The light overcome the darkness.`, `Success is a habit, not an action.`, `If you live in Fear, Success will disappear.`, `We are shaped by every endured situation.`, `When you are truly happy you will realise that there is nothing to prove to people.`, `You need to believe to achieve.`, `You can do it. That thing you just thought of, you can do it.`, `Today's moment is tomorrow's memory.`, `Leaders prioritize what they want.`, `The clearer the objective, the better the performance.`, `I would rather traverse the valleys of a thousand hells than live a day without desire.`, `Life gives us choices. You either grab on with both hands and just go for it, or you sit on the sidelines.`, `You have to dream big before doing big`, `
Consistency is the true foundation of trust. Either keep your promises or do not make them.`, `The wise respond. The foolish react. The wise think & then act. The foolish act and then regret.`, `All my pains has always increased my sense of purpose.`, `Having what you want may give you Achievement. But wanting what you have will give you Fulfillment.`, `Being in a relationship with some people is like pushing a boat through sand. I used to have the time and energy for that kind of nonsense, but not anymore. Relationships should be a wonderful journey of exploration and love; not grinding resistance.`, `I believe in the power of self-acceptance. I am confident, strong, brave and beautiful.`, `There is no change within a society that does not begin within an individual.`, 
    `Discipline yourself before you discipline others.`
];

let arrFive = [`There is hero in everyone.Never doubt who you are.`, `Close your mouthand open your mind.Lose your selfand find your soul.`, `All knowledge is worth having.`, `Today has already started and nothing can hold it back. All that we can do is convert every moment into a Victory.`, `Nothing can disturb your peace of mind unless you allow it to.`, `Where you are is merely a point along the path to where you are going.`, `I'm alone, but I'm not lonely. I like who I am. I like who I'm becoming.`, `Never underestimate the power you have to take your life in a new direction.`, `Every choice comes with a consequence. Once you make a choice, you must accept responsibility. You cannot escape the consequences of your choices, whether you like them or not.`, `The mind is like a stage. So shine the spotlight on something that makes you feel good.`,
    `Ordinary people can do extraordinary things when their faith is greater than their fear.`, `Sometimes good things fall apart, so better things can fall together.`, `Inspiration comes from everywhere, everything, and everyone.`, `The greatest risk to man is not that he aims too high and misses, but that he aims too low and hits.`, `Every person arrives in our lives for a reason: so we can teach & learn. This is the flow of life. Allow this process to provide an opportunity for self-reflection. What have you taught? What have you learned? Moving forward, what would you do differently and why?`, `Ready to feel again. Ready to trust again. Ready to love again. The heart gets knocked down but it does not stay down.`, `Some say, "Be Strong." I say, "Surrender to your vulnerability and therein lies your strength.`, `The master is a beginner that never gave up.`
];

// An array that has a collection of different arrays that contain quotes.
const messageArr = [arrOne, arrTwo, arrThree, arrFour, arrFive];

// Returns an index of message array, i.e. arrOne, arrThree, etc.
let message = messageArr[Math.floor(Math.random() * messageArr.length)];

// Returns random inspirational quote from one of the five arrays.
const randMessage = (msg) => {
    let arrLength = msg.length;
    let arrRand = Math.floor(Math.random() * arrLength);
    return msg[arrRand];
 };

 console.log(randMessage(message));
 