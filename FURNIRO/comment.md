# Nhận xét bài làm

## Tổng quan
Trang web của em bị lỗi *404* khi launch trong github

**Lưu ý:**  trang web launch đầu tiên thường là `index.html` nên em nên đặt tên lại file `home.html` nha.

### Tổ chức folder
Cách tổ chức folder của em chưa được gọn gàng, khó quản lý và deploy. Có nhiều cách tổ chức folder. And gợi ý 1 cách tổ chức folder gọn hơn, phù hợp với bài này:
```css
.
└── btck/
    ├── home.html
    ├── shop.html
    ├── contact.html
    ├── cart.html
    ├── blog.html
    ├── css/
    │   ├── style.css /*CSS dùng chung giữa các trang*/
    │   ├── home.css
    │   ├── shop.css
    │   ├── contact.css
    │   ├── cart.css
    │   └── blog.css
    ├── js/
    │   ├── index.js /*JS dùng chung */
    │   ├── home.js
    │   ├── shop.js
    │   ├── contact.js
    │   ├── cart.js
    │   └── blog.js
    ├── asset/
    │   ├── universal/ /*các file (hình ảnh, logo,...) dùng chung */
    │   ├── home/
    │   │   └── image1.png /*file ví dụ*/
    │   ├── shop/
    │   ├── contact/
    │   ├── cart/
    │   └── blog/
    └── component/ /*những thành phần dùng chung*/
        ├── header.html /*header đầu trang*/
        ├── footer.html
        └── nav.html
```

## HTML
Trong mấy file `html` của em thì anh thấy `src` trong element `img` của em là đang truy cập vào tệp hình ảnh nằm cùng folder với file `html` đó

VD:
```html
<img id="brand-image" src="logo.png" alt="Furniro icon">
```

Nhưng anh không hề thấy có bất cứ tệp nào trong folder của em nên trang web của em không hề có hình ảnh nào

1. Em có thể tạo 1 thư mục riêng để lưu hình ảnh
2. Em đăng hình ảnh lên 1 trang web nào đó rồi chèn cái URL hình ảnh đó vào trang web của em *(anh khuyên cách này tốt hơn)*


## CSS

Em thiếu `;` ở sau chữ `center`

```css
.cart-totals {
    text-align: center
    width: 50%;
    background-color: #B88E2F;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```
Em không nên đặt tất cả `css` vào trong 1 file `html` bởi nó sẽ làm chương trình của em dài và rất khó đọc

Good 

## JS
Trong phần `loadprod()` trong JS, nếu em fetched product rồi thì lấy trong storage rồi trả về, em đang không có tạo product mà lại return không cần thiết.


