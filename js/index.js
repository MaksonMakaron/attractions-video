(() => {
  const attractions = [
    {
      title: 'Колесо времени',
      description: 'Полюбуйтесь Олимпийским парком, Черным морем и горными вершинами с 60-метровой высоты!',
      tag: '#семейный',
      price: '700',
      video: 'e55ac702bbe26ede5fb23a2d6af24f90.webm',
      img: '975d79a13ab942c941bf86ab136292a4.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 110 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Змей Горыныч',
      description: 'Самая быстрая и протяженная в России американская горка!',
      tag: '#экстремальный',
      price: '600',
      video: 'b8ee442b146e4a83984a9626846947a6.mp4',
      img: '4da52016265c81299c2d41dfd017525b.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Экспресс Улиточка',
      description: 'Путешествие на сказочном экспрессе для всей семьи!',
      tag: '#семейный',
      price: '600',
      video: 'ba30bca898a87ba4f7b629b4779841fe.webm',
      img: '10ad66360301707350cfb7fd9acce62c.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Шаролет',
      description: 'Семейная горка позволит разделить незабываемые эмоции с самыми дорогими людьми',
      tag: '#экстремальный',
      price: '600',
      video: '1fb759c2f9239fa0a5a8109c242a2f82.webm',
      img: '20b0194cd807929db05c7417226da4bc.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 130 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Ладья',
      description: 'Гигантские качели поднимают пассажиров на 18-метровую высоту',
      tag: '#экстремальный',
      price: '500',
      video: '428969ebf640e53cb6f65c911a33478d.webm',
      img: '72afbd22130e989e943ee87e4a99c8e4.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Буян',
      description: 'Настоящий морской бой и увлекательное приключение на воде для всей семьи! ',
      tag: '#семейный',
      price: '600',
      video: '46907c348d0a30bba45e91ee6c448074.mp4',
      img: '531e75426768965be9ea649fa81abc80.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 130 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Конек-Горбунок',
      description: 'Классическая карусель с бегающими по кругу лошадками для самых маленьких',
      tag: '#детский',
      price: '600',
      video: '8f27a2ec7db7c8f9e09fb9da9065ff90.webm',
      img: '761a39070d3ef05bdaec82e43879b561.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 90 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Жар-птица',
      description: 'Самый высокий в России аттракцион свободного падения с эффектом катапульты.',
      tag: '#экстремальный',
      price: '400',
      video: '914e6c257aab0b51f1618ff003cd16a1.mp4',
      img: '2345b21a82fc9dc8f84471834f4513d5.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 160 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Морской конек',
      description: 'Увлекательный водный аттракцион для самых маленьких!',
      tag: '#детский',
      price: '700',
      video: '31f2ce1dd86e869f94de350afebd7575.webm',
      img: '9757a764891df5f847de4897b9fd150a.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 150 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Богатырские гонки',
      description: 'Готовы к приятному путешествию по сказочному городку? Тогда выбирайте машинку и отправляйтесь в дорогу!',
      tag: '#детский',
      price: '600',
      video: '18b952b74fee5240dc9a38a8eef35b2e.mp4',
      img: '515862aabce362eb17d804fd744f1878.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Качалки',
      description: 'Легковые автомобили, грузовички, мотоциклы, квадроциклы и даже маленький самолет, управлять которыми могут малыши от 1 года!',
      tag: '#детский',
      price: '400',
      video: '36e28d96afb64a9d36ad33cedcedd399.mp4',
      img: '2221966cb11e817b2a398505f0f5aba1.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Водоворот',
      description: 'Наш чистый-чистый аттракцион дарит хорошее настроение каждому маленькому гостю парка',
      tag: '#детский',
      price: '600',
      video: '9dc3ec7447ff3695e2d6446fce44122c.webm',
      img: 'a969edcaa29cf78c6970a1917b4c7507.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 120 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Карусель сказок',
      description: 'Аттракцион расписан репродукциями сказочных иллюстраций русского художника Ивана Билибина',
      tag: '#семейный',
      price: '700',
      video: '54dbccba7965b09fe2e27405dbe72f8e.mp4',
      img: 'b0b1b0fc96607e15a1d965c74866e812.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 120 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Автодром',
      description: 'Крутые гонки в пяти скоростных режимах на ярких стилизованных болидах!',
      tag: '#семейный',
      price: '700',
      video: '2abab7fa96b53fc29e35094f1402c48d.mp4',
      img: 'b580e9483a25eb71eb5a693a39810f76.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 140 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Дрифтер',
      description: 'Ощутите дух захватывающего гоночного соревнования всей семьей!',
      tag: '#экстремальный',
      price: '400',
      video: '4c161557fc3d9a909372aacbfc8a198d.webm',
      img: 'c3d60b8adb7860d61428f79ff6826fa7.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 110 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Квантовый скачок',
      description: 'Самая скоростная горка формата «перевернутый бумеранг», единственная в России и шестая в мире! ',
      tag: '#экстремальный',
      price: '400',
      video: 'a61b066b396c3fc71233d75cbfbeb5ca.mp4',
      img: 'c7f7f71c95c67a695e561542aad498cd.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 150 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Самоцветы',
      description: 'Традиционная цепочная карусель с телескопической опорой меняет высоту и угол вращения, сияя огнями, как ожерелье из самоцветов.',
      tag: '#семейный',
      price: '700',
      video: '7b2930c0512cf26c56d7a05259c140b7.mp4',
      img: 'cb2593f6046e727724b1cf12cce73fb1.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Веселый пират',
      description: 'Уменьшенная версия башни свободного падения для самых маленьких!',
      tag: '#семейный',
      price: '600',
      video: '42fa067c95a7c06a21cff397d2d98434.webm',
      img: 'cf2adec8dd3a414b53bc4d81b8d19a1f.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 130 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Чайные чашки',
      description: 'Ничего не планируйте на вечер — сегодня вы приглашены на волшебное чаепитие!',
      tag: '#семейный',
      price: '800',
      video: '48c170fdf5a086e1f8e3de3e39d07e73.webm',
      img: 'de37c19208ce07a42e8ca50f210cfd7a.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Волшебный полет',
      description: 'Захватывающий аттракцион, на котором вы ощутите энергию полета!',
      tag: '#экстремальный',
      price: '500',
      video: '5e7d60fbbb967e359eafd50a3faea4ad.mp4',
      img: 'eed56b1cb06d998bab77c3e7f94c92e9.png',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 100 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
    {
      title: 'Вечный двигатель',
      description: 'Первый в России и третий в Европе аттракцион-маятник с полным вращением на 360 градусов.',
      tag: '#экстремальный',
      price: '800',
      video: 'e957ea5cebd6864881fd3b8a6197f44d.mp4',
      img: '4f250c0b144ef8f36ef1e1fd22d9087d.jpg',
      icons: [
        { icon: 'height.svg', text: 'Минимальный рост 170 см' },
        { icon: 'family.svg', text: 'Только со взрослым' },
        { icon: 'note.svg', text: 'Отдельный билет' },
      ],
    },
  ];
  const listVideosEl = document.querySelector('.list-videos');
  const intervalDelay = 15000;
  const startAnimation = 200;
  const endAnimation = 14000;
  let startIndex = 0;
  let endIndex = 7;

  start();

  function createItemListVideos(attraction) {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item-video');
    setTimeout(() => {
      itemEl.classList.add('item-video-show');
    }, startAnimation);

    const videoEl = document.createElement('video');
    videoEl.src = '../video/' + attraction.video;
    videoEl.classList.add('item-video__video');
    videoEl.autoplay = true;
    videoEl.loop = true;

    const priceBlockEl = document.createElement('div');
    priceBlockEl.classList.add('item-video__price');

    const priceTextEl = document.createElement('span');
    priceTextEl.classList.add('item-video__price-text');
    priceTextEl.textContent = attraction.price + '₽';

    priceBlockEl.append(priceTextEl);

    itemEl.append(videoEl);
    itemEl.append(priceBlockEl);
    listVideosEl.append(itemEl);
    setTimeout(() => {
      itemEl.classList.add('item-video-hide');
    }, endAnimation);
  }

  function createItems() {
    listVideosEl.innerHTML = '';
    let countVideo = 0;
    if (endIndex > attractions.length) {
      endIndex = attractions.length;
    }
    for (let i = startIndex; i < endIndex; i++) {
      if (attractions.length - 1 === i && countVideo != 7) {
        const attraction = attractions[i];
        countVideo++;
        createItemListVideos(attraction);

        startIndex = 0;
        i = -1;
        endIndex = 7 - countVideo;

        if (countVideo === 7) {
          endIndex = 7;
          return;
        }
      } else {
        const attraction = attractions[i];
        countVideo++;
        createItemListVideos(attraction);
      }
    }
    startIndex = endIndex;
    endIndex += 7;
  }

  function start() {
    createItems();
    setInterval(() => {
      createItems();
    }, intervalDelay);
  }
})();
