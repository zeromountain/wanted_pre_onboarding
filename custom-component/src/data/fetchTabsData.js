const fetchTabsData = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            title: 'Tab1',
            content: 'Tab menu ONE',
            isActive: true,
          },
          {
            title: 'Tab2',
            content: 'Tab menu TWO',
            isActive: false,
          },
          {
            title: 'Tab3',
            content: 'Tab menu THREE',
            isActive: false,
          },
        ]),
      1000
    );
  });
};

export default fetchTabsData;
