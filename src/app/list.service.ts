import { Injectable } from '@angular/core';
import { List } from './List';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  // products = data;
  api = 'https://5e79ba9717314d0016133574.mockapi.io/list';
  constructor(
    private http: HttpClient
  ) { }

  listProducts(): Observable<List[]> {
    return this.http.get<List[]>(this.api);
    // return this.products;
  }
  // ListProduc(id): Observable<List>{
  //   return this.http.get<List>(`${this.api}/${id}`);
  // }
  // addProducts(product): Observable<Product> {
  //   return this.http.post<Product>(`${this.api}`, product);
    
  // }
  // updateProducts(product):Observable<Product> {
  //   return this.http.put<Product>(`${this.api}/${product.id}`, product);
  // }
  // removeProducts(id):Observable<Product> {
  //   return this.http.delete<Product>(`${this.api}/${id}`);
  //   // return this.http.delete<Product>(`${this.api}/${id}`);
  // }
  //SERVICES
  // listProduc(id) {//du lieuj chi tiet
  //   return this.products.find(product => product.id == id);
  // }
  // addProducts(product) {
  //   let newObj = { ...product };
  //   this.products.push(newObj);
    
  // }
  // updateProducts(product) {
  //   return this.products.map(item => item.id === product.id ? product : item);
  //   // return this.products.filter(product => product.id == id);
  // }
  // removeProducts(id) {
  //   return this.products.filter(product => product.id == id);
  // }
}
