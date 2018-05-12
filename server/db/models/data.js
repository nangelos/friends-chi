const Sequelize = require('sequelize');
const db = require('../db');

const Data = db.define('data', {
  //Header Data
  date: {
    type: Sequelize.DATEONLY,
  },
  school: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  childInitials: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  //Child Risk Factors
  anger: {
    type: Sequelize.BOOLEAN,
  },
  angerText: {
    type: Sequelize.STRING,
  },
  withdrawal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  withdrawalText: {
    type: Sequelize.STRING,
  },
  esteem: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  esteemText: {
    type: Sequelize.STRING,
  },
  attendance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  attendanceText: {
    type: Sequelize.STRING,
  },
  performance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  performanceText: {
    type: Sequelize.STRING,
  },
  peerRelationships: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  peerRelationshipsText: {
    type: Sequelize.STRING,
  },
  adultRelationships: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  adultRelationshipsText: {
    type: Sequelize.STRING,
  },
  hygiene: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hygieneText: {
    type: Sequelize.STRING,
  },
  sexBehavior: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  sexBehaviorText: {
    type: Sequelize.STRING,
  },
  frustrated: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  frustratedText: {
    type: Sequelize.STRING,
  },
  depression: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  depressionText: {
    type: Sequelize.STRING,
  },
  cries: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  criesText: {
    type: Sequelize.STRING,
  },
  impulsive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  impulsiveText: {
    type: Sequelize.STRING,
  },
  nervous: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  nervousText: {
    type: Sequelize.STRING,
  },
  childRiskNotes: {
    type: Sequelize.TEXT,
  },
  //Environmental Risk Factors
  singleParent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  singleParentText: {
    type: Sequelize.STRING,
  },
  poverty: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  povertyText: {
    type: Sequelize.STRING,
  },
  teenParent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  teenParentText: {
    type: Sequelize.STRING,
  },
  neglect: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  neglectText: {
    type: Sequelize.STRING,
  },
  abuse: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  abuseText: {
    type: Sequelize.STRING,
  },
  foster: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fosterText: {
    type: Sequelize.STRING,
  },
  drugs: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  drugsText: {
    type: Sequelize.STRING,
  },
  substance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  substanceText: {
    type: Sequelize.STRING,
  },
  violence: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  violenceText: {
    type: Sequelize.STRING,
  },
  conflict: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  conflictText: {
    type: Sequelize.STRING,
  },
  criminal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  criminalText: {
    type: Sequelize.STRING,
  },
  incarceration: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  incarcerationText: {
    type: Sequelize.STRING,
  },
  criminalHome: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  criminalHomeText: {
    type: Sequelize.STRING,
  },
  gang: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  gangText: {
    type: Sequelize.STRING,
  },
  mentalIll: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  mentalIllText: {
    type: Sequelize.STRING,
  },
  relocation: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  relocationText: {
    type: Sequelize.STRING,
  },
  education: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  educationText: {
    type: Sequelize.STRING,
  },
  sibling: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  siblingText: {
    type: Sequelize.STRING,
  },
  neighborhood: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  neighborhoodText: {
    type: Sequelize.STRING,
  },
  delinquentPeers: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  delinquentPeersText: {
    type: Sequelize.STRING,
  },
  monitoring: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  monitoringText: {
    type: Sequelize.STRING,
  },
  //Child Protective Factors
  intelligent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  intelligentText: {
    type: Sequelize.STRING,
  },
  efficacy: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  efficacyText: {
    type: Sequelize.STRING,
  },
  protectEsteem: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  protectEsteemText: {
    type: Sequelize.STRING,
  },
  interpersonal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  interpersonalText: {
    type: Sequelize.STRING,
  },
  initiative: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  initiativeText: {
    type: Sequelize.STRING,
  },
  frustration: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  frustrationText: {
    type: Sequelize.STRING,
  },
  soothe: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  sootheText: {
    type: Sequelize.STRING,
  },
  help: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  helpText: {
    type: Sequelize.STRING,
  },
  temperament: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  temperamentText: {
    type: Sequelize.STRING,
  },
  hope: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hopeText: {
    type: Sequelize.STRING,
  },
  trying: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tryingText: {
    type: Sequelize.STRING,
  },
  likesSchool: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  likesSchoolText: {
    type: Sequelize.STRING,
  },
  humor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  humorText: {
    type: Sequelize.STRING,
  },
  childProtectNotes: {
    type: Sequelize.TEXT,
  },
});

module.exports = Data;
