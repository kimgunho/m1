const MENUS = {
  product: {
    title: 'Product',
    url: '/product',
    sub: {
      software: {
        title: 'Software',
        url: '/software',
        pages: [
          {
            title: 'M1UCS',
            url: '/m1ucs',
          },
        ],
      },
      hardware: {
        title: 'Hardware',
        url: '/hardware',
        pages: [
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
    },
  },
  service: {
    title: 'Service',
    url: '/service',
    sub: {
      survey: {
        title: 'Wide Range Survey',
        url: '/survey',
      },
      aeroLenze: {
        title: 'AeroLenze',
        url: '/aerolenze',
      },
    },
  },
  company: {
    title: 'Company',
    url: '/company',
  },
  news: {
    title: 'News',
    url: '/news',
  },
};

export default Object.values(MENUS);
