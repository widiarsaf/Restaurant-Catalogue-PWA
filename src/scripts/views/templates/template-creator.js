import API_ENDPOINT from '../../globals/api-endpoint';

const createRestoItemTemplate = (data) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${data.name}"
            src="${API_ENDPOINT.IMAGE.S}${data.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${data.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${data.id}`}">${data.name}</a></h3>
        <h4><i class="fas fa-map-marker-alt"></i> ${data.city}</h4>
				<p>${data.description}</p>
    </div>
  </div>
  `;

const createRestoDetailTemplate = (detail) => `
    <img class="resto-detail__poster" src="${API_ENDPOINT.IMAGE.S}${detail.pictureId}" />
  <h2 class="resto-detail__title">${detail.name}</h2>
  <h3 class="resto-detail__location">${detail.city}, ${detail.address}</h3>
  <div class="resto-detail__info">    
  </div>
  <div class="resto-detail__overview">
    <h4 class="resto-detail__description">Description</h4>
    <p>${detail.description}</p>
    <h4 class="resto-detail__categories">Categories</h4>
    <li>${detail.categories
    .map(
      (category) => `
            <span>${category.name}</span>
          `,
    )}
      </li>
    <h4 class="resto-detail__makanan">Menu Makanan</h4>
    <li>${detail.menus.foods
    .map(
      (food) => `
            <span>${food.name}</span>
          `,
    )}
      </li>
    <h4 class="resto-detail__minuman">Menu Minuman</h4>
    <li>${detail.menus.drinks
    .map(
      (drink) => `
            <span>${drink.name}</span>
          `,
    )}
      </li>
    <h3 class="resto-detail__review">Review</h3>
     ${detail.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
              <p class="review-name"><i class="fas fa-user-circle"></i>  ${review.name}</p>
              <p class="review-date">${review.date}</p>
            <div class="review-body">
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
