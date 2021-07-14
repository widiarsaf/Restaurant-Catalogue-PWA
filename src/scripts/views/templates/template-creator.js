import API_ENDPOINT from '../../globals/api-endpoint';

const createRestoItemTemplate = (data) => `
  <div tabindex="0" class="resto-item">
    <div class="resto-item__header">
        <img tabindex="0" class="resto-item__header__poster" alt="${data.name}"
            src="${API_ENDPOINT.IMAGE.S}${data.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${data.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 tabindex="0" ><a class = "resto-item__name" href="${`/#/detail/${data.id}`}">${data.name}</a></h3>
        <h4 tabindex="0" ><i class="fa fa-map-marker-alt"></i> ${data.city}</h4>
				<p tabindex="0">${data.description}</p>
    </div>
  </div>
  `;

const createRestoDetailTemplate = (detail) => `
  <img tabindex="0" class="resto-detail__poster" src="${API_ENDPOINT.IMAGE.S}${detail.pictureId}" />
  <h2 tabindex="0" class="resto-detail__title">${detail.name}</h2>
  <h3  tabindex="0" class="resto-detail__location">${detail.city}, ${detail.address}</h3>
  <div class="resto-detail__info">    
  </div>
  <div tabindex="0" class="resto-detail__overview">
    <h4 tabindex="0" class="resto-detail__description">Description</h4>
    <p tabindex="0">${detail.description}</p>
    <h4 tabindex="0" class="resto-detail__categories">Categories</h4>
    <li tabindex="0">${detail.categories
    .map(
      (category) => `
            <span>${category.name}</span>
          `,
    )}
      </li>
    <h4 tabindex="0" class="resto-detail__makanan">Menu Makanan</h4>
    <li tabindex="0">${detail.menus.foods
    .map(
      (food) => `
            <span>${food.name}</span>
          `,
    )}
      </li>
    <h4 tabindex="0" class="resto-detail__minuman">Menu Minuman</h4>
    <li tabindex="0">${detail.menus.drinks
    .map(
      (drink) => `
            <span>${drink.name}</span>
          `,
    )}
      </li>
    <h3 tabindex="0" class="resto-detail__review">Review</h3>
     ${detail.customerReviews
    .map(
      (review) => `
          <div tabindex="0" class="detail-review-item">
              <p class="review-name"><i class="fa fa-user-circle"></i>  ${review.name}</p>
              <p class="review-date">${review.date}</p>
            <div tabindex="0" class="review-body">
              ${review.review}
            </div>
          </div>
        `
    )}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
