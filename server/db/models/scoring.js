const Sequelize = require('sequelize');
const db = require('../db');

const Scoring = db.define('scoring', {
  //Header Data
  school: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  childName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  gender: {
    type: Sequelize.ENUM(['boy', 'Boy', 'BOY', 'girl', 'Girl', 'GIRL'])
  },
  totalScore: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  //friend questionnaire
  friendAnger: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendWithdrawal: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendEsteem: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendAttendance: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendPerformance: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendPeerRelationships: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendAdultRelationships: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendHygiene: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendSexBehavior: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendFrustrated: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendDepression: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendCries: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendImpulsive: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendNervous: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  friendScore: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  //teacher questionnaire
  teacherAnger: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherWithdrawal: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherEsteem: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherAttendance: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherPerformance: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherPeerRelationships: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherAdultRelationships: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherHygiene: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherSexBehavior: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherFrustrated: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherDepression: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherCries: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherImpulsive: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherNervous: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  teacherScore: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  //environment risk
  singleParent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  poverty: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  teenParent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  neglect: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  abuse: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  foster: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  drugs: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  substance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  violence: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  conflict: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  criminal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  incarceration: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  criminalHome: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  gang: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  mentalIll: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  relocation: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  education: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  sibling: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  neighborhood: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  delinquentPeers: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  monitoring: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  riskScore: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  //child strengths
  intelligent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  efficacy: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  protectEsteem: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  interpersonal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  initiative: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  frustration: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  soothe: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  help: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  temperament: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hope: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  trying: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  likesSchool: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  humor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  //environment strengths
  goodCaregiver: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  supervision: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  extended: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  traditions: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  community: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  resources: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  noFamilyStress: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  noFamilyViolence: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  noSubstanceAbuse: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  consistentEmployment: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  valueEducation: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  strengthScore: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  //scope questionnaire
  scope1: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  scope2: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  scopeSelector: {
    type: Sequelize.ENUM(['yes', 'YES', 'Yes', 'no', 'NO', 'No']),
    defaultValue: 'Yes',
  },
  //need questionnaire
  needSelector: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
  needScore: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    }
  },
});

module.exports = Scoring;
