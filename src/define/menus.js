const MENUS = {
  M1UCS: {
    title: 'M1UCS',
    url: '/m1ucs',
  },
  PRODUCT: {
    title: 'PRODUCT',
    url: '/product',
    sub: [
      {
        title: 'M1 EdgeHub',
        url: '/edgeHub',
      },
      {
        title: 'M1 Winch for Drone',
        url: '/winchForDrone',
      },
      {
        title: 'JI-HO V2',
        url: '/jiHoV2',
      },
      {
        title: 'SV-MAX',
        url: '/svMax',
      },
    ],
  },
  SERVICE: {
    title: 'SERVICE',
    url: '/service',
    sub: [
      {
        title: 'Wide Range Survey',
        url: '/survey',
      },
      {
        title: 'AeroLenze',
        url: '/aerolenze',
      },
    ],
  },
  COMPANY: {
    title: 'COMPANY',
    url: '/company',
  },
  NEWS: {
    title: 'NEWS',
    url: '/news',
  },
};

export default Object.values(MENUS);
