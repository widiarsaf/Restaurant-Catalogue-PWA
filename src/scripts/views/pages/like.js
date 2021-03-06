import FavoriteRestoIdb from '../../data/resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurants</h2>
      <div id="restaurants" class="restaurants">
 
      </div>
    </div>
 `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <h4>You don't have any liked restaurant</h4>
      `;
    } else {
      restaurants.forEach((resto) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
        // console.log(resto);
      });
    }
  },
};

export default Like;
