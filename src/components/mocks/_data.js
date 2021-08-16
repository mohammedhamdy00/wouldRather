// cspell:disable
export const userQuestionData = {
  unanswered: [
    {
      qid: 2,
      author: 'Meryem Jow',
      // avatar: 'tiger.png',
      question: 'Eat sushi with your bestie'
    },
    {
      qid: 1,
      author: 'James Priest',
      // avatar: 'fox.png',
      question: 'Visit a friend in a foreign country'
    },
    {
      qid: 5,
      author: 'Evidence Monday',
      // avatar: 'rabbit.png',
      question: 'Be able to grant one wish'
    }
  ],
  answered: [
    {
      qid: 4,
      author: 'Brittini Bryant',
      // avatar: 'dog.png',
      question: 'Teach a dog to code'
    },
    {
      qid: 3,
      author: 'Joeylene Rivera',
      // avatar: 'lion.png',
      question: 'Run your own dev company'
    },
    {
      qid: 6,
      author: 'Peter Cruckshank',
      // avatar: 'gorilla.png',
      question: 'Have a seamless MERN app deployment'
    }
  ]
};

export const questionData = {
  qid: 2,
  author: 'James Priest',
  // avatar: 'fox.png',
  optionOne: {
    votes: ['jamespriest', 'meryemjow'],
    text: 'Go out to dinner and the cinema.'
  },
  optionTwo: {
    votes: ['brittinibryant'],
    text: 'Netflix and chill.'
  }
};

export const leaderboardData = [
  {
    id: 'brittinibryant',
    name: 'Brittini Bryant',
    // avatar: 'dog.png',
    answerCount: 11,
    questionCount: 4
  },
  {
    id: 'joeylenerivera',
    name: 'Joeylene Rivera',
    // avatar: 'lion.png',
    answerCount: 7,
    questionCount: 4
  },
  {
    id: 'evidencemonday',
    name: 'Evidence Monday',
    // avatar: 'rabbit.png',
    answerCount: 4,
    questionCount: 3
  }
];

export const navUsers = {
  mohammed: {
    id: 'mohammed',
    name: 'Mohammed'
    // avatar: {
    //   name: 'dog',
    //   src: '/images/avatars/dog.png'
    // }
  },
  ahmed: {
    id: 'ahmed',
    name: 'Ahmed'
    // avatar: {
    //   name: 'cat',
    //   src: '/images/avatars/cat.png'
    // }
  },
  mahmoud: {
    id: 'mahmoud',
    name: 'Mahmoud'
    // avatar: {
    //   name: 'gorilla',
    //   src: '/images/avatars/gorilla.png'
    // }
  },
  moutaz: {
    id: 'moutaz',
    name: 'Moutaz'
    // avatar: {
    //   name: 'lion',
    //   src: '/images/avatars/lion.png'
    // }
  },
  hessien: {
    id: 'hessien',
    name: 'Hessien'
    // avatar: {
    //   name: 'koala',
    //   src: '/images/avatars/koala.png'
    // }
  },
  tawfik: {
    id: 'tawfik',
    name: 'Tawfik'
    // avatar: {
    //   name: 'rabbit',
    //   src: '/images/avatars/rabbit.png'
    // }
  },
  hatem: {
    id: 'hatem',
    name: 'Hatem'
    // avatar: {
    //   name: 'tiger',
    //   src: '/images/avatars/tiger.png'
    // }
  },
  anas: {
    id: 'anas',
    name: 'Anas'
    // avatar: {
    //   name: 'fox',
    //   src: '/images/avatars/fox.png'
    // }
  }
};

export const users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    // avatarURL: ,
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    // avatarURL: ,
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    // avatarURL: ,
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  }
};

// export default userQuestionData;
