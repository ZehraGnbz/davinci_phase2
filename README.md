# 🎮 Da Vinci Board Game Cafe Management System

## 📖 Proje Açıklaması

Bu proje, **Da Vinci Board Game Cafe** için geliştirilmiş modern bir kullanıcı ve post yönetim sistemidir. Full-stack web uygulaması olarak tasarlanmış olup, frontend ve backend ayrı portlarda çalışacak şekilde optimize edilmiştir.

## 🎯 Özellikler

- ✅ **Kullanıcı Yönetimi** - CRUD operations
- ✅ **Post Yönetimi** - CRUD operations  
- ✅ **Real-time API** - Frontend-Backend entegrasyonu
- ✅ **Responsive Design** - Tüm cihazlarda uyumlu
- ✅ **Modern UI/UX** - Ortaçağ/Rönesans teması
- ✅ **TypeScript** - Type safety
- ✅ **ESLint** - Code quality

## 🛠️ Teknoloji Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool ve development server
- **Axios** - HTTP client
- **CSS3** - Custom styling
- **ESLint** - Code linting

### Backend
- **Node.js** - JavaScript runtime
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework (NestJS içinde)
- **ESLint** - Code linting

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm (v8 veya üzeri)

### Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone <repository-url>
cd phase2
```

2. **Backend'i başlatın:**
```bash
cd backend
npm install
npm run start:dev
```

3. **Frontend'i başlatın (yeni terminal):**
```bash
cd frontend
npm install
npm run dev
```

4. **Uygulamayı açın:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### 🎮 Tek Komutla Başlatma

Projeyi tek komutla başlatmak için:

**Linux/macOS:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Windows:**
```bash
start-dev.bat
```

## 📁 Proje Yapısı

```
phase2/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── App.tsx          # Ana component
│   │   ├── App.css          # Ana stiller
│   │   ├── index.css        # Global stiller
│   │   └── api/
│   │       └── api.ts       # API service
│   ├── package.json
│   └── README.md
├── backend/                  # NestJS backend
│   ├── src/
│   │   ├── main.ts          # Uygulama giriş noktası
│   │   ├── app.module.ts    # Ana modül
│   │   ├── users/           # Kullanıcı modülü
│   │   └── posts/           # Post modülü
│   ├── package.json
│   └── README.md
├── start-dev.sh             # Linux/macOS başlatma scripti
├── start-dev.bat            # Windows başlatma scripti
└── README.md                # Bu dosya
```

## 🎨 Tema ve Tasarım

### Da Vinci Board Game Cafe Teması
- **Ortaçağ/Rönesans** tarzı dekoratif tasarım
- **Ahşap tonları** ve doğal renkler
- **Times New Roman** serif font (header)
- **Glass morphism** efektleri
- **Animasyonlar** ve hover efektleri

### Renk Paleti
- **Ana Renkler**: #8B4513, #A0522D, #CD853F
- **Vurgu Renkleri**: #F4E4BC, #E6D7C3
- **Arka Plan**: Ahşap gradient + SVG pattern

## 📡 API Endpoints

### Kullanıcılar
- `GET /users` - Tüm kullanıcıları listele
- `GET /users/:id` - Belirli kullanıcıyı getir
- `POST /users` - Yeni kullanıcı oluştur
- `PUT /users/:id` - Kullanıcıyı güncelle
- `DELETE /users/:id` - Kullanıcıyı sil

### Postlar
- `GET /posts` - Tüm postları listele
- `GET /posts/:id` - Belirli postu getir
- `POST /posts` - Yeni post oluştur
- `PUT /posts/:id` - Postu güncelle
- `DELETE /posts/:id` - Postu sil
- `GET /posts/user/:userId` - Kullanıcıya ait postları getir

## 🔧 Geliştirme

### Backend Geliştirme
```bash
cd backend
npm run start:dev    # Geliştirme sunucusu
npm run build        # Projeyi derle
npm run lint         # ESLint kontrolü
```

### Frontend Geliştirme
```bash
cd frontend
npm run dev          # Geliştirme sunucusu
npm run build        # Projeyi derle
npm run preview      # Preview modu
npm run lint         # ESLint kontrolü
```

## 📱 Responsive Tasarım

- **Desktop**: 1400px max-width, 2 sütunlu grid
- **Tablet**: 1024px altı, tek sütun
- **Mobile**: 768px altı, kompakt tasarım

## 🎯 Kullanım Senaryoları

1. **Kullanıcı Yönetimi**
   - Yeni kullanıcı ekleme
   - Kullanıcı bilgilerini düzenleme
   - Kullanıcı silme
   - Kullanıcı listeleme

2. **Post Yönetimi**
   - Yeni post oluşturma
   - Post içeriğini düzenleme
   - Post silme
   - Post listeleme
   - Kullanıcıya göre post filtreleme

## 🚀 Deployment

### Production Build
```bash
# Backend
cd backend
npm run build
npm run start:prod

# Frontend
cd frontend
npm run build
npm run preview
```

### Docker (Opsiyonel)
```bash
# Backend
docker build -t davinci-backend ./backend

# Frontend
docker build -t davinci-frontend ./frontend
```

## 📞 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👥 Geliştirici

**Da Vinci Board Game Cafe Development Team**

---

## 🎮 Da Vinci Board Game Cafe

*"Rönesans ruhunu yaşatan, strateji ve eğlencenin buluştuğu yer"*

♔ **Klasik oyunlar, modern teknoloji** ♔