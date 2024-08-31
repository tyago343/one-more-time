import { http, HttpResponse } from 'msw';
import { products } from './Product.mock';
const BASE_URL = 'http://localhost:8080';
const handlers = [
  http.get<never, any>(`${BASE_URL}/products`, () => {
    return HttpResponse.json(products);
  }),
];

export { handlers };
