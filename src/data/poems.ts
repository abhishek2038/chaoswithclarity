// ─────────────────────────────────────────────────────────────────────────────
// src/data/poems.ts  —  Chaos With Clarity · All Poems & Essays
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD A POEM
// 1. Find the right section in the `sections` array below.
// 2. Copy any existing poem entry from that section's `poems` array.
// 3. Paste it at the top (newest) or bottom (oldest) of the array.
// 4. Fill in: id, title, date, preview (3–4 opening lines), text (full poem).
// 5. Save. The writings page updates automatically.
//
// HOW TO ADD AN ESSAY
// 1. Find the `essays` array at the bottom of this file.
// 2. Copy an entry and update the fields.
// 3. Change status to 'published' and add a url when it's live.
//
// TEXT FORMATTING
//   Use \n  for a new line within a stanza.
//   Use \n\n for a stanza break (blank line).
// ─────────────────────────────────────────────────────────────────────────────

export interface Poem {
  id: string;          // URL-safe slug, e.g. 'just-a-man'
  title: string;       // Display title
  subtitle?: string;   // Optional subtitle shown in italics, e.g. '(Anahata Nada)'
  date: string;        // Display date, e.g. 'February 2026'
  preview: string[];   // 3–4 lines shown on the card (no formatting needed)
  text: string;        // Full poem — \n = new line, \n\n = stanza break
  reflection?: string; // Personal note shown at bottom of modal
  series?: string;     // Series name, e.g. 'Forest of Consciousness'
  seriesPart?: string; // e.g. 'Part I'
  taster?: boolean;    // true = full poem visible on website; false = preview only, drives to shop
}

export interface Section {
  id: string;       // HTML anchor id
  num: string;      // Display number, e.g. '01'
  label: string;    // Section title, e.g. 'Being Human'
  subtitle: string; // Section description
  accent: string;   // CSS variable for color, e.g. 'var(--gold)'
  poems: Poem[];
}

export interface Essay {
  id: string;
  title: string;
  description: string;
  snippet?: string;   // Opening teaser paragraph shown on the card
  status: 'coming-soon' | 'published';
  url?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

export const sections: Section[] = [

  // ── I. BEING HUMAN ──────────────────────────────────────────────────────────
  {
    id: 'being-human',
    num: '01',
    label: 'Being Human',
    subtitle: 'On mortality, ego, identity, and what it means to be alive.',
    accent: 'var(--sec-human)',
    poems: [
      {
        id: 'just-a-man',
        title: 'Just a Man',
        taster: true,
        date: 'February 2026',
        preview: [
          'I am just a man, yet I forget,',
          'My glory lasts only till I am not dead,',
          'The wars I rage, the humanity I kill,',
          'The possessions I gather, the animal will,',
        ],
        text: `I am just a man, yet I forget,\nMy glory lasts only till I am not dead,\nThe wars I rage, the humanity I kill,\nThe possessions I gather, the animal will,\n\nIn all this, I forget, I am just a man,\nTrue to none, a slave to emotion's plan,\nI learn only when death comes near,\nWhen every cell is trembling with fear,\n\nWhen time is mine, I choose to ignore,\nToo busy hustling, wanting more,\nI am just a man, time reminds,\nOr sometimes, when I have been kind,\n\nOtherwise an animal, armed with sense and skill,\nDestroying what infinite intelligence built,\nI am just a man, I must remind,\nEach passing second, to choose to be kind.`,
      },
      {
        id: 'the-incomprehensible-delight',
        title: 'The Incomprehensible Delight',
        taster: true,
        date: 'February 2026',
        preview: [
          'Religion divides, and man still fights,',
          'Unaware of this incomprehensible delight,',
          'If there were a creator, it would make sense in sight,',
          'And so would every man\'s fight,',
        ],
        text: `Religion divides, and man still fights,\nUnaware of this incomprehensible delight,\nIf there were a creator, it would make sense in sight,\nAnd so would every man's fight,\n\nYet the intelligence, the scale, the veil,\nIs far beyond the mind and what it can avail,\nI am just a man, fighting for gods,\nNever realizing they are only thoughts,\n\nIn a sea of streams, just a passing tide,\nNothing more than seconds do I abide,\nIf I could be more, oh how I wish,\nBut time is brief, it grants no more than this,\n\nMy possessions, my success, what I call my own,\nClaiming a god I have never known,\nKnow the real, keep your feet on the ground,\nClouds move the sky without a sound,\n\nI roar, I scream, create havoc and lore,\nFighting for a god who never lived before,\nYet still the wars rage, the cycle persists,\nHumanity dies for imagined bliss,\n\nReligion divides, and man still fights,\nUnaware of this incomprehensible delight.`,
      },
      {
        id: 'unapologetically-me',
        title: 'Unapologetically Me',
        taster: true,
        date: 'February 2026',
        preview: [
          'I am insane, so what — it\'s still me,',
          'I am kind, it hurts sometimes, but still me,',
          'I am foolish, so what — it still brings peace,',
          'I am clever, so what — it makes me do deeds,',
        ],
        text: `I am insane, so what — it's still me,\nI am kind, it hurts sometimes, but still me,\nI am foolish, so what — it still brings peace,\nI am clever, so what — it makes me do deeds,\n\nI lie, yet I say the truth,\nI get angry, but ask forgiveness the second I see the ruse,\nI am me above anything else,\nAll labels just words, but not myself,\n\nI am this and I am that, yet I live every breath,\nI am open to what life brings without a dread,\nI change my heart to still have a fresh start,\nI make mistakes — so what?\n\nI am human and not the best — so what?\nIn all these whats and whys, I live as I please,\nOpen my heart, be vulnerable, then at ease,\nI keep moving and yet find myself still,\n\nTo make myself experience the unknown thrill,\nIn pain or crisis, I find new depths,\nWhether sad or happy, till I am not dead,\nI ask this question to everyone at last —\n\nWill you swap your life with someone,\nOr would you rather be yourself and have a fresh start?`,
      },
    ],
  },

  // ── II. THE INWARD TURN ─────────────────────────────────────────────────────
  {
    id: 'the-inward-turn',
    num: '02',
    label: 'The Inward Turn',
    subtitle: 'On meditation, awareness, the observer, and quiet reflections.',
    accent: 'var(--sec-inward)',
    poems: [
      {
        id: 'bare',
        title: 'Bare',
        taster: true,
        date: 'March 2026',
        preview: [
          'Breathe in the sun,',
          'Breathe out the ocean.',
          'Walking on water,',
          'Swimming on the earth.',
        ],
        text: `Breathe in the sun,\nBreathe out the ocean.\nWalking on water,\nSwimming on the earth.\n\nEverything bare as it always was,\nNothing to hide, nothing to blush.\nNot just in words but in actions and deeds,\nDoing only what the quiet heart pleads.\n\nNo sorry, no apologies, just pure me,\nMaybe crazy, sinister, or simply free.\nLiving in my own skin and the world of thought,\nWatching passing clouds the tides of time brought.\n\nNo games, no muse,\nJust silence the loudest, if you choose.\nTalk to me as you would to yourself,\nHold that same grace — you are the one blessed.\n\nDon't care, don't pretend,\nIf you choose kindness, carry it till the end.\nWhatever others do is their own road,\nI am here to make every place my home.\n\nBeyond conditioning and society's claim,\nThey teach us to bow, to walk with shame.\nBut the river of time and the stream of mind\nFlow without asking what they will find.\n\nStep inside and they carry you far,\nSpilling your depths like an uncorked jar.\nWhat lives within begins to show,\nThe quiet truths you rarely know.\n\nJudgment or choice, that part is your own,\nYet what are we but opinions and bone?\nStrip it all back and walk with me bare,\nWhen the heart is pure, there is no stare.\n\nWhen the heart is open and utterly free,\nThere is no watcher, no watched to see.`,
      },
      {
        id: 'a-life-of-joy',
        title: 'A Life of Joy',
        date: 'March 2026',
        preview: [
          'A life of joy, a life of smiles,',
          'Yet pain and sadness walk their miles.',
          'Morning bends with breath and sky,',
          'Wheels turning slowly as clouds drift by.',
        ],
        text: `A life of joy, a life of smiles,\nYet pain and sadness walk their miles.\n\nMorning bends with breath and sky,\nWheels turning slowly as clouds drift by.\nUnder trees I breathe and move,\nEvenings arrive with a wandering groove,\nArms wide open, hugging the breeze,\nListening softly to rustling leaves.\n\nI swim, I lie where grasses sway,\nWatching the quiet theatre of the day.\nLong roads hum beneath slow tires,\nCoffee and music feeding small fires.\n\nI read, I write, I create, I start,\nThen break it all and return to the heart.\nEvery morning a gentle surprise,\nTo wake as myself beneath open skies.\n\nSeconds arrive and quietly flow,\nNothing to chase, nowhere to go.\nJust life unfolding breath by breath,\nA dance between silence and death.\n\nNo liquor to blur the passing hours,\nNo gossip scattered like withering flowers.\nNo noise of minds that endlessly spin,\nJust silence singing somewhere within.\n\nFriends appear like clouds in the blue,\nThen drift away as all things do.\nNothing so worthy to cling and cry,\nEven the closest must someday fly.\n\nI meditate, I watch, I feel, I see,\nThe quiet witness learning to be.\nI observe the theatre the mind creates,\nHow joy and sorrow arrive as mates.\n\nSlowly I see through the shifting play,\nThe masks I wore begin to fray.\nQuestions knock and answers appear,\nYet both dissolve when the mind grows clear.\n\nLet the answer come, then let it fall,\nLet even the question fade from the call.\n\nWhat then remains in the silent sea?\nPerhaps a faint reflection of me.\n\nBut soon even that dissolves away,\nLike mist retreating before the day.\nNo I to claim, no name to hold,\nNo story left to guard or mold.\n\nJust presence breathing quiet and free,\nA boundless stillness learning to be.\n\nWhatever arrives I gently abide,\nNo need to resist the turning tide.\n\nI have walked depths the heart can reach,\nThe peaks feel smaller than I once believed.\n\nLive and let life carry the light,\nNever dim another's sight.\n\nFor what I feel the world reflects back,\nA mirror of harmony or lack.\n\nAnd when the heart grows steady and clear,\nNo complaint remains, no shadow of fear.`,
      },
      {
        id: 'the-observer-awakens',
        title: 'The Observer Awakens',
        taster: true,
        date: 'April 2025',
        preview: [
          'Everything was the same —',
          'The cold breeze and the beautiful rain,',
          'The sunrise just as bright,',
          'And the sunset brought the same delight.',
        ],
        text: `Everything was the same —\nThe cold breeze and the beautiful rain,\nThe sunrise just as bright,\nAnd the sunset brought the same delight.\nBut something inside was changing — gaining pace;\nIt took its time — and when it came, it left me amazed.\n\nThe doer was shifting from his task,\nStepping away from life's contrast.\nThe observer was growing, looking around,\nDrowning in peace and beauty — inside and out — without a sound.\n\nAll the anger, the frustration, remain,\nBut they don't touch me; they're not part of me — they're just the same.\nThe observer sat quietly and abided,\nWhile traffic moved slowly — and yet, I felt no fright inside it.\n\nIt felt like reaction had ceased —\nNow only action would be released.\nThe things that once brought anxiety and strain\nNow simply knew their place — without resistance, without pain.\n\nNo hurry, no fight, everything in its rightful time —\nAs perfect as the rhythm of my heart in this quiet rhyme.\nThis is what meditation has brought about:\nIt has begun to silence the thoughts,\nAnd slowly,\nThe doubt.`,
      },
      {
        id: 'the-music-stopped',
        title: 'The Music Stopped',
        date: 'May 2025',
        preview: [
          'The music stopped,',
          'But I couldn\'t stop dancing.',
          'The legs moved on their own,',
          'Just in awe and pounding.',
        ],
        text: `The music stopped,\nBut I couldn't stop dancing.\nThe legs moved on their own,\nJust in awe and pounding.\n\nThe breath slowed\nWith every sigh.\nThe heart roared —\nAnd there was no cry.\n\nTime flew,\nThe sun came and went by,\nBut there was something amiss,\nWithout any questions or why.\n\nWas it a dream or lucidity while awake?\nLife now was not just a maze.\nSunrise to sunset,\nWaiting for the stars —\nThe heart kept pounding\nTo see people smiling,\nTheir faces turned to stars.\n\nThe "I" and "you" all becoming one,\nTime felt like no concern.\nThe beauty in ugliness melted like a craze;\nNothing really mattered —\nWhether we called it night or day.\n\nI just wanted to be with the breath\nAnd the pounding heart.\nI was me,\nBut the recognition didn't last.\nIt all seemed the same, yet different — like contrast.\n\nThe music resumed,\nBut the dance had stopped.\nThe legs, which were moving of their own accord —\nNow still.\nJust a sigh,\nAnd a feeling of relief:\nThe dream was over —\nAnd yet, there was no "me."`,
      },
      {
        id: 'unstruck-silence',
        title: 'Unstruck Silence',
        subtitle: '(Anahata Nada)',
        date: 'February 2026',
        preview: [
          'It starts but never ends,',
          'It is just life, nothing to amend.',
          'Silence is louder than noise,',
          'Once you hear it, it abides.',
        ],
        text: `It starts but never ends,\nIt is just life, nothing to amend.\n\nSilence is louder than noise,\nOnce you hear it, it abides.\n\nAnahata Nada, it is said,\nThe uncreated sound that spreads.\nNot from anywhere near or far,\nAlways present, revealing scars.\n\nContradiction is life's way of being,\nFighting it is simply fleeing.\n\nGive your heart a pause,\nBreathe in and listen to the cosmos.\nIt enters you and penetrates deep,\nMaking every restless cell sleep.\n\nI know it sounds absurd,\nThat is why words feel blurred.\n\nIt starts but never ends,\nIt is just life, nothing to amend.\n\nEmpty the weight you carry in your heart,\nJust be, and let silence be the start.\n\nA start not of something new,\nBut something in you you always knew.\n\nYou are so small, yet vast the roles you play,\nTrying to be more as life slips away.\n\nTo be ahead is just a ruse,\nYour breaths are counted, if you choose to view.\n\nSee what you truly hold,\nLet go of wanting, and be bold.\n\nLet silence become your home,\nBe less, not more.\n\nBe less, not more.`,
      },
      {
        id: 'feeling-a-lot',
        title: 'Feeling a Lot',
        date: 'March 2026',
        preview: [
          'Feeling a lot, there\'s no stop,',
          'Want to cry, but tears stay dry,',
          'Emotions at war, but peace still soars,',
          'Not outside — it lives in my core.',
        ],
        text: `Feeling a lot, there's no stop,\nWant to cry, but tears stay dry,\nEmotions at war, but peace still soars,\nNot outside — it lives in my core.\n\nA stranger's smile, a child's bright eyes,\nThe warmth of a stray cat in the night,\nSo much shifts in a moment's time,\nThe inside vast, laughter feels right.\n\nWas in the waters, now at the shore,\nWatching sunsets, needing nothing more.\n\nWhat will happen? Does it matter now?\nTears or laughter, just allowed.\n\nFelt a lot, and then a stop.\nWhen the observer rises, everything pauses.`,
      },
      {
        id: 'the-watcher',
        title: 'The Watcher',
        date: 'December 2024',
        preview: [
          'Daily I find, during the day I become unkind,',
          'Mind takes over and loses divine,',
          'Creates a mess and fills me with stress,',
          'A wave of sadness and pain takes over the brain,',
        ],
        text: `Daily I find, during the day I become unkind,\nMind takes over and loses divine,\nCreates a mess and fills me with stress,\nA wave of sadness and pain takes over the brain,\n\nI sometimes feel a bang,\nReally don't know what to do or where I belong,\nThen I start observing the mind,\nIt's like it's not my friend but an enemy of some kind,\n\nBut with the observation, the ripple settles,\nIt becomes a pool of calm water with no ongoing battle,\nThe more I see, the more I realize,\nI am just a watcher who has to sit by the side,\n\nLet it go on as it likes — if I don't react, there is no fight,\nIf I don't react, there is no fight.`,
      },
      {
        id: 'let-the-body-sync',
        title: 'Let the Body Sync',
        date: '2025',
        preview: [
          'I take a few breaths,',
          'My heart ponders and wants rest,',
          'Not from the chase or grind,',
          'But to be still and just be kind,',
        ],
        text: `I take a few breaths,\nMy heart ponders and wants rest,\nNot from the chase or grind,\nBut to be still and just be kind,\nKind to my own self,\nTo feel the sync and how body and mind connect,\nThe integration begins within,\nThe universe then aligns and spins,\nSpewing out all I want,\nStripping away the inessential thoughts,\nJust be and the moment in time,\nNo rush to be ahead in line,\nWalk with my own pace,\nKnowing I always have grace,\nI move the earth and stars,\nWhen I am me and the cosmos just a macrocosm of my own heart.`,
        reflection: 'This poem came from a morning when I was exhausted — not from doing too much, but from trying too hard to become something. The body knows things the mind refuses to accept. When I finally stopped striving and just breathed, everything settled.',
      },
      {
        id: 'beyond-words',
        title: 'Beyond Words',
        date: '2025',
        preview: [
          'I see language is just words,',
          'Assigned meaning to not be absurd.',
          'Sharing ideas and experiences, it\'s all,',
          'But as we humans evolve,',
        ],
        text: `I see language is just words,\nAssigned meaning to not be absurd.\nSharing ideas and experiences, it's all,\nBut as we humans evolve,\nLies and deceit those words conceal.\nThinking overrides what we feel.\nThe energy, the heart, not real things,\nBut our motives and desires, it seems.\nDividing and spreading a deep scar,\nI am this and they are different from what we are.\nBeneath it all, the hearts beat the same,\nFeel the energy, not what words claim.\nYou will find the same ignite,\nSame humans, just different sight.\nExpand yourself beyond the words,\nLet us be one beyond these mere words.\n\nOh! So I wish I could speak it aloud,\nBut then again they are words, no doubt.\nJust stillness and a kind smile,\nA deep caress for humans and all life.\nIt could work wonders and be heard,\nMore genuine, not absurd.\nBut for this, it has to start,\nLet it be from my own heart.`,
        series: 'The Mirror',
        seriesPart: 'Part I',
        reflection: 'Language is the first filter. Before we can see ourselves or others clearly, we have to notice how much words get in the way — dividing, labelling, distorting. This is where the trilogy begins: with the quiet realisation that what we say is never quite what we mean.',
      },
      {
        id: 'the-mirror',
        title: 'The Mirror',
        date: 'February 2026',
        preview: [
          'See yourself in the mirror and identify,',
          'Are those really you and your beautiful eyes?',
          'Beautiful they seem from outside,',
          'But it\'s your perspective, not the sight.',
        ],
        text: `See yourself in the mirror and identify,\nAre those really you and your beautiful eyes?\nBeautiful they seem from outside,\nBut it's your perspective, not the sight.\n\nYou have changed and grown a lot,\nThe body tells you, but maybe your heart not.\nI see the kindness of time,\nIt evolves us without a whine.\n\nWhen I look in the mirror, I want to see\nThe way I see myself — and not from the world I flee.\nI will be me, just give me time.\nOh fool, you never know what's your crime.\n\nThis moment is all you have,\nYou are changing every passing breath.\nRealize the beauty of it now,\nOtherwise just look in the mirror and bow.\n\nRespect yourself but don't be proud,\nThrow away all your doubts.\nWhat is in you, you see outside,\nMirror just a reflection and not a sight!`,
        series: 'The Mirror',
        seriesPart: 'Part II',
        reflection: 'Having questioned the language we use, we turn it inward. The mirror doesn\'t lie — but we do, every time we look and see what we expect rather than what\'s there. This poem is about learning to look honestly, without the filter of who we think we should be.',
      },
      {
        id: 'the-right-eyes',
        title: 'The Right Eyes',
        taster: true,
        date: '2025',
        preview: [
          'Have seen a lot of eyes,',
          'But nothing so mesmerising where depth abides.',
          'Reflection of pain and suffering in life,',
          'But kindness and the sparks it ignites.',
        ],
        text: `Have seen a lot of eyes,\nBut nothing so mesmerising where depth abides.\nReflection of pain and suffering in life,\nBut kindness and the sparks it ignites.\nThen a thought passes by,\nLife is beautiful, just need the right eyes!`,
        series: 'The Mirror',
        seriesPart: 'Part III',
        reflection: 'The trilogy closes simply — not with philosophy, but with sight. When the words fall away and the mirror is honest, what remains is just a way of seeing. Life is beautiful. You just need the right eyes.',
      },
      {
        id: 'the-seed',
        title: 'The Seed',
        date: '2026',
        preview: [
          'I am just getting started,',
          'not to become successful or known,',
          'just peeling layer on layer,',
          'to return back home.',
        ],
        text: `I am just getting started,\nnot to become successful or known,\njust peeling layer on layer,\nto return back home.\nThe conditioning of time,\nI didn't choose,\nthe crimes society committed against me in its ruse,\nthey called it culture, schooling, and what not,\nthey killed the real me without a thought.\nA flower that could have bloomed,\njust with love and care,\nbut the so-called benefactors\nlooked with disgrace and snare.\nThe fruit of life could have been sweet,\nnow I peel it layer by layer\nto find the seed.\nThe seed to be planted,\nso it can grow,\nreceive all the love,\nacceptance, no guilt, no shame —\nthe kind I know.\nA tree where all life could feel joy,\nbirds chirping their morning song,\ntired souls resting beneath,\nmonkeys swinging all day long.\nSo many more trees, grown from its seed,\nnatural, spontaneous, alive,\nnot of validation or greed.\nPlant such a garden,\nbutterflies drifting by,\njust a look, just a feeling,\nto make you cry with joy.`,
        series: 'Forest of Consciousness',
        seriesPart: 'Part I',
        reflection: 'Before the forest, before the awakening — there is the seed. The peeling back of conditioning, the search for what was always true beneath it all.',
      },
      {
        id: 'i-am-that',
        title: 'I Am That',
        date: '2025',
        preview: [
          'Day begins, just a hearty smile to the sun,',
          'Rays of light and hope return,',
          'Each passing moment, second to none,',
          'Every second, I stay in the now as one,',
        ],
        text: `Day begins, just a hearty smile to the sun,\nRays of light and hope return,\nEach passing moment, second to none,\nEvery second, I stay in the now as one,\nAll doubts vanish, even the how,\nNo misery and pain to bow,\nThoughts still there like the clouds,\nWaiting for rain, relief it shouts,\nWhy do I run this maze,\nLost in my mind, or just a craze,\nTurning slowly, days go by,\nDoubts, misery all by the side to creep and cry,\nThen again I return to the now,\nSmiling at a dream the mind created somehow,\nThough I was wide awake,\nFelt like nightmares waiting to break,\nBreaking from inside, just like a cocoon,\nWaiting like a butterfly, to bloom soon,\nLost in the stillness of the rays,\nThey bestowed something the heart craves,\nIf I could expand myself out,\nI am the consciousness, I am that,\nJust need to realize, and know that,\nWhich created all this, abstract and vast,\nAs the moon slowly burns,\nInside the home I return!!`,
        series: 'Forest of Consciousness',
        seriesPart: 'Part II',
        reflection: 'The seed has been found — now the poet moves through the mind\'s noise and returns, arriving at the realisation: I am the consciousness, I am that.',
      },
      {
        id: 'forest-of-consciousness',
        title: 'Forest of Consciousness',
        date: '2025',
        preview: [
          'On a search, lost in the forest of consciousness,',
          'Thoughts falling like rain,',
          'Flooding the ground with pain,',
          'Which path is mine, I know,',
        ],
        text: `On a search, lost in the forest of consciousness,\nThoughts falling like rain,\nFlooding the ground with pain,\nWhich path is mine, I know,\nGreen, or buried under snow?\nI can't find the start,\nMisery, I know my path,\nOr so I believe, to give this heart relief.\nThe end is near but the start is far,\nIt's like the moon and the stars,\nThe sun doesn't burn me — my own thoughts inflame,\nNo one to blame, yet I feel the world's the same,\nTrying to catch the rainbow,\nThough it doesn't exist, I know,\nIllusions all around, silence louder than sound,\nJust one ray of light, one peak in sight,\nFrom where I can leap, out of this sleep,\nLost to be found, rooted in my own ground,\nPlanted the trees myself, in this forest of consciousness.`,
        series: 'Forest of Consciousness',
        seriesPart: 'Part III',
        reflection: 'The poet is lost inside the mind\'s own forest — and realises, at the end, that he planted the trees himself.',
      },
      {
        id: 'the-journey',
        title: 'The Journey',
        date: '2025',
        preview: [
          'The journey is long, but there\'s a start,',
          'The journey to myself, to my own heart.',
          'It begins in time, though timeless,',
          'It\'s a journey of miles, without a step.',
        ],
        text: `The journey is long, but there's a start,\nThe journey to myself, to my own heart.\n\nIt begins in time, though timeless,\nIt's a journey of miles, without a step.\n\nThe more I travelled, the farther I got,\nThe more I thought, time didn't stop.\n\nIt had to begin, not somewhere far,\nThe day I stopped chasing, looked at my own scar.\n\nThe journey of eternity, the journey of lives,\nThe journey of a river, nowhere it resides.\n\nFrom a small waterfall to the sea,\nFrom sea to the clouds no one can see.\n\nA journey of a moment, yet eternities went by,\nThe journey of joy, but filled with cries.\n\nNot the journey that society preaches,\nThe journey to discover it's beyond your reaches.\n\nThe journey of sun and earth in the sky,\nLooks like a chase with everything spinning by.\n\nThe journey home, deep within myself,\nThe journey of oneness, from heaven to hell.\n\nThe journey of a million thoughts\nThat occupy my mind,\nThe journey of stillness\nWith no thoughts to bind.\n\nThe journey of love, the journey of bliss,\nPause, breathe, in the moment so you don't miss.`,
        series: 'Forest of Consciousness',
        seriesPart: 'Part IV',
        reflection: 'After planting the seed, recognising the self, and wandering the forest — what is the journey itself? Not outward, not even inward, but the movement of a river that arrives nowhere and everywhere.',
      },
    ],
  },

  // ── III. PAIN & TRANSFORMATION ──────────────────────────────────────────────
  {
    id: 'pain-and-transformation',
    num: '03',
    label: 'Pain & Transformation',
    subtitle: 'On suffering, grief, darkness, and the slow work of healing.',
    accent: 'var(--sec-pain)',
    poems: [
      {
        id: 'what-to-do-with-the-pain',
        title: 'What to Do with the Pain',
        date: 'January 2026',
        preview: [
          'What do I do with the pain that aches my chest,',
          'The feeling of being nothing like the rest,',
          'A cry that runs deep — no tears, no sound,',
          'Slowly killing me with every sigh I\'ve found.',
        ],
        text: `What do I do with the pain that aches my chest,\nThe feeling of being nothing like the rest,\nA cry that runs deep — no tears, no sound,\nSlowly killing me with every sigh I've found.\n\nThen come moments, exhilarating, rare,\nTeaching me why this pain returns, why it's there.\nUnfulfilled hopes, half-lived dreams haunt my sleep,\nI snap sometimes — even when I don't mean to speak.\n\nMaybe I need healing, maybe just to stay,\nMaybe travel far, forget what I can't say.\nEscape once worked — it carried me through time,\nUntil the pain asked me to sit with it, make it mine.\n\nTo see its real face, its quieter side,\nNot hiding or running — just holding it tight.\nLet it dissolve, right down to the core,\nMaybe with it, I'll become something more.\n\nStill my chest aches, the heart feels heavy and worn,\nLiving like this, trying to be smart, yet torn.\nLosing each game before it can start,\nI'd rather be a fool than play a borrowed part.\n\nI'd rather not know the rules they all play by —\nThan win a game I cannot justify.\nTo lose myself in deeds that seem naive,\nBut last longer than victories I don't believe.\n\nThis pain was never here to ruin my way,\nJust a reminder to stay with myself, to stay.\nTo accept who I am — no masks, no tests,\nTo accept who I am, and not follow the rest.`,
      },
      {
        id: 'a-gloomy-day',
        title: 'A Gloomy Day',
        taster: true,
        date: 'February 2025',
        preview: [
          'Today, it\'s a gloomy day,',
          'A hundred questions run through my mind, non-stop like a craze.',
          'I lost a friend — someone I knew from childhood and life.',
          'He was unique, an introvert, but with a heart as pure as the sky.',
        ],
        text: `Today, it's a gloomy day,\nA hundred questions run through my mind, non-stop like a craze.\nI lost a friend — someone I knew from childhood and life.\nHe was unique, an introvert, but with a heart as pure as the sky.\n\nWe hadn't talked much in recent times, yet he was always close.\nThough he is gone now, he somehow feels nearer to me.\nHe now abides in my heart and flies freely in the sky.\n\nThe stress and pressure of modern life became a strife.\nThe family, once so close, turned into the knife.\nThe pain, so unbearable, cut instead of healed,\nDriving in the bullet it should have removed, leaving him to bleed.\n\nHe never shared his troubles — not with those far or near.\nHe simply walked into the sea, and disappeared.\n\nI've been acting all logical, but now it's making me sad.\nI lost someone who always felt like a true friend —\nSomeone I was glad to know and have.\nNow, all that remains are memories and regrets —\nRegrets that I wasn't there,\nThat maybe, just maybe, as a friend, I could have helped him share his pain.\n\nToday's society and this endless chase feel futile,\nWhen a loving, kind soul can only abide and smile.\n\nI have no words for what's happening within me,\nNo words to describe this aching space.\nIn the end, I have just one wish —\nMay he find peace in a better place.\n\nA place full of love and tranquility, in the world beyond worlds.\nAnd if ever anyone feels this way,\nI am here — to listen, to hold,\nTo be a space where hearts can heal and turn whole again.`,
      },
      {
        id: 'let-me-breathe-today',
        title: 'Let Me Breathe Today',
        taster: true,
        date: 'October 2024',
        preview: [
          'Let me breathe today, let me be conscious,',
          'Let me be free today, let me be outrageous,',
          'Let me feel the pain I keep hiding,',
          'Let me kiss a plant today I keep avoiding,',
        ],
        text: `Let me breathe today, let me be conscious,\nLet me be free today, let me be outrageous,\nLet me feel the pain I keep hiding,\nLet me kiss a plant today I keep avoiding,\n\nLet me be me without any validations,\nLet me express myself without any questions,\nIf I could live like this for a moment,\nI have lived it all — there remains no obligation,\n\nIf I die, I don't want to be remembered —\nIf I live today, I want to be truly felt — not admired.\nIf I could bring a small change, I have done my part,\nIf I make someone smile today, I have been kind to my own heart,\n\nIn all those dreams and aspirations, there was a selfishness I couldn't see,\nMy well-wishers, instead of telling me to let it be,\nCheered: run after all the things you will regret,\nKeep skipping life like everyone and die with a heart that's sad,\n\nHope for a new life, begin it all anew,\nForget the past and run to the future shining like a hue,\nMy heart said, it will be the same in the future as it was in the past,\nIf you can't feel the fresh air today and the dew on the morning grass,\n\nEach breath felt is what you actually lived,\nBeing present to every second this life brings,\nBeing afraid you will lose what you have —\nIf you can appreciate each second without dread,\n\nI am what I am, I will always be,\nI don't want to imagine what I could be,\nLet me accept the now and myself as it is,\nMaybe I realize how perfect it all is,\n\nNothing could have been better — it's my journey,\nA journey not to become,\nA journey to just be, and shed what the world unto me has done,\nLet me breathe today, let me be conscious,\nLet me be free today, let me be outrageous.`,
        reflection: 'This is the poem I come back to when I start performing life instead of living it. There\'s a difference between having a life and feeling it. This is about choosing to feel it — even the uncomfortable parts, especially the uncomfortable parts.',
      },
      {
        id: 'the-storm-within',
        title: 'The Storm Within',
        date: 'January 2025',
        preview: [
          'A storm is rising inside me,',
          'Though I am quiet on the outside.',
          'In this modern world that distracts to abide,',
          'I just want to be and feel this storm,',
        ],
        text: `A storm is rising inside me,\nThough I am quiet on the outside.\nIn this modern world that distracts to abide,\nI just want to be and feel this storm,\nTo see if it's here to hurt, or is it something I've long known.\n\nThough familiar to me for ages, now it feels unknown.\nMaybe it has come back one last time before it finally goes.\nI don't want to chase things that turn me away.\nThe mind wants to run, but the heart says, "Stay."\n\nIt's the dark before the sunrise,\nFeel it to the core — it will make you anew.\nIt's the first step to a life you wish you knew.\nThe peace you wear outside is starting to grow within,\nAnd through some pain and strife, you might actually win.\n\nMaybe you'll shed the weight you've carried from the start.\nMaybe this is the end of what kept your soul in the dark.\nSo I stay, to watch it as my friend,\nAnd even if it's my enemy, who says it's wrong in the end?\n\nFriend and foe are two sides of one coin:\nSome help you grow,\nWhile others make your inner being shine.\n\nAs in the sea, the ebbs amplify the flow —\nIf you let life be, it may grant more than your dreams bestow.`,
      },
      {
        id: 'seed-in-the-dark',
        title: 'Seed in the Dark',
        taster: true,
        date: 'February 2026',
        preview: [
          'Feeling clueless, will there be light?',
          'As I move through the cave of life,',
          'It gets darker as I move inside,',
          'No ray, no hope in sight.',
        ],
        text: `Feeling clueless, will there be light?\nAs I move through the cave of life,\nIt gets darker as I move inside,\nNo ray, no hope in sight.\n\nBut a seed blooms in the dark,\nIt's pure darkness until it sparks.\nThen it shoots towards the sun,\nTrying to become one.\n\nDays can feel heavy, even more than night,\nI have the spark, just need to ignite.\nNo one knows the powers resting in plain sight.\nA moment comes when thunder and lightning strike.\n\nI am in my shell, just gathering the will to fight,\nBut at last, it's pure surrender and no delight,\nTo take all the suffering I could without a roar,\nTo bloom when time has tested what I stood for.\n\nLet my pain grow quiet gardens for other life,\nTheir fragrance a gift of quiet light.\n\nFeeling clueless, days sometimes seem darker than night,\nJust need to take a few more steps till I find the light.`,
      },
      {
        id: 'life-screams',
        title: 'Life Screams',
        date: 'August 2025',
        preview: [
          'Life is so hard that it screams,',
          'Just for us to know what it means,',
          'Everyone we meet and it stirs',
          'The emotions that lay beneath, for years unheard,',
        ],
        text: `Life is so hard that it screams,\nJust for us to know what it means,\nEveryone we meet and it stirs\nThe emotions that lay beneath, for years unheard,\n\nWhen we get angry, it seems the other did bad,\nBut really, is the other all we had?\nIt was something we needed to fix in us,\nBut we go out and play with the dirt,\n\nJust reflect and you will find\nIt's your darkness you're afraid and ashamed to bind,\nBind with yourself and integrate as you,\nLife brings all the events to make us true,\n\nFind the pieces buried beneath,\nLift the weight and live with ease,\nBut it's easy to blame rather than reflect,\nGo on with sadness and neglect,\n\nMaybe someday when we find\nIt was all part of us that the universe synchronized for us to unwind,\nGet the oxygen to the layers we built,\nWhen air breathes, the tree can come from the seed,\n\nSeed of awareness and pure consciousness inside,\nIt will grow as it gets light,\nThe shade is needed for it to bloom,\nThe shadow will be integrated as part of it soon,\n\nDon't be mad when the outside makes you roar,\nGo to the source, find the true ore,\nFrom where all this comes and to where it goes,\nOnly then will you go beyond what you call yourself,\n\nBe the one beneath these layers of hell,\nFind the true joy and your own neglected parts,\nGive life a fresh breath with this new start.`,
      },
      {
        id: 'no-moon-full-moon',
        title: 'No Moon, Full Moon',
        date: 'December 2024',
        preview: [
          'Let the no-moon days be your highs,',
          'When full moon comes, you are just more bright,',
          'To be in the darkness and be the light,',
          'Makes us human once we realize.',
        ],
        text: `Let the no-moon days be your highs,\nWhen full moon comes, you are just more bright,\nTo be in the darkness and be the light,\nMakes us human once we realize.\n\nDays are passing as earth moves around,\nTime becomes a memory, nowhere to be found,\nRealizing our own happiness and light is the way to grow,\nBeing abided in ourselves in the world of highs and lows,\n\nThe mind plays games to make us move and react,\nLook at it with muse to come out of its effect,\nSlowly, slowly, the no moon becomes the full moon in our sight,\nThis reflection which shines inside gets more bright,\n\nBut still the dark days will come,\nLook at the stars to unbecome,\nThey provide the light on the darkest days,\nIf we can keep in our hearts the sun like coming out of blaze,\n\nIt's our story and only ours, with an internal fight,\nThe world only projects shadows — we are the light,\nLet people come and go as they please,\nStay true to yourself in difficulty and ease,\n\nLife will soon bloom like a flower from a seed,\nThose will be the days you will cherish and find peace in all your deeds.`,
      },
      {
        id: 'awake-or-dreaming',
        title: 'Awake or Dreaming',
        date: 'December 2024',
        preview: [
          'Am I dreaming or am I wide awake?',
          'It feels like past and future are something I can\'t shake,',
          'What happened has long gone,',
          'What will come is still unknown,',
        ],
        text: `Am I dreaming or am I wide awake?\nIt feels like past and future are something I can't shake,\nWhat happened has long gone,\nWhat will come is still unknown,\n\nMaybe if I live in the now, I can have a fresh start,\nMaybe I can feel the music of my beating heart,\nFor how long will it go on?\nFor how long will this breath last?\nFor how long will I diminish my own spark?\n\nIt all starts here and now,\nNo cry and no bow,\nTo everything of the earth,\nTo everything from heaven and above,\n\nSlowly, slowly, I find myself,\nSlowly, slowly, the moment spreads,\nIt spreads to the eternal time,\nI am nothing, but still — everything feels mine,\n\nWhen this feeling comes, it all becomes one,\nThe doubt goes out,\nI am wide awake — and the dream was just a shout,\nWake up, you fool, you are missing this moment to find yourself,\n\nThe moment when you can be nothing and have a glimpse of yourself,\nTo be sleeping while awake is the crime each human makes,\nRunning in dreams every time with a new chase,\nThe chase which takes nowhere is just like running in space,\n\nNothing gets better, nothing was worse in time,\nIt all becomes your true story — to find the one you have been looking to shine,\nLose yourself and you will find,\nYou are the prize and one of a kind.\n\nAm I dreaming or am I wide awake?\nIt feels like past and future are something I can't shake.`,
      },
      {
        id: 'the-walking-contradiction',
        title: 'The Walking Contradiction',
        date: '2025',
        preview: [
          'I am not nice, but I am kind,',
          'I see and observe, even when I am blind.',
          'Blind to the way people act, but not the intent,',
          'A softness in the heart, but the capacity to mend.',
        ],
        text: `I am not nice, but I am kind,\nI see and observe, even when I am blind.\nBlind to the way people act, but not the intent,\nA softness in the heart, but the capacity to mend.\n\nI am an introvert inside, but an extrovert by nature,\nI am pure in my heart, but not in stature.\nI am everything, yet nowhere,\nI am everywhere, but nothing in despair.\n\nI am a walking contradiction,\nA fleeting shadow, a vivid depiction.\nI am chaos wrapped in serenity,\nA fragile soul, yet infinity.\n\nI am the silence after the storm,\nThe shapeless mold, yet every form.\nI am a paradox that you can't define,\nA story unfinished, a journey divine.\n\nI am something, a puzzle undone,\nA spark in the dark, a rising sun.`,
        reflection: 'I wrote this when I was trying to explain myself to someone and realized — I can\'t. And that\'s okay. The contradiction is not a flaw. It\'s the whole point.',
      },
    ],
  },

  // ── IV. FREEDOM & BECOMING ──────────────────────────────────────────────────
  {
    id: 'freedom-and-becoming',
    num: '04',
    label: 'Freedom & Becoming',
    subtitle: 'On letting go, liberation, searching for self, and finding purpose.',
    accent: 'var(--sec-freedom)',
    poems: [
      {
        id: 'a-little-a-lot',
        title: 'A Little, A Lot',
        date: 'January 2025',
        preview: [
          'A little has been written,',
          'A lot more will pour.',
          'A little the mind perceives,',
          'A lot more awaits to explore.',
        ],
        text: `A little has been written,\nA lot more will pour.\nA little the mind perceives,\nA lot more awaits to explore.\n\nA little bit of love,\nYet a lot more jealousy and hate.\nA little time for ourselves,\nA lot more time wasted as slaves.\n\nA little is needed,\nYet a lot more we chase.\nA little has been given,\nBut a lot we embrace.\n\nA little of real people in our lives,\nA lot of fake friends and ties.\nA little of what we truly want,\nA lot of what pleases others' eyes.\n\nA little self-knowledge,\nA lot more of the world outside.\nA little of life,\nA lot more of fearing what death provides.\n\nA little of this world and humanity,\nA lot more of the afterlife's path.\nA little joy and gratitude,\nA lot more discontent in our hearts.\n\nA little fresh air,\nA lot more smoke and poison.\nA little silence,\nA lot more noise.\n\nLife moves on in endless compare,\nBlinded, we fail to see what's there.\nA little was needed, but greed took hold,\nWhat truly mattered — left in the cold.\n\nWith abundance near, our gaze turned far,\nSeeking more, forgetting who we are.\nLet's take a U-turn,\nAnd look at life again —\n\nA little less of others,\nA lot more within.\nThink again before you make the choice,\nThink again before you make the choice.`,
      },
      {
        id: 'what-is-freedom',
        title: 'What Is Freedom',
        taster: true,
        date: 'January 2025',
        preview: [
          'Let\'s explore what freedom is today —',
          'A thought arose, and what can I say?',
          'Freedom is to live each breath,',
          'Freedom is to share that coffee with a close friend.',
        ],
        text: `Let's explore what freedom is today —\nA thought arose, and what can I say?\nFreedom is to live each breath,\nFreedom is to share that coffee with a close friend.\n\nFreedom is waking up when it feels right,\nFreedom is binding myself to things that suffice.\nFreedom is taking a trip to explore,\nFreedom is being content, without asking for more.\n\nFreedom is a seven-letter word with endless meaning,\nFreedom is a sense of gratitude and life's true being.\nFreedom is an open door you can walk through anytime,\nFreedom is that friend you could truly call mine.\n\nBut after writing all this, I reflected deep inside —\nFreedom, for me, exists beyond space or time.\nNo feeling of attachment, greed, or jealousy,\nJust happiness in thoughts, which alone is plenty.\n\nWhen the outer world doesn't shape my experience or stir my emotions,\nAnd I abide in myself, without notions or distortions.\nNo race, no ambition, no longing of any kind,\nWhen I see the world as it is, uncolored by yours or mine.\n\nWhen clarity and perception blend into one,\nAnd no lens warps the truth of what's to be done.\nWhen I see people for who they truly are,\nWithout expectations, without raising a bar.\n\nWhen I am myself, and there is no fight,\nNot just outwardly, but within my own light.\nIn the moment that's eternal, my heart quietly dwells —\nIn the moment that's eternal, my heart quietly dwells.`,
      },
      {
        id: 'ready-to-lose-it-all',
        title: 'Ready to Lose It All',
        date: 'January 2025',
        preview: [
          'Today, I am ready to lose it all,',
          'All the identities I carried like a wall,',
          'The masks I wore on the stage of life,',
          'To act as needed and avoid the strife.',
        ],
        text: `Today, I am ready to lose it all,\nAll the identities I carried like a wall,\nThe masks I wore on the stage of life,\nTo act as needed and avoid the strife.\n\nI don't want to be attached anymore,\nTo look at people without the lens of friend or foe.\nNo expectations or dreams I wish to chase,\nAcceptance feels hard, but it leaves me amazed.\n\nEquanimity breathes in every breath I take,\nIt doesn't waver for the thoughts I make —\nWhether good or evil, it lets me grow,\nTo become the person I long to know.\n\nBut first, I must unlearn it all,\nPeel back the layers, let the illusions fall.\nUndo the conditioning that shaped my past,\nAnd see the world without contrasts.\n\nI want to sit still, just meditate,\nBe amidst the crowd, yet separate.\nMove through the world, unseen, unfound,\nA gentle touch to heal hearts that are bound.\n\nI'll share my energy so others can heal,\nOffer a glimpse of how real life feels.\nI accept what is offered, without contest or fight,\nEach breath conscious, embracing the light.\n\nAnd in losing myself, I am finally free,\nAt peace, with tranquility guiding me.`,
      },
      {
        id: 'walk-out-of-the-cage',
        title: 'Walk Out of the Cage',
        date: 'February 2025',
        preview: [
          'Let yourself walk out of the cage,',
          'The cage that you built, piece by piece, with all your heart.',
          'Just breathe and let the air flow with every breath as you start.',
          'Take small steps and let yourself fall.',
        ],
        text: `Let yourself walk out of the cage,\nThe cage that you built, piece by piece, with all your heart.\nJust breathe and let the air flow with every breath as you start.\n\nTake small steps and let yourself fall.\nDon't worry if it's an abyss or darkness in your path.\nThe wings of light and space that you have hidden in the shadows arc.\nThe light within will take you wherever you are meant to be.\n\nThe world's beauty and spectacle could make you crazy and at ease.\nIt's a living contradiction, like twilight,\nWhen it's neither day nor night.\n\nThe same is your cage.\nYou call it home and give it beautiful names,\nYet the cage of the mind tightens as each moment passes by,\nFear and guilt gripping the abundant life.\n\nOpen your eyes, and you will find perfection in everything —\nWhether it's your darkest fears or something you hide deep within.\nThe sounds you hear are just noise.\nLet the whispers be a roar.\n\nLet yourself walk out of the cage,\nThe cage that you built, piece by piece, with all your heart.\nThe moment it all becomes clear,\nThe perceptions you had were colored lenses from the start.\n\nThe more you connect with your heart,\nThe more you realize there was nothing to be from the start.\nEach moment shapes you, guides you on your path.\nIt was yours, but there was never a "you" from the start.\n\nThe air and water flow as the planet moves around the stars.\nThey keep going without thinking of a destination,\nWithout questioning where it all begins or ends.\n\nThe people you meet are just the missing pieces of your heart.\nThis moment is all there is, all there ever was from the start.`,
      },
      {
        id: 'the-futile-chase',
        title: 'The Futile Chase',
        date: 'February 2025',
        preview: [
          'I went into the world to find happiness and joy,',
          'Yet found everything — except the reason for sorrow, the why.',
          'I purchased, I traveled, I met everyone,',
          'Yet the emptiness lingered long after the sun.',
        ],
        text: `I went into the world to find happiness and joy,\nYet found everything — except the reason for sorrow, the why.\nI purchased, I traveled, I met everyone,\nYet the emptiness lingered long after the sun.\n\nI tried to reason, to justify,\nBut joy was more fleeting than the days passing by.\nThe chase took me farther, away from my home,\nA stranger to love, yet surrounded, alone.\n\nStay within, buy only for need,\nNot for status, nor to make others plead.\nFor wealth should bring pleasure, not tighten its strings,\nNot turn life into a game where vanity clings.\n\nI have everything, yet feel more depressed,\nThe time I lost could have been blessed.\nTime with loved ones, moments of grace,\nNow distant memories, lost in the chase.\n\nThe boat has sailed, adrift at sea,\nIf only someone had whispered to me —\nMoney's just fuel, not the journey's end,\nNot a god to worship, nor a friend.\n\nBut as my days begin to fade,\nI find my way, the debt repaid.\nNo longer searching for reasons why,\nI've come back home, beneath the sky.\n\nAs I connect to the core, I stand at the shore,\nRealizing now — life could have been so much more.`,
      },
      {
        id: 'do-i-have-a-purpose',
        title: 'Do I Have a Purpose',
        date: 'February 2026',
        preview: [
          'Do I have a purpose, or just being born,',
          'To refuse and negate what I own?',
          'Owning nothing only seems right,',
          'I am here temporarily — what will suffice?',
        ],
        text: `Do I have a purpose, or just being born,\nTo refuse and negate what I own?\nOwning nothing only seems right,\nI am here temporarily — what will suffice?\n\nI come and go from this world,\nNo choice, or maybe not known, as I return to the dust,\nI have come far but still feel at the start,\nIt's all beating in the same heart.\n\nLet it be what it is for now,\nErase myself slowly — there was no self to bow,\nIlliterate in ego and its game,\nEven realizing it as thought feels the same,\n\nWater moving slowly from earth to sky,\nRain giving it back with no what or why,\nIt seems purpose is just another illusion in time,\nWith all this one energy — different forms to amaze the eye.`,
      },
      {
        id: 'the-search',
        title: 'The Search',
        taster: true,
        date: 'December 2024',
        preview: [
          'I have been looking for someone,',
          'But don\'t know who or where to find,',
          'Maybe in a distant world,',
          'Or just in my heart and mind,',
        ],
        text: `I have been looking for someone,\nBut don't know who or where to find,\nMaybe in a distant world,\nOr just in my heart and mind,\n\nA glimpse of something pure and love,\nSomething that felt from heaven or above,\nThe beauty of which touches the soul,\nThe energy like nourishment that makes me whole,\n\nBut the more I searched, the more I got lost,\nThe more I traveled, the more it seemed absurd,\nAt last I sat down, closed my eyes without any frown,\nSomething happened inside —\nPeace abided and there was a light,\n\nThe search was gone, it had been futile all along,\nSo was the chase to make it mine,\nIt lived in me, ready to shine,\nIt was all inside me — the search was just an excuse,\n\nAll the travel to make me realize the world's muse,\nThen realization came:\nYou have to lose to get a gain,\nYou have to be lost to be found,\n\nGive up the attachment and move in the love that never bounds,\nThe search let us out,\nIn the end, to find the one who's ourselves, without any doubt,\nAll along, it was myself I had been searching for,\nNow I have found my heart, my love — which all this craving was for.`,
      },
      {
        id: 'nothing-to-gain',
        title: 'Nothing to Gain',
        taster: true,
        date: '2025',
        preview: [
          'People desire love, I want hate,',
          'People want happiness, I want sadness to be my mate,',
          'All the pain is temporary, suffering is my choice,',
          'The reason I am here will not suffice,',
        ],
        text: `People desire love, I want hate,\nPeople want happiness, I want sadness to be my mate,\nAll the pain is temporary, suffering is my choice,\nThe reason I am here will not suffice,\nIt's a journey not a game of destination,\nIt's about the experiences you had without any expectations,\nAs slowly slowly, everything is lost,\nI become nothing without any thought,\nI reach my true state and found peace in all the pain,\nNow I am everything where there is nothing to gain,\nI have reached where it all started,\nI am the oneness which in its eternity is all delighted!`,
        reflection: 'This poem looks dark from the outside. But it\'s actually the most peaceful thing I\'ve ever written. When you stop trying to get something out of life — not in defeat, but in acceptance — you become everything. That\'s the paradox of surrender.',
      },
    ],
  },

  // ── V. LOVE, NATURE & THE WORLD ─────────────────────────────────────────────
  {
    id: 'love-nature-and-the-world',
    num: '05',
    label: 'Love, Nature & The World',
    subtitle: 'On human bonds, the living world, and being fully present.',
    accent: 'var(--sec-love)',
    poems: [
      {
        id: 'the-river',
        taster: true,
        title: 'The River',
        date: 'January 2025',
        preview: [
          'The serenity of the river, touching my body and heart,',
          'The water is cold, yet warm like fire at its start.',
          'It doesn\'t just refresh; it heals,',
          'Washing away the aches my heart concealed.',
        ],
        text: `The serenity of the river, touching my body and heart,\nThe water is cold, yet warm like fire at its start.\nIt doesn't just refresh; it heals,\nWashing away the aches my heart concealed.\n\nAs I take a dip, the water takes its course,\nQuenching the thirst of a mind that always wants more.\nAs it touches my head, my thoughts grow still,\nDistractions fade, and calmness fills.\n\nThe warmth of the sun, its beauty so bright,\nIts rays drying me gently with love and light.\n"There is no perfect time," the river whispers low,\n"Come to me whenever life feels heavy, whenever you let go."\n\n"One dip, and I will carry away all you try to outrun,\nMy tranquil flow will be your home, your sun."\nIt taught me to move like it, to flow with life's tide,\nYet its force still pulled me with an elephant's might.\n\nBut in this oneness, as I drift with time,\nI close my eyes and lose what's mine.\nWhat is me, and what is not — just another blurred line.\nLet me be nothing — I am at peace, more than fine.`,
      },
      {
        id: 'hearts-in-a-daze',
        title: 'Hearts in a Daze',
        taster: true,
        date: 'February 2025',
        preview: [
          'Today, my heart drifts in a daze,',
          'As synchronicity rewrites history in space.',
          'I don\'t often connect, I stay on my own,',
          'Yet when I do, it always feels like home.',
        ],
        text: `Today, my heart drifts in a daze,\nAs synchronicity rewrites history in space.\nI don't often connect, I stay on my own,\nYet when I do, it always feels like home.\n\nEach time I open my heart, they leave,\nOff to new horizons, chasing dreams.\nI wish I knew how to make them stay,\nBut growth demands we walk our own way.\n\nTo hold them back would shackle me too,\nTrapped in time, unsure what to do.\nRestricting a soul because of my pain,\nWould be a crime, an unspoken chain.\n\nSo I hope they find what they're searching for,\nBecome someone joyful, peaceful, and more.\nAnd as they grow, I will too,\nThese emotions revealing a path anew.\n\nSome days feel like heaven, some like hell,\nYet each one teaches me more of myself.\nLife moves forward in circles profound,\nUntil we learn to welcome what comes around.\n\nIt's never about what we want or hold tight,\nBut staying true, joyful, and free inside — with every breath of life.`,
      },
      {
        id: 'you-and-me-are-one',
        title: 'You and Me Are One',
        date: 'February 2025',
        preview: [
          'There is you and me,',
          'But I can feel we are one.',
          'There is just a boundary —',
          'We can see it, but not each other as one.',
        ],
        text: `There is you and me,\nBut I can feel we are one.\nThere is just a boundary —\nWe can see it, but not each other as one.\n\nThe consciousness we all share,\nThe same emotions that make us turn,\nJust different scenarios, names, and identities\nIn this world we run.\n\nWe project to assert our ego in reality\nAnd pass each other at different turns.\nTime changes, but humans remain the same —\nThe masks and actors keep changing,\nPlaying the same game.\n\nThe roles we play on the stage of life,\nThe truth inside all of us the same, yet it doesn't suffice.\nThe beauty we see, the languages we speak —\nOutside, a little different, but within, the same inner peace.\n\nThe more we move inside, the boundaries dissolve —\nYou and me, with everything in nature, just one whole.\nBeyond space, beyond time,\nUnited by kindness and love.\n\nWe just have to let go of the "I,"\nThe illusion that we are not the same,\nBut something decreed from above.`,
      },
      {
        id: 'the-fiery-sun',
        title: 'The Fiery Sun',
        taster: true,
        date: 'December 2025',
        preview: [
          'Sky breathes the fiery sun,',
          'Glowing red and orange till it becomes one.',
          'Moon in its enchanting hue,',
          'Waves in the sea dancing to a tune.',
        ],
        text: `Sky breathes the fiery sun,\nGlowing red and orange till it becomes one.\nMoon in its enchanting hue,\nWaves in the sea dancing to a tune.\n\nI grow with it all and a sigh,\nStanding tall with the usual cry.\nTears part of being human,\nPain the sweetest poison.\nSmile a hearty distraction,\nWrapped in quiet reflection.\n\nAcceptance leads the way ahead,\nElse all that remains is being dead.\nSo sigh no more, laugh at the joke,\nBe what you are, no less, no more.\n\nIn time all things die,\nYet time itself an illusion we live by.\nI was and I will be — so humans claim.\nThe only truth: I am,\nWith all my laughter and my pain.`,
      },
      {
        id: 'the-distant-river',
        title: 'The Distant River',
        date: 'December 2024',
        preview: [
          'I went to see the forests and seas in lands that were far,',
          'Missing the trees and grass growing in my own backyard like a scar,',
          'The more distant the lands, the more was the cheer in my heart,',
          'The river flowing silently close by, without attention, losing its art,',
        ],
        text: `I went to see the forests and seas in lands that were far,\nMissing the trees and grass growing in my own backyard like a scar,\nThe more distant the lands, the more was the cheer in my heart,\nThe river flowing silently close by, without attention, losing its art,\n\nThe noise in my head kept me on the road,\nThere was no thought or attention to the sounds that inside me flowed,\nThere was a different love and curiosity for places with exotic tone,\nEvery thought of the mind pulling us away from our body and bone,\n\nThen a thought came — why does what's near lose its spark?\nWhy does the mind create chaos and make us feel dark?\nWhy is happiness now a version of a task list, like a flow chart?\nWhy does the charm of things, as we get them, steal the joy from our heart?\n\nSlowly, slowly as we age, we lose the dreams and fill ourselves with daze,\nTo have the glimpse of happiness again feels like a maze,\nWe just keep wandering in the past,\nOr hope for a future to create a new blast,\n\nIf we feel and listen to the river that's close to home,\nThe distant one then is the same — like blood flowing through our bone,\nIt begins very near, but we always start from the very far,\nThe truth and joy we seek to live abides in our own heart, like the pole star.`,
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ESSAYS  —  Add new essays here
// ─────────────────────────────────────────────────────────────────────────────

export const essays: Essay[] = [
  {
    id: 'who-owns-you',
    title: 'Who Owns You?',
    description: 'On attention, algorithms, and reclaiming the self.',
    snippet: 'You open the phone for one thing and thirty minutes later you are somewhere else entirely. The algorithm knew exactly which door to open. You walked right through it. The question is not whether you are being watched — it is whether you still remember what you were looking for.',
    status: 'coming-soon',
  },
  {
    id: 'never-meant-for-intelligence',
    title: 'We Were Never Meant for Intelligence',
    description: 'Why consciousness precedes cognition — and what we lost when we forgot.',
    snippet: 'We built machines that think faster than us and called it progress. But thinking was never the point. A tree does not think about growing. A river does not calculate its path. Somewhere along the way we confused the tool for the hand that holds it.',
    status: 'coming-soon',
  },
  {
    id: 'choosing-reality',
    title: 'Choosing Reality Over Symbols',
    description: 'Money, status, degrees — and the life that happens while you chase them.',
    snippet: 'The degree hangs on the wall. The car sits in the driveway. The title is on the business card. And still, at three in the morning, something is missing. We spent years collecting symbols of a life instead of living one.',
    status: 'coming-soon',
  },
  {
    id: 'when-reading-rewires',
    title: 'When Reading Rewires You',
    description: 'How slow reading changed the way I see everything.',
    snippet: 'I used to read to finish. Now I read to stay. One paragraph can rearrange the furniture inside your head if you let it. The books that changed me were not the ones I flew through — they were the ones that made me stop and stare at the ceiling for ten minutes.',
    status: 'coming-soon',
  },
];
