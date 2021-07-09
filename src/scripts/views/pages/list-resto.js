import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant List</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDbSource.restoList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((item) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(item);
    });
  },
};

export default ListResto;
