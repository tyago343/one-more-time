import { http, HttpResponse } from 'msw';
import { product, products } from '../Product.mock';
const BASE_URL = 'http://localhost:3003/api/v1';
const handlers = [
  http.get<never, any>(`${BASE_URL}/products`, () => {
    return HttpResponse.json(products);
  }),
  http.get<{ id: string }, any>(`${BASE_URL}/products/:id`, () => {
    return HttpResponse.json(product);
  }),
];

export { handlers };
