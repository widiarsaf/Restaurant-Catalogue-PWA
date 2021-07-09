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
    <img class="resto-detail__poster" src="${API_ENDPOINT.IMAGE.M}${detail.pictureId}" />
  <h2 class="resto-detail__title">${detail.name}</h2>
  <h3 class="resto-detail__location">${detail.city}, ${detail.address}</h3>
  <div class="resto-detail__info">
  <h3>Information</h3>
    
  </div>
  <div class="resto-detail__overview">
    <h4>Tagline</h4>
    <p>${detail.description}</p>
    <h4>Release Date</h4>
    <li>${detail.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>
          `,
    )}
      </li>
    <h4>Menu Makanan</h4>
    <li>${detail.menus.foods
    .map(
      (food) => `
            <span class="category">${food.name}</span>
          `,
    )}
      </li>
    <h4>Menu Minuman</h4>
     <li>${detail.menus.drinks
    .map(
      (drink) => `
            <span class="category">${drink.name}</span>
          `,
    )}
      </li>
    <h3>Review</h3>
     ${detail.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )}
  </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
