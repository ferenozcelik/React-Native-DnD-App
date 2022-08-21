const classData = [
  {
    id: '1',
    className: 'Barbarian',
    description:
      'A fierce warrior of primitive background who can enter a battle rage',
    hitDie: 'd12',
    primaryAbility: 'Strength',
    saves: 'Strength, Constitution',
    image: require('../images/barbarian-photo.png'),
    icon: require('../icons/barbarian-icon.png'),
  },
  {
    id: '2',
    className: 'Bard',
    description:
      'An inspiring magician whose power echoes the music of creation',
    hitDie: 'd8',
    primaryAbility: 'Charisma',
    saves: 'Dexterity, Charisma',
    image: require('../images/bard-photo.png'),
    icon: require('../icons/bard-icon.png'),
  },
  {
    id: '3',
    className: 'Cleric',
    description:
      'A priestly champion who wields divine magic in service of a higher power',
    hitDie: 'd8',
    primaryAbility: 'Wisdom',
    saves: 'Wisdom, Charisma',
    image: require('../images/cleric-photo.png'),
    icon: require('../icons/cleric-icon.png'),
  },
  {
    id: '4',
    className: 'Druid',
    description:
      'A priest, wielding the powers of nature and adopting animal forms',
    hitDie: 'd8',
    primaryAbility: 'Wisdom',
    saves: 'Intelligence, Wisdom',
    image: require('../images/druid-photo.png'),
    icon: require('../icons/druid-icon.png'),
  },
  {
    id: '5',
    className: 'Fighter',
    description:
      'A master of martial combat, skilled with a variety of weapons and armor',
    hitDie: 'd10',
    primaryAbility: 'Strength, Dexterity',
    saves: 'Strength, Constitution',
    image: require('../images/fighter-photo.png'),
    icon: require('../icons/fighter-icon.png'),
  },
  {
    id: '6',
    className: 'Monk',
    description:
      'Martial art master, harnesses the power in physical and spiritual form',
    hitDie: 'd8',
    primaryAbility: 'Dexterity, Wisdom',
    saves: 'Strength, Dexterity',
    image: require('../images/monk-photo.png'),
    icon: require('../icons/monk-icon.png'),
  },
  {
    id: '7',
    className: 'Paladin',
    description:
      'A holy warrior bound to and united by a powerful sacred oath ',
    hitDie: 'd10',
    primaryAbility: 'Strength, Charisma',
    saves: 'Wisdom, Charisma',
    image: require('../images/paladin-photo.png'),
    icon: require('../icons/paladin-icon.png'),
  },
  {
    id: '8',
    className: 'Ranger',
    description: 'A warrior who combats threats on the edges of civilization',
    hitDie: 'd10',
    primaryAbility: 'Dexterity, Wisdom',
    saves: 'Strength, Dexterity',
    image: require('../images/ranger-photo.png'),
    icon: require('../icons/ranger-icon.png'),
  },
  {
    id: '9',
    className: 'Rogue',
    description:
      'A scoundrel who uses stealth and trickery to overcome enemies',
    hitDie: 'd8',
    primaryAbility: 'Dexterity',
    saves: 'Dexterity, Intelligence',
    image: require('../images/rogue-photo.png'),
    icon: require('../icons/rogue-icon.png'),
  },
  {
    id: '10',
    className: 'Sorcerer',
    description:
      'A spellcaster who draws on inherent magic from a gift or bloodline',
    hitDie: 'd6',
    primaryAbility: 'Charisma',
    saves: 'Constitution, Charisma',
    image: require('../images/sorcerer-photo.png'),
    icon: require('../icons/sorcerer-icon.png'),
  },
  {
    id: '11',
    className: 'Warlock',
    description:
      'A wielder of magic that is derived from a bargain with an extraplanar entity',
    hitDie: 'd8',
    primaryAbility: 'Charisma',
    saves: 'Wisdom, Charisma',
    image: require('../images/warlock-photo.png'),
    icon: require('../icons/warlock-icon.png'),
  },
  {
    id: '12',
    className: 'Wizard',
    description:
      'A scholarly magic-user capable of manipulating the structures of reality',
    hitDie: 'd6',
    primaryAbility: 'Intelligence',
    saves: 'Intelligence, Wisdom',
    image: require('../images/wizard-photo.png'),
    icon: require('../icons/wizard-icon.png'),
  },
];

export default classData;
