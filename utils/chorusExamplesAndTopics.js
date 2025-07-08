const choruses = [
  `So stick to me
  Stick to me like caramel
  Walk beside me till you feel nothin' as well
  I'm fallin' free of the final parallel
  The sweetest dreams are bitter
  But there's no one left to tell`,
  `Come on, come on
  Out from underneath who you were
  Come on, come on now
  You know that it's time to emerge`,
  `Raise me up again
  Take me past the edge
  I want to see the other side
  Won't you show me what it's like?
  Won't you show me what it's like?`,
  `When the river runs dry and the curtain is called
  How will I know if I can't see the bottom?
  Come up for air and choke on it all
  No one else knows that I've got a problem
  What if I can't get up and stand tall?
  What if the diamond days are all gone
  And who will I be when the empire falls?
  Wake up alone and I'll be forgotten`,
  `My, my, those eyes like fire
  I'm a winged insect, you're a funeral pyre
  Come now, bite through these wires
  I'm a waking hell and the gods grow tired
  Reset my patient violence along both lines of a pathway higher
  Grow back your sharpest teeth, you know my desire`,
  `I was more than just a body in your passenger seat
  And you were more than just somebody I was destined to meet
  I see you go half-blind when you're looking at me
  But I am
  Between the secondhand smoke and the glass on the street
  You gave me nothing whatsoever but a reason to leave
  You say you want me, but you know I'm not what you need
  But I am`,
  `And just like the rain
  You cast the dust into nothing
  And wash out the salt from my hands
  So touch me again
  I feel my shadow dissolving
  Will you cleanse me with pleasure?`,
  `She's not acid nor alkaline
  Caught between black and white
  Not quite either day or night
  She's perfectly misaligned
  I'm caught up in her design
  And how it connects to mine
  I see in a different light
  The objects of my desire`,
  `You've got me in a chokehold
  You've got me in a chokehold
  You've got me in a chokehold
  You've got me in a chokehold`,
  `And I believe
  That somewhere in the past
  Something was between
  You and I, my dear
  And it remains
  With me to this day
  No matter what I do
  This wound will never heal`
];

export const chorusExamples = choruses.map((chorus, i) => `Chorus ${i + 1}:\n${chorus}`).join("\n\n"); 

export const topics = {
  0: "ANY TOPIC",
  1: "LOVE",
  2: "DEATH",
  3: "BREAK UP",
  4: "LONELINESS",
  5: "BETRAYAL",
  6: "HEARTBREAK",
  7: "MANIPULATION"
}; 