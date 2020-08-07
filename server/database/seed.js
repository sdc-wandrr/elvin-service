const Fakerator = require('fakerator');
const db = require('./db.js');

const fakerator = Fakerator();

/* ========== RULES TABLE========== */

const checkInStart = () => {
  const minArray = [0, 15, 30, 45];
  let hour = fakerator.random.number(5, 13);
  let minutes = fakerator.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const checkInEnd = () => {
  const minArray = [0, 15, 30, 45];
  let hour = fakerator.random.number(14, 23);
  let minutes = fakerator.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const checkOut = () => {
  const minArray = [0, 15, 30, 45];
  let hour = fakerator.random.number(23);
  let minutes = fakerator.arrayElement(minArray);

  hour = hour < 10 ? 0 + hour.toString() : hour.toString();
  minutes = minutes === 0 ? 0 + minutes.toString() : minutes.toString();

  return `${hour}${minutes}00`;
};

const kidFriendly = fakerator.random.boolean() === true ? 1 : 0;

const creditCards = fakerator.random.boolean() === true ? 1 : 0;

const ageRestriction = fakerator.random.boolean() === true ? 1 : 0;

const curfew = fakerator.random.boolean() === true ? 1 : 0;

const lockOut = fakerator.random.boolean() === true ? 1 : 0;

const nonSmoking = fakerator.random.boolean() === true ? 1 : 0;

const petFriendly = fakerator.random.boolean() === true ? 1 : 0;

const taxesIncluded = fakerator.random.boolean() === true ? 1 : 0;

const importantNotes = () => {
  let noteString = '';
  const characterNums = fakerator.random.number(700, 900);

  while (noteString.length < characterNums) {
    const randomBoolean = fakerator.random.boolean();
    noteString += randomBoolean === true ? `${fakerator.lorem.sentence()} '\n'` : `${fakerator.lorem.paragraph()} '\n'`;
  }
  return noteString;
};

const rulesQueryString = `INSERT INTO rules (check_in_start, check_in_end, check_out, kid_friendly, credit_cards, age_restriction, curfew, lock_out, non_smoking, pet_friendly, taxes_included, important_notes) VALUES ("${checkInStart()}", "${checkInEnd()}", "${checkOut()}", "${kidFriendly}", "${creditCards}", "${ageRestriction}", "${curfew}", "${lockOut}", "${nonSmoking}", "${petFriendly}", "${taxesIncluded}", "${importantNotes()}")`;

const seedRules = db.connection.query(rulesQueryString, (err, res) => {
  if (err) {
    console.log('ERROR SEEDING RULES TABLE IN DB', err);
  } else {
    console.log(res);
  }
});

/* ========== ADDRESSES TABLE========== */

const address = fakerator.entity.address();

const addressQueryString = `INSERT INTO addresses (street_address, city, state, zipcode, country, country_code, latitude, longitude) VALUES ("${address.street}", "${address.city}", "${address.state}", "${address.zip}", "${address.country}", "${address.countryCode}", "${address.geo.latitude}", "${address.geo.longitude}")`;

const seedAddresses = db.connection.query(addressQueryString, (err, res) => {
  if (err) {
    console.log('ERROR SEEDING ADDRESSES TABLE IN DB', err);
  } else {
    console.log(res);
  }
});

/* ========== DESCRIPTIONS TABLE========== */

const editorialText = () => {
  let editorial = '';
  const characterNums = fakerator.random.number(500, 700);

  while (editorial.length < characterNums) {
    const randomBoolean = fakerator.random.boolean();
    editorial += randomBoolean === true ? `${fakerator.lorem.sentence()} '\n'` : `${fakerator.lorem.paragraph()} '\n'`;
  }
  return editorial;
};

const descriptionText = () => {
  let description = '';
  const characterNums = fakerator.random.number(700, 900);

  while (description.length < characterNums) {
    const randomBoolean = fakerator.random.boolean();
    description += randomBoolean === true ? `${fakerator.lorem.sentence()} '\n'` : `${fakerator.lorem.paragraph()} '\n'`;
  }
  return description;
};

const descriptionsQueryString = `INSERT INTO descriptions (editorial_text, description_text) VALUES ("${editorialText()}", "${descriptionText()}")`;

const seedDescriptions = db.connection.query(descriptionsQueryString, (err, res) => {
  if (err) {
    console.log('ERROR SEEDING DESCRIPTIONS TABLE IN DB', err);
  } else {
    console.log(res);
  }
});

/* ========== HOSTELS TABLE========== */

const hostelName = () => {
  const adjective = ['abandoned', 'able', 'absolute', 'adorable', 'adventurous', 'academic', 'acceptable', 'acclaimed', 'accomplished', 'accurate', 'aching', 'acidic', 'acrobatic', 'active', 'actual', 'adept', 'admirable', 'admired', 'adolescent', 'adorable', 'adored', 'advanced', 'afraid', 'affectionate', 'aged', 'aggravating', 'aggressive', 'agile', 'agitated', 'agonizing', 'agreeable', 'ajar', 'alarmed', 'alarming', 'alert', 'alienated', 'alive', 'all', 'altruistic', 'amazing', 'ambitious', 'ample', 'amused', 'amusing', 'anchored', 'ancient', 'angelic', 'angry', 'anguished', 'animated', 'annual', 'another', 'antique', 'anxious', 'any', 'apprehensive', 'appropriate', 'apt', 'arctic', 'arid', 'aromatic', 'artistic', 'ashamed', 'assured', 'astonishing', 'athletic', 'attached', 'attentive', 'attractive', 'austere', 'authentic', 'authorized', 'automatic', 'avaricious', 'average', 'aware', 'awesome', 'awful', 'awkward', 'babyish', 'bad', 'back', 'baggy', 'bare', 'barren', 'basic', 'beautiful', 'belated', 'beloved', 'beneficial', 'better', 'best', 'bewitched', 'big', 'big-hearted', 'biodegradable', 'bite-sized', 'bitter', 'black', 'black-and-white', 'bland', 'blank', 'blaring', 'bleak', 'blind', 'blissful', 'blond', 'blue', 'blushing', 'bogus', 'boiling', 'bold', 'bony', 'boring', 'bossy', 'both', 'bouncy', 'bountiful', 'bowed', 'brave', 'breakable', 'brief', 'bright', 'brilliant', 'brisk', 'broken', 'bronze', 'brown', 'bruised', 'bubbly', 'bulky', 'bumpy', 'buoyant', 'burdensome', 'burly', 'bustling', 'busy', 'buttery', 'buzzing', 'calculating', 'calm', 'candid', 'canine', 'capital', 'carefree', 'careful', 'careless', 'caring', 'cautious', 'cavernous', 'celebrated', 'charming', 'cheap', 'cheerful', 'cheery', 'chief', 'chilly', 'chubby', 'circular', 'classic', 'clean', 'clear', 'clear-cut', 'clever', 'close', 'closed', 'cloudy', 'clueless', 'clumsy', 'cluttered', 'coarse', 'cold', 'colorful', 'colorless', 'colossal', 'comfortable', 'common', 'compassionate', 'competent', 'complete', 'complex', 'complicated', 'composed', 'concerned', 'concrete', 'confused', 'conscious', 'considerate', 'constant', 'content', 'conventional', 'cooked', 'cool', 'cooperative', 'coordinated', 'corny', 'corrupt', 'costly', 'courageous', 'courteous', 'crafty', 'crazy', 'creamy', 'creative', 'creepy', 'criminal', 'crisp', 'critical', 'crooked', 'crowded', 'cruel', 'crushing', 'cuddly', 'cultivated', 'cultured', 'cumbersome', 'curly', 'curvy', 'cute', 'cylindrical', 'damaged', 'damp', 'dangerous', 'dapper', 'daring', 'darling', 'dark', 'dazzling', 'dead', 'deadly', 'deafening', 'dear', 'dearest', 'decent', 'decimal', 'decisive', 'deep', 'defenseless', 'defensive', 'defiant', 'deficient', 'definite', 'definitive', 'delayed', 'delectable', 'delicious', 'delightful', 'delirious', 'demanding', 'dense', 'dental', 'dependable', 'dependent', 'descriptive', 'deserted', 'detailed', 'determined', 'devoted', 'different', 'difficult', 'digital', 'diligent', 'dim', 'dimpled', 'dimwitted', 'direct', 'disastrous', 'discrete', 'disfigured', 'disgusting', 'disloyal', 'dismal', 'distant', 'downright', 'dreary', 'dirty', 'disguised', 'dishonest', 'dismal', 'distant', 'distinct', 'distorted', 'dizzy', 'dopey', 'doting', 'double', 'downright', 'drab', 'drafty', 'dramatic', 'dreary', 'droopy', 'dry', 'dual', 'dull', 'dutiful', 'each', 'eager', 'earnest', 'early', 'easy', 'easy-going', 'ecstatic', 'edible', 'educated', 'elaborate', 'elastic', 'elated', 'elderly', 'electric', 'elegant', 'elementary', 'elliptical', 'embarrassed', 'embellished', 'eminent', 'emotional', 'empty', 'enchanted', 'enchanting', 'energetic', 'enlightened', 'enormous', 'enraged', 'entire', 'envious', 'equal', 'equatorial', 'essential', 'esteemed', 'ethical', 'euphoric', 'even', 'evergreen', 'everlasting', 'every', 'evil', 'exalted', 'excellent', 'exemplary', 'exhausted', 'excitable', 'excited', 'exciting', 'exotic', 'expensive', 'experienced', 'expert', 'extraneous', 'extroverted', 'extra-large', 'extra-small', 'fabulous', 'failing', 'faint', 'fair', 'faithful', 'fake', 'false', 'familiar', 'famous', 'fancy', 'fantastic', 'far', 'faraway', 'far-flung', 'far-off', 'fast', 'fat', 'fatal', 'fatherly', 'favorable', 'favorite', 'fearful', 'fearless', 'feisty', 'feline', 'female', 'feminine', 'few', 'fickle', 'filthy', 'fine', 'finished', 'firm', 'first', 'firsthand', 'fitting', 'fixed', 'flaky', 'flamboyant', 'flashy', 'flat', 'flawed', 'flawless', 'flickering', 'flimsy', 'flippant', 'flowery', 'fluffy', 'fluid', 'flustered', 'focused', 'fond', 'foolhardy', 'foolish', 'forceful', 'forked', 'formal', 'forsaken', 'forthright', 'fortunate', 'fragrant', 'frail', 'frank', 'frayed', 'free', 'French', 'fresh', 'frequent', 'friendly', 'frightened', 'frightening', 'frigid', 'frilly', 'frizzy', 'frivolous', 'front', 'frosty', 'frozen', 'frugal', 'fruitful', 'full', 'fumbling', 'functional', 'funny', 'fussy', 'fuzzy', 'gargantuan', 'gaseous', 'general', 'generous', 'gentle', 'genuine', 'giant', 'giddy', 'gigantic', 'gifted', 'giving', 'glamorous', 'glaring', 'glass', 'gleaming', 'gleeful', 'glistening', 'glittering', 'gloomy', 'glorious', 'glossy', 'glum', 'golden', 'good', 'good-natured', 'gorgeous', 'graceful', 'gracious', 'grand', 'grandiose', 'granular', 'grateful', 'grave', 'gray', 'great', 'greedy', 'green', 'gregarious', 'grim', 'grimy', 'gripping', 'grizzled', 'gross', 'grotesque', 'grouchy', 'grounded', 'growing', 'growling', 'grown', 'grubby', 'gruesome', 'grumpy', 'guilty', 'gullible', 'gummy', 'hairy', 'half', 'handmade', 'handsome', 'handy', 'happy', 'happy-go-lucky', 'hard', 'hard-to-find', 'harmful', 'harmless', 'harmonious', 'harsh', 'hasty', 'hateful', 'haunting', 'healthy', 'heartfelt', 'hearty', 'heavenly', 'heavy', 'hefty', 'helpful', 'helpless', 'hidden', 'hideous', 'high', 'high-level', 'hilarious', 'hoarse', 'hollow', 'homely', 'honest', 'honorable', 'honored', 'hopeful', 'horrible', 'hospitable', 'hot', 'huge', 'humble', 'humiliating', 'humming', 'humongous', 'hungry', 'hurtful', 'husky', 'icky', 'icy', 'ideal', 'idealistic', 'identical', 'idle', 'idiotic', 'idolized', 'ignorant', 'ill', 'illegal', 'ill-fated', 'ill-informed', 'illiterate', 'illustrious', 'imaginary', 'imaginative', 'immaculate', 'immaterial', 'immediate', 'immense', 'impassioned', 'impeccable', 'impartial', 'imperfect', 'imperturbable', 'impish', 'impolite', 'important', 'impossible', 'impractical', 'impressionable', 'impressive', 'improbable', 'impure', 'inborn', 'incomparable', 'incompatible', 'incomplete', 'inconsequential', 'incredible', 'indelible', 'inexperienced', 'indolent', 'infamous', 'infantile', 'infatuated', 'inferior', 'infinite', 'informal', 'innocent', 'insecure', 'insidious', 'insignificant', 'insistent', 'instructive', 'insubstantial', 'intelligent', 'intent', 'intentional', 'interesting', 'internal', 'international', 'intrepid', 'ironclad', 'irresponsible', 'irritating', 'itchy', 'jaded', 'jagged', 'jam-packed', 'jaunty', 'jealous', 'jittery', 'joint', 'jolly', 'jovial', 'joyful', 'joyous', 'jubilant', 'judicious', 'juicy', 'jumbo', 'junior', 'jumpy', 'juvenile', 'kaleidoscopic', 'keen', 'key', 'kind', 'kindhearted', 'kindly', 'klutzy', 'knobby', 'knotty', 'knowledgeable', 'knowing', 'known', 'kooky', 'kosher', 'lame', 'lanky', 'large', 'last', 'lasting', 'late', 'lavish', 'lawful', 'lazy', 'leading', 'lean', 'leafy', 'left', 'legal', 'legitimate', 'light', 'lighthearted', 'likable', 'likely', 'limited', 'limp', 'limping', 'linear', 'lined', 'liquid', 'little', 'live', 'lively', 'livid', 'loathsome', 'lone', 'lonely', 'long', 'long-term', 'loose', 'lopsided', 'lost', 'loud', 'lovable', 'lovely', 'loving', 'low', 'loyal', 'lucky', 'lumbering', 'luminous', 'lumpy', 'lustrous', 'luxurious', 'mad', 'made-up', 'magnificent', 'majestic', 'major', 'male', 'mammoth', 'married', 'marvelous', 'masculine', 'massive', 'mature', 'meager', 'mealy', 'mean', 'measly', 'meaty', 'medical', 'mediocre', 'medium', 'meek', 'mellow', 'melodic', 'memorable', 'menacing', 'merry', 'messy', 'metallic', 'mild', 'milky', 'mindless', 'miniature', 'minor', 'minty', 'miserable', 'miserly', 'misguided', 'misty', 'mixed', 'modern', 'modest', 'moist', 'monstrous', 'monthly', 'monumental', 'moral', 'mortified', 'motherly', 'motionless', 'mountainous', 'muddy', 'muffled', 'multicolored', 'mundane', 'murky', 'mushy', 'musty', 'muted', 'mysterious', 'naive', 'narrow', 'nasty', 'natural', 'naughty', 'nautical', 'near', 'neat', 'necessary', 'needy', 'negative', 'neglected', 'negligible', 'neighboring', 'nervous', 'new', 'next', 'nice', 'nifty', 'nimble', 'nippy', 'nocturnal', 'noisy', 'nonstop', 'normal', 'notable', 'noted', 'noteworthy', 'novel', 'noxious', 'numb', 'nutritious', 'nutty', 'obedient', 'obese', 'oblong', 'oily', 'oblong', 'obvious', 'occasional', 'odd', 'oddball', 'offbeat', 'offensive', 'official', 'old', 'old-fashioned', 'only', 'open', 'optimal', 'optimistic', 'opulent', 'orange', 'orderly', 'organic', 'ornate', 'ornery', 'ordinary', 'original', 'other', 'our', 'outlying', 'outgoing', 'outlandish', 'outrageous', 'outstanding', 'oval', 'overcooked', 'overdue', 'overjoyed', 'overlooked', 'palatable', 'pale', 'paltry', 'parallel', 'parched', 'partial', 'passionate', 'past', 'pastel', 'peaceful', 'peppery', 'perfect', 'perfumed', 'periodic', 'perky', 'personal', 'pertinent', 'pesky', 'pessimistic', 'petty', 'phony', 'physical', 'piercing', 'pink', 'pitiful', 'plain', 'plaintive', 'plastic', 'playful', 'pleasant', 'pleased', 'pleasing', 'plump', 'plush', 'polished', 'polite', 'political', 'pointed', 'pointless', 'poised', 'poor', 'popular', 'portly', 'posh', 'positive', 'possible', 'potable', 'powerful', 'powerless', 'practical', 'precious', 'present', 'prestigious', 'pretty', 'precious', 'previous', 'pricey', 'prickly', 'primary', 'prime', 'pristine', 'private', 'prize', 'probable', 'productive', 'profitable', 'profuse', 'proper', 'proud', 'prudent', 'punctual', 'pungent', 'puny', 'pure', 'purple', 'pushy', 'putrid', 'puzzled', 'puzzling', 'quaint', 'qualified', 'quarrelsome', 'quarterly', 'queasy', 'querulous', 'questionable', 'quick', 'quick-witted', 'quiet', 'quintessential', 'quirky', 'quixotic', 'quizzical', 'radiant', 'ragged', 'rapid', 'rare', 'rash', 'raw', 'recent', 'reckless', 'rectangular', 'ready', 'real', 'realistic', 'reasonable', 'red', 'reflecting', 'regal', 'regular', 'reliable', 'relieved', 'remarkable', 'remorseful', 'remote', 'repentant', 'required', 'respectful', 'responsible', 'repulsive', 'revolving', 'rewarding', 'rich', 'rigid', 'right', 'ringed', 'ripe', 'roasted', 'robust', 'rosy', 'rotating', 'rotten', 'rough', 'round', 'rowdy', 'royal', 'rubbery', 'rundown', 'ruddy', 'rude', 'runny', 'rural', 'rusty', 'sad', 'safe', 'salty', 'same', 'sandy', 'sane', 'sarcastic', 'sardonic', 'satisfied', 'scaly', 'scarce', 'scared', 'scary', 'scented', 'scholarly', 'scientific', 'scornful', 'scratchy', 'scrawny', 'second', 'secondary', 'second-hand', 'secret', 'self-assured', 'self-reliant', 'selfish', 'sentimental', 'separate', 'serene', 'serious', 'serpentine', 'several', 'severe', 'shabby', 'shadowy', 'shady', 'shallow', 'shameful', 'shameless', 'sharp', 'shimmering', 'shiny', 'shocked', 'shocking', 'shoddy', 'short', 'short-term', 'showy', 'shrill', 'shy', 'sick', 'silent', 'silky', 'silly', 'silver', 'similar', 'simple', 'simplistic', 'sinful', 'single', 'sizzling', 'skeletal', 'skinny', 'sleepy', 'slight', 'slim', 'slimy', 'slippery', 'slow', 'slushy', 'small', 'smart', 'smoggy', 'smooth', 'smug', 'snappy', 'snarling', 'sneaky', 'sniveling', 'snoopy', 'sociable', 'soft', 'soggy', 'solid', 'somber', 'some', 'spherical', 'sophisticated', 'sore', 'sorrowful', 'soulful', 'soupy', 'sour', 'Spanish', 'sparkling', 'sparse', 'specific', 'spectacular', 'speedy', 'spicy', 'spiffy', 'spirited', 'spiteful', 'splendid', 'spotless', 'spotted', 'spry', 'square', 'squeaky', 'squiggly', 'stable', 'staid', 'stained', 'stale', 'standard', 'starchy', 'stark', 'starry', 'steep', 'sticky', 'stiff', 'stimulating', 'stingy', 'stormy', 'straight', 'strange', 'steel', 'strict', 'strident', 'striking', 'striped', 'strong', 'studious', 'stunning', 'stupendous', 'stupid', 'sturdy', 'stylish', 'subdued', 'submissive', 'substantial', 'subtle', 'suburban', 'sudden', 'sugary', 'sunny', 'super', 'superb', 'superficial', 'superior', 'supportive', 'sure-footed', 'surprised', 'suspicious', 'svelte', 'sweaty', 'sweet', 'sweltering', 'swift', 'sympathetic', 'tall', 'talkative', 'tame', 'tan', 'tangible', 'tart', 'tasty', 'tattered', 'taut', 'tedious', 'teeming', 'tempting', 'tender', 'tense', 'tepid', 'terrible', 'terrific', 'testy', 'thankful', 'that', 'these', 'thick', 'thin', 'third', 'thirsty', 'this', 'thorough', 'thorny', 'those', 'thoughtful', 'threadbare', 'thrifty', 'thunderous', 'tidy', 'tight', 'timely', 'tinted', 'tiny', 'tired', 'torn', 'total', 'tough', 'traumatic', 'treasured', 'tremendous', 'tragic', 'trained', 'tremendous', 'triangular', 'tricky', 'trifling', 'trim', 'trivial', 'troubled', 'true', 'trusting', 'trustworthy', 'trusty', 'truthful', 'tubby', 'turbulent', 'twin', 'ugly', 'ultimate', 'unacceptable', 'unaware', 'uncomfortable', 'uncommon', 'unconscious', 'understated', 'unequaled', 'uneven', 'unfinished', 'unfit', 'unfolded', 'unfortunate', 'unhappy', 'unhealthy', 'uniform', 'unimportant', 'unique', 'united', 'unkempt', 'unknown', 'unlawful', 'unlined', 'unlucky', 'unnatural', 'unpleasant', 'unrealistic', 'unripe', 'unruly', 'unselfish', 'unsightly', 'unsteady', 'unsung', 'untidy', 'untimely', 'untried', 'untrue', 'unused', 'unusual', 'unwelcome', 'unwieldy', 'unwilling', 'unwitting', 'unwritten', 'upbeat', 'upright', 'upset', 'urban', 'usable', 'used', 'useful', 'useless', 'utilized', 'utter', 'vacant', 'vague', 'vain', 'valid', 'valuable', 'vapid', 'variable', 'vast', 'velvety', 'venerated', 'vengeful', 'verifiable', 'vibrant', 'vicious', 'victorious', 'vigilant', 'vigorous', 'villainous', 'violet', 'violent', 'virtual', 'virtuous', 'visible', 'vital', 'vivacious', 'vivid', 'voluminous', 'wan', 'warlike', 'warm', 'warmhearted', 'warped', 'wary', 'wasteful', 'watchful', 'waterlogged', 'watery', 'wavy', 'wealthy', 'weak', 'weary', 'webbed', 'wee', 'weekly', 'weepy', 'weighty', 'weird', 'welcome', 'well-documented', 'well-groomed', 'well-informed', 'well-lit', 'well-made', 'well-off', 'well-to-do', 'well-worn', 'wet', 'which', 'whimsical', 'whirlwind', 'whispered', 'white', 'whole', 'whopping', 'wicked', 'wide', 'wide-eyed', 'wiggly', 'wild', 'willing', 'wilted', 'winding', 'windy', 'winged', 'wiry', 'wise', 'witty', 'wobbly', 'woeful', 'wonderful', 'wooden', 'woozy', 'wordy', 'worldly', 'worn', 'worried', 'worrisome', 'worse', 'worst', 'worthless', 'worthwhile', 'worthy', 'wrathful', 'wretched', 'writhing', 'wrong', 'wry', 'yawning', 'yearly', 'yellow', 'yellowish', 'young', 'youthful', 'yummy', 'zany', 'zealous', 'zesty', 'zigzag', 'rocky'];
  const adjectiveIndex = fakerator.random.number(adjective.length - 1);
  const twoAdjectives = fakerator.random.boolean();
  const city = fakerator.address.city();

  if (twoAdjectives) {
    const adjectiveIndexTwo = fakerator.random.number(adjective.length - 1);
    return `${adjective[adjectiveIndex]} ${adjective[adjectiveIndexTwo]} ${city} 'Hostel'`;
  }
  return `${adjective[adjectiveIndex]} ${city} 'Hostel'`;
};

const hostelQueryString = `INSERT INTO hostels (hostel_name) VALUES ("${hostelName()}")`;

const seedHostelNames = db.connection.query(hostelQueryString, (err, res) => {
  if (err) {
    console.log('ERROR SEEDING HOSTELS TABLE IN DB', err);
  } else {
    console.log(res);
  }
});

(function seedHostels() {
  let i = 0;
  while (i < 100) {
    seedRules();
    seedAddresses();
    seedDescriptions();
    seedHostelNames();
    i += 1;
  }
}());
