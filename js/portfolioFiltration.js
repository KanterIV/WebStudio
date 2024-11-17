import { portfolioCards } from './portfolioCards.js';

const refs = {
  filterButtonsList: document.querySelector('.filters'),
  portfolioList: document.querySelector('.projects-list'),
};

refs.filterButtonsList.addEventListener('click', onFilterButtonClick);

function onFilterButtonClick(event) {
  if (event.target.className !== 'filters-btn') {
    return;
  }
  const currentCategory = event.target.id;

  if (currentCategory === 'all') {
    refs.portfolioList.innerHTML = createMarkup(portfolioCards);
    return;
  }

  const filtredArr = portfolioCards.filter(({ category }) => {
    return category === currentCategory;
  });

  refs.portfolioList.innerHTML = createMarkup(filtredArr);
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        img_desc1x,
        img_desc2x,
        img_desc3x,
        img_tab1x,
        img_tab2x,
        img_tab3x,
        img_mob1x,
        img_mob2x,
        img_mob3x,
        title,
        text,
        alt,
        overlay,
      }) => {
        const card = `<li class="projects-list-item">
              <a class="projects-link link" href="">
                <div class="overlay-box">
                  <picture>
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ${img_desc1x}  1x,
                        ${img_desc2x} 2x,
                        ${img_desc3x} 3x
                      "
                      type="image/jpg"
                    />
                    <source
                      media="(min-width: 786px)"
                      srcset="
                        ${img_tab1x}  1x,
                        ${img_tab2x} 2x,
                        ${img_tab3x}   3x
                      "
                      type="image/jpg"
                    />
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ${img_mob1x}  1x,
                        ${img_mob2x} 2x,
                        ${img_mob3x} 3x
                      "
                      type="image/jpg"
                    />

                    <img
                      class="projects-img"
                      src="${img_mob1x}"
                      alt="${alt}"
                      width="396"
                      height="280"
                    />
                  </picture>
                  <div class="overlay">
                    <p class="overlay-text">${overlay}</p>
                  </div>
                </div>
                <div class="project-name">
                  <h2 class="subtitle">${title}</h2>
                  <p class="text">${text}</p>
                </div>
              </a>
            </li>`;
        return card;
      }
    )
    .join('');
}
