const images = import.meta.globEager('./img/*');


interface IDataItem {
  name: string;
  img: string;
  u1: IUItem[];
  u2: IUItem[];
  u3: IUItem[];
}

interface IUItem {
  tag?: string;
  steps: string[];
  desc?: string;
}

export const data: IDataItem[] = [
  {
    name: 'Kitana',
    img: images['./img/Kitanna.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'X+A'
        ],
        desc: 'можно в прыжке'
      },
      {
        steps: [
          '←',
          '←',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '←+A',
          '→+X'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '←',
          '↓',
          '→',
          '→',
          'Z'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          'Y',
          'Y',
          'B',
          'B',
          'C'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '→',
          '↓',
          '↓',
          'C'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'X',
          'B',
          'Z',
          'B',
          'C',
          'B',
          'A',
          'B',
          'X',
          'B'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '↓',
          '←',
          '→',
          '→',
          'A'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          '→',
          'Z'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Mileena',
    img: images['./img/Milena.png'].default,
    u1: [
      {
        steps: [
          'X 2s'
        ],
        desc: 'можно в прыжке'
      },
      {
        steps: [
          '→',
          '→',
          'C'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '↓',
          'Z'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '↑+A',
          '↓+A'
        ]
      },
      {
        steps: [
          '(X, X)',
          'Z',
          'Z',
          '↑+C',
          '↑+Z'
        ]
      },
      {
        steps: [
          '(X, X)',
          'Z',
          'Z',
          '↓+→+C',
          '↓+→+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '←',
          '←',
          '←',
          '→',
          'C'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '↓',
          '→',
          '↓',
          '→',
          'A'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '↓',
          '↓',
          '↓',
          'A'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'A',
          'A',
          'X',
          'B',
          'Z',
          'C',
          'Z',
          'B',
          'X',
          'A'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '↓',
          '↓',
          '←',
          '→',
          'X'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '↓',
          '↓',
          '→',
          '→',
          'X'
        ],
        tag: 'BABALITY'
      },
      {
        steps: [
          ''
        ]
      }
    ]
  },
  {
    name: 'Jade',
    img: images['./img/Jade.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'C'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'C'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '↓+A',
          '↓+X'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '↓+A',
          'C',
          'Z',
          'C',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '↑',
          '↑',
          '↓',
          '→',
          'X'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'B',
          'Y'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '←',
          '→',
          '↓',
          'Y'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'C',
          'X',
          'A',
          'Z',
          'Z',
          'C',
          'B',
          'B',
          'X',
          'Z'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '←',
          '↓',
          '←',
          '←',
          'Z'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '↓',
          '↓',
          '→',
          '↓',
          'Z'
        ],
        tag: 'BABALITY'
      },
      {
        steps: [
          ''
        ]
      }
    ]
  },
  {
    name: 'Sektor',
    img: images['./img/Sektor.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'C'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          ''
        ]
      }
    ],
    u2: [
      {
        steps: [
          'Z',
          'Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '↓+A'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'A',
          'Y',
          'Y',
          'B'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '→',
          '→',
          '→',
          '←',
          'B'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          '↓'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          '↑'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'X',
          'B',
          'B',
          'Z',
          'Z',
          'C',
          'C',
          'A',
          'A',
          'X'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Y',
          '↓'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '←',
          '↓',
          '↓',
          '↓',
          'Z'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Cyrax',
    img: images['./img/Cyrax.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          'C'
        ]
      },
      {
        steps: [
          'держать C',
          '→',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          'держать C',
          '←',
          '←',
          'Z'
        ]
      },
      {
        steps: [
          '→',
          '↓',
          'B'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'B',
          'A'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          'A'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          'X',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '↓',
          '↓',
          '→',
          '↑',
          'Y'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          '↓',
          '↓',
          '↑',
          '↓',
          'X'
        ],
        tag: 'FATALITY 2'
      },
      {
        steps: [
          'Y',
          'B',
          'Y'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '↑',
          '↑',
          '↓',
          '↓'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'Z',
          'X',
          'Z',
          'Z',
          'X',
          'Z',
          'X',
          'Z',
          'C',
          'A'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          '↑'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '→',
          '→',
          '←',
          'X'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Smoke',
    img: images['./img/Smoke.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'C'
        ]
      },
      {
        steps: [
          'Y',
          'Y',
          '↑'
        ]
      },
      {
        steps: [
          'B'
        ],
        desc: 'в прыжке'
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          'A'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'A'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'C',
          'Z',
          'A'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '↑',
          '↑',
          '→',
          '↓'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          'зажать Y+B',
          '↓',
          '↓',
          '→',
          '↑'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          'C'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '↓',
          '→',
          '→',
          'B'
        ],
        tag: 'ANIMALITY',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          'X',
          'C',
          'C',
          'Z',
          'B',
          'B',
          'A',
          'A',
          'X',
          'B',
          'B'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Z'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '↓',
          '↓',
          '←',
          '←',
          'Z'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Sub-Zero',
    img: images['./img/Sub-Z.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '←+A+B+C'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'A',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'C',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'A',
          'C',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '←',
          '←',
          '↓',
          '←',
          'Y'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          'B',
          'B',
          'Y',
          'B',
          'Y'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '←',
          '↓',
          '→',
          '→',
          'Z'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '→',
          '↑',
          '↑'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'C',
          'Z',
          'A',
          'X',
          'Z',
          'Z',
          'X',
          'X',
          'A',
          'X'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'C',
          'C',
          'Y',
          'Y',
          '↑'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '↓',
          '↓',
          '←',
          '←',
          'Z'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Scorpion',
    img: images['./img/Skorp.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          'B'
        ],
        desc: 'в прыжке'
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '↑+A'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          'C'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '→',
          '→',
          '↓',
          '↑',
          'Y'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          '↓',
          '↓',
          '↑',
          'Z'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '→',
          '↑',
          '↑',
          'A'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'X',
          'B',
          'Z',
          'Z',
          'C',
          'Z',
          'X',
          'X',
          'A',
          'X'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '←',
          '→',
          '→',
          '←',
          'C'
        ],
        tag: 'FRIENDSHIP',
        desc: 'вблизи'
      },
      {
        steps: [
          '↓',
          '←',
          '←',
          '→',
          'X'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Reptile',
    img: images['./img/Reptl.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '↑',
          '↓',
          'Z'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'C'
        ]
      },
      {
        steps: [
          '←',
          '←',
          'X+A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'X+A'
        ]
      },
      {
        steps: [
          '←+A+B+C'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '↓+A'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '←',
          '→',
          '↓',
          'B'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '→',
          '→',
          '↑',
          '↑',
          'Z'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          'B',
          'Y',
          'B',
          'B'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'B',
          'Z',
          'Z',
          'B',
          'X',
          'A',
          'C',
          'C',
          'B',
          'A'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '↓',
          '→',
          '→',
          '←',
          'Z'
        ],
        tag: 'FRIENDSHIP',
        desc: 'вблизи'
      },
      {
        steps: [
          '→',
          '→',
          '←',
          '↓',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Sub-Zero (Classic)',
    img: images['./img/Sub_Z.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'C'
        ]
      },
      {
        steps: [
          '←+A+B+C'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '↓+A',
          '↓+X'
        ]
      },
      {
        steps: [
          'Z',
          '←+C',
          '→+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '←+C',
          '←+Z',
          '→+C'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '↓',
          '↓',
          '↓',
          '→',
          'X'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          '→',
          '↓',
          '→',
          '→',
          'X'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'A',
          'X',
          'B',
          'C',
          'C',
          'Z',
          'Z',
          'A',
          'X',
          'A'
        ],
        tag: 'BRUTALITY'
      }
    ]
  },
  {
    name: 'Smoke (Classic)',
    img: images['./img/H_Smoke.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          'B'
        ],
        desc: 'в прыжке'
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '↑+A'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          'C'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'Y',
          'B',
          'Y',
          'Y',
          'Z'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '→',
          '↑',
          '↑',
          'A'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'X',
          'B',
          'C',
          'Z',
          'X',
          'Z',
          'X',
          'Z',
          'A',
          'C'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '↓',
          '←',
          '←',
          '→',
          'X'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Ermac',
    img: images['./img/Ermac.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '↓',
          '←',
          'Z'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'C',
          'A'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '←+A',
          '↓+→+A'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '←+A',
          'Z',
          'C'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '↓',
          '↑',
          '↓',
          '↓',
          '↓',
          'B'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          'Y',
          'B',
          'Y',
          'Y',
          'Z'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Y',
          'C'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'X',
          'X',
          'A',
          'B',
          'Z',
          'C',
          'B',
          'X',
          'A',
          'C',
          'Z'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          ''
        ]
      }
    ]
  },
  {
    name: 'Noob Saibot',
    img: images['./img/Noob.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '↑'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'C',
          'C',
          'C',
          'C'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'A',
          'Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'X',
          'C',
          'A',
          'B',
          'C',
          'Z',
          'X',
          'A',
          'B',
          'C',
          'Z'
        ],
        tag: 'BRUTALITY'
      }
    ]
  },
  {
    name: 'Rain',
    img: images['./img/Rain.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '←+Z'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          'A',
          'X'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'A',
          'X'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'X',
          'X',
          'B',
          'C',
          'Z',
          'B',
          'C',
          'Z',
          'B',
          'X',
          'A'
        ],
        tag: 'BRUTALITY'
      }
    ]
  },
  {
    name: 'Sonya',
    img: images['./img/Sonya_B.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '↓+A+B'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '↓',
          'Z'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          '(Z, Z)',
          'X',
          'X',
          '↑+A'
        ]
      },
      {
        steps: [
          '(Z, Z)',
          'X',
          'X',
          'A',
          '←+X'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '←',
          '→',
          '↓',
          '↓',
          'Y'
        ],
        tag: 'FATALITY 1'
      },
      {
        steps: [
          'зажать Y+B',
          '↑',
          '↑',
          '←',
          '↓'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          'X'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'зажать A',
          '←',
          '→',
          '↓',
          '→',
          'отпустить A'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'C',
          'B',
          'X',
          'C',
          'B',
          'X',
          'A',
          'B',
          'Z',
          'C'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          '←',
          '→',
          '←',
          '↓',
          'Y'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '↓',
          '↓',
          '↓',
          '→',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Jax',
    img: images['./img/Jax_B.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'A',
          'A',
          'A',
          'A'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '→',
          '→',
          '←',
          '←',
          'X'
        ]
      },
      {
        steps: [
          'C 3s'
        ]
      },
      {
        steps: [
          'A',
          'X',
          'X',
          'X'
        ],
        desc: 'в упор'
      },
      {
        steps: [
          'B'
        ],
        desc: 'в прыжке'
      }
    ],
    u2: [
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '↓+B',
          'A',
          '←+X'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          '↓+X',
          'X',
          'B',
          'A',
          '←+X'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'зажать B',
          '↑',
          '↑',
          '→',
          '↓',
          'отпустить B'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          'Y',
          'B',
          'Y',
          'Y',
          'C'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '↓',
          '→',
          '↓',
          'A'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'зажать A',
          '→',
          '→',
          '↓',
          '→',
          'отпустить A'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'X',
          'X',
          'B',
          'A',
          'X',
          'X',
          'X',
          'B',
          'A',
          'X'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'C',
          'Y',
          'Y',
          'C'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '↓',
          '↓',
          '↓',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Kano',
    img: images['./img/Kanno.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'A'
        ]
      },
      {
        steps: [
          'C 3s'
        ]
      },
      {
        steps: [
          '→',
          '↓',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          'B'
        ],
        desc: 'в прыжке'
      }
    ],
    u2: [
      {
        steps: [
          'C',
          'A'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'A'
        ]
      },
      {
        steps: [
          'X',
          'X',
          '↓+A',
          '↓+X'
        ]
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          'C',
          '←+Z'
        ]
      },
      {
        steps: [
          'Z',
          'Z',
          'C',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'A',
          'B',
          'B',
          'Z'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          'зажать A',
          '→',
          '↓',
          '↓',
          '→',
          'отпустить A'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '↑',
          '↑',
          '←',
          'C'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'зажать X',
          'B',
          'B',
          'B',
          'B',
          'отпустить X'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'A',
          'B',
          'A',
          'X',
          'B',
          'Z',
          'C',
          'B',
          'Z',
          'C'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'C',
          'Y',
          'Y',
          'Z'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          '↓',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Stryker',
    img: images['./img/Stryker.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '→',
          '←',
          'A'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'C',
          'C',
          '←+Z'
        ]
      },
      {
        steps: [
          '',
          'X',
          'X',
          'A'
        ],
        desc: 'C'
      },
      {
        steps: [
          'C',
          'C',
          '←+A',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '→',
          '→',
          '→',
          'C'
        ],
        tag: 'FATALITY 1',
        desc: 'издалека'
      },
      {
        steps: [
          '↓',
          '→',
          '↓',
          '→',
          'B'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '→',
          '↑',
          '↑',
          'Z'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'B'
        ],
        tag: 'ANIMALITY',
        desc: 'вблизи'
      },
      {
        steps: [
          'X',
          'A',
          'Z',
          'C',
          'X',
          'A',
          'C',
          'Z',
          'X',
          'C',
          'C'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'A',
          'Y',
          'Y',
          'A'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '↓',
          '→',
          '→',
          '←',
          'X'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Sindel',
    img: images['./img/Sindel.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'C'
        ],
        desc: 'в прыжке'
      },
      {
        steps: [
          '←',
          '←',
          '→',
          'Z'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          '',
          'X',
          'X',
          '↓+X'
        ],
        desc: 'C'
      },
      {
        steps: [
          '',
          'X',
          'X',
          'A',
          'Z'
        ],
        desc: 'C'
      }
    ],
    u3: [
      {
        steps: [
          'Y',
          'Y',
          'B',
          'B',
          'Y+B'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          'Y',
          'Y',
          'B',
          'Y',
          'B'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '↓',
          '↓',
          '↓',
          'A'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '→',
          '→',
          '↑',
          'X'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'B',
          'C',
          'B',
          'C',
          'Z',
          'B',
          'Z',
          'C',
          'B',
          'A'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Y',
          'Y',
          'Y',
          '↑'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          '↑'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Kabal',
    img: images['./img/Kabal.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          'X'
        ],
        desc: 'можно в прыжке'
      },
      {
        steps: [
          '←',
          '←',
          '←',
          'Y'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'C'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'C',
          'C',
          '←+Z'
        ]
      },
      {
        steps: [
          'C',
          'C',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          '(C, C)',
          'X',
          'X',
          '↓+X'
        ]
      },
      {
        steps: [
          '(C, C)',
          'X',
          'X',
          '↓+A',
          '↓+X'
        ]
      },
      {
        steps: [
          '(C, C)',
          'X',
          'X',
          'Z',
          '←+Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '↓',
          '↓',
          '←',
          '→',
          'B'
        ],
        tag: 'FATALITY 1',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          'Y',
          'B',
          'B',
          'B',
          'Z'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          'B',
          'B',
          'Z'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'зажать X',
          '→',
          '→',
          '↓',
          '→',
          'отпустить X'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'B',
          'C',
          'C',
          'C',
          'Z',
          'A',
          'A',
          'A',
          'X',
          'A'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'C',
          'Y',
          'Y',
          '↑'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          'Y',
          'Y',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Shang Tsung',
    img: images['./img/Shang.png'].default,
    u1: [
      {
        steps: [
          '←',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '→',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '→',
          '←',
          '←',
          'C'
        ]
      },
      {
        steps: [
          'Y',
          'B',
          'Z'
        ],
        tag: 'Mileena'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          '↓',
          'B'
        ],
        tag: 'Jade'
      },
      {
        steps: [
          '↓',
          '→',
          '←',
          'Y'
        ],
        tag: 'Sektor'
      },
      {
        steps: [
          'B',
          'B',
          'B'
        ],
        tag: 'Cyrax'
      },
      {
        steps: [
          '←',
          '←',
          'A или →',
          '→',
          'A'
        ],
        tag: 'Smoke'
      },
      {
        steps: [
          '→',
          '↓',
          '→',
          'X'
        ],
        tag: 'Sub-Zero'
      },
      {
        steps: [
          '↓',
          '↓',
          '→',
          'A'
        ],
        tag: 'Scorpion'
      },
      {
        steps: [
          'Y',
          'B',
          'B',
          'Z'
        ],
        tag: 'Reptile'
      },
      {
        steps: [
          'B',
          'B',
          'Y',
          'Y'
        ],
        tag: 'Sub-Zero'
      },
      {
        steps: [
          '↓',
          '↓',
          '↑'
        ],
        tag: 'Ermac'
      },
      {
        steps: [
          '→',
          '↓',
          '↓',
          '←',
          'Z'
        ],
        tag: 'Noob Saibot'
      },
      {
        steps: [
          '↓+A+B+Y'
        ],
        tag: 'Sonya'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          'A'
        ],
        tag: 'Jax'
      },
      {
        steps: [
          '←',
          '→',
          'B'
        ],
        tag: 'Kano'
      },
      {
        steps: [
          '→',
          '→',
          '→',
          'Z'
        ],
        tag: 'Stryker'
      },
      {
        steps: [
          '←',
          '↓',
          '←',
          'C'
        ],
        tag: 'Sindel'
      },
      {
        steps: [
          'A',
          'B',
          'Z'
        ],
        tag: 'Kabal'
      },
      {
        steps: [
          '↑',
          '↑',
          '↑'
        ],
        tag: 'Nightwolf'
      },
      {
        steps: [
          'Y',
          'Y',
          'B',
          'Y'
        ],
        tag: 'Kung Lao'
      },
      {
        steps: [
          '→',
          '↓',
          '←',
          '↑',
          '→'
        ],
        tag: 'Liu Kang'
      }
    ],
    u2: [
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          '',
          'X',
          'X',
          'A',
          '←+Z'
        ],
        desc: 'C'
      }
    ],
    u3: [
      {
        steps: [
          'зажать A',
          '↓',
          '→',
          '→',
          '↓',
          'отпустить A'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          'зажать A',
          'Y',
          'B',
          'Y',
          'B',
          'отпустить A'
        ],
        tag: 'FATALITY 2',
        desc: 'в упор'
      },
      {
        steps: [
          '↑',
          '↑',
          '←',
          'A'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'зажать X',
          'Y',
          'Y',
          'Y',
          'отпустить X'
        ],
        tag: 'ANIMALITY',
        desc: 'вблизи'
      },
      {
        steps: [
          'X',
          'B',
          'B',
          'B',
          'C',
          'X',
          'A',
          'A',
          'B',
          'B',
          'B'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'C',
          'C',
          'Y',
          'Y',
          '↓'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Nightwolf',
    img: images['./img/N_Wolf.png'].default,
    u1: [
      {
        steps: [
          '↓',
          '←',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'C'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '←',
          'Z'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'Z',
          'Z',
          '←+Z'
        ]
      },
      {
        steps: [
          '',
          'X',
          'X',
          'A',
          'Z'
        ],
        desc: 'C'
      },
      {
        steps: [
          '',
          'X',
          'X',
          'A',
          '↓+→+X'
        ],
        desc: 'C'
      }
    ],
    u3: [
      {
        steps: [
          '↑',
          '↑',
          '←',
          '→',
          'B'
        ],
        tag: 'FATALITY 1',
        desc: 'в упор'
      },
      {
        steps: [
          '←',
          '←',
          '↓',
          'X'
        ],
        tag: 'FATALITY 2',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          'Y',
          'Y',
          'B'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '→',
          '→',
          '↓',
          '↓'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'X',
          'Z',
          'C',
          'C',
          'B',
          'B',
          'A',
          'A',
          'X',
          'Z'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Y',
          '↓'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии прыжка'
      },
      {
        steps: [
          '→',
          '←',
          '→',
          '←',
          'A'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Kung Lao',
    img: images['./img/Kung_L.png'].default,
    u1: [
      {
        steps: [
          '←',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '↑'
        ]
      },
      {
        steps: [
          '↓+Z'
        ],
        desc: 'в прыжке'
      },
      {
        steps: [
          '→',
          '↓',
          '→',
          'Y'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'C',
          '←+Z'
        ]
      },
      {
        steps: [
          'C',
          'C',
          'Z'
        ]
      },
      {
        steps: [
          'X',
          'A',
          'X',
          'A',
          'C',
          'C',
          'Z'
        ]
      }
    ],
    u3: [
      {
        steps: [
          'Y',
          'B',
          'Y',
          'B',
          '↓'
        ],
        tag: 'FATALITY 1'
      },
      {
        steps: [
          '→',
          '→',
          '←',
          '↓',
          'X'
        ],
        tag: 'FATALITY 2',
        desc: 'вблизи'
      },
      {
        steps: [
          '↓',
          '↓',
          '→',
          '→',
          'C'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Y',
          'B'
        ],
        tag: 'ANIMALITY',
        desc: 'в упор'
      },
      {
        steps: [
          'X',
          'A',
          'C',
          'Z',
          'B',
          'X',
          'A',
          'C',
          'Z',
          'B',
          'X'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'A',
          'Y',
          'C'
        ],
        tag: 'FRIENDSHIP',
        desc: 'на расстоянии подсечки'
      },
      {
        steps: [
          '↓',
          '→',
          '→',
          'C'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Liu Kang',
    img: images['./img/Liu.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'X'
        ],
        desc: 'можно в прыжке'
      },
      {
        steps: [
          '→',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'Z'
        ]
      },
      {
        steps: [
          'C 3s'
        ]
      }
    ],
    u2: [
      {
        steps: [
          'X',
          'X',
          '←+A'
        ]
      },
      {
        steps: [
          '(X, X, B)',
          'C',
          'C',
          'Z',
          'C'
        ]
      }
    ],
    u3: [
      {
        steps: [
          '→',
          '→',
          '↓',
          '↓',
          'C'
        ],
        tag: 'FATALITY 1'
      },
      {
        steps: [
          '↑',
          '↓',
          '↑',
          '↑',
          'Y+B'
        ],
        tag: 'FATALITY 2'
      },
      {
        steps: [
          'Y',
          'B',
          'B',
          'C'
        ],
        tag: 'Stage FATALITY'
      },
      {
        steps: [
          '↓',
          '↓',
          '↑'
        ],
        tag: 'ANIMALITY',
        desc: 'вблизи'
      },
      {
        steps: [
          'X',
          'A',
          'X',
          'B',
          'C',
          'Z',
          'C',
          'Z',
          'A',
          'A',
          'X'
        ],
        tag: 'BRUTALITY'
      },
      {
        steps: [
          'Y',
          'Y',
          'Y',
          'Y',
          '↓'
        ],
        tag: 'FRIENDSHIP'
      },
      {
        steps: [
          '↓',
          '↓',
          '↓',
          'Z'
        ],
        tag: 'BABALITY'
      }
    ]
  },
  {
    name: 'Motaro',
    img: images['./img/Motaro.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '←',
          'X'
        ]
      },
      {
        steps: [
          '↓',
          '↑'
        ]
      }
    ],
    u2: [],
    u3: []
  },
  {
    name: 'Shao Kahn',
    img: images['./img/S_Kahn.png'].default,
    u1: [
      {
        steps: [
          '→',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '→',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '→',
          'X'
        ]
      },
      {
        steps: [
          '←',
          '←',
          '→',
          'A'
        ]
      },
      {
        steps: [
          '↓',
          '↓',
          'C'
        ]
      },
      {
        steps: [
          '↓',
          '↓',
          'Z'
        ]
      }
    ],
    u2: [],
    u3: []
  }
];