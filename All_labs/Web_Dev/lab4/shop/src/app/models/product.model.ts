export interface Product {
    id: number;
    image: string;         // URL главного изображения товара
    name: string;          // Название товара
    description: string;   // Описание товара
    rating: number;        // Рейтинг товара (например, от 0 до 5)
    link: string;          // Ссылка на товар на kaspi.kz
    gallery?: string[];    // Опциональное свойство – массив изображений для галереи
  }