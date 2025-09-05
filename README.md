# 🎮 Phase 2 - Management System

[![GitHub](https://img.shields.io/badge/GitHub-ZehraGnbz%2Fdavinci_phase2-blue?style=flat-square&logo=github)](https://github.com/ZehraGnbz/davinci_phase2)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)

## 📖 Proje Açıklaması

Bu proje, iş başvurusu için geliştirilmiş modern bir kullanıcı ve post yönetim sistemidir. Full-stack web uygulaması olarak tasarlanmış olup, frontend ve backend ayrı portlarda çalışacak şekilde optimize edilmiştir.

> **🎯 Amaç:** Bu proje, modern web geliştirme teknolojilerini kullanarak tam fonksiyonel bir CRUD uygulaması geliştirme becerilerini göstermek amacıyla oluşturulmuştur.

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
- **Node.js** (v18 veya üzeri)
- **npm** (v8 veya üzeri)
- **Git**

### Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/ZehraGnbz/davinci_phase2.git
cd davinci_phase2
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
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **API Docs:** http://localhost:3000/api

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
davinci_phase2/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── App.tsx          # Ana component
│   │   ├── App.css          # Ana stiller
│   │   ├── index.css        # Global stiller
│   │   ├── main.tsx         # React entry point
│   │   └── api/
│   │       └── api.ts       # API service (Axios)
│   ├── public/
│   │   └── index.html       # HTML template
│   ├── package.json
│   ├── tsconfig.json        # TypeScript config
│   ├── vite.config.ts       # Vite config
│   └── README.md
├── backend/                  # NestJS + TypeScript
│   ├── src/
│   │   ├── main.ts          # Uygulama giriş noktası
│   │   ├── app.module.ts    # Ana modül
│   │   ├── users/           # Kullanıcı modülü (CRUD)
│   │   └── posts/           # Post modülü (CRUD)
│   ├── package.json
│   ├── tsconfig.json        # TypeScript config
│   ├── nest-cli.json        # NestJS config
│   └── README.md
├── start-dev.sh             # Linux/macOS başlatma scripti
├── start-dev.bat            # Windows başlatma scripti
├── .gitignore               # Git ignore rules
└── README.md                # Bu dosya
```

## 🎨 Tema ve Tasarım

### Modern UI/UX Teması
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

### 👥 Kullanıcılar (`/users`)
| Method | Endpoint | Açıklama | Request Body |
|--------|----------|----------|--------------|
| `GET` | `/users` | Tüm kullanıcıları listele | - |
| `GET` | `/users/:id` | Belirli kullanıcıyı getir | - |
| `POST` | `/users` | Yeni kullanıcı oluştur | `{name, email}` |
| `PUT` | `/users/:id` | Kullanıcıyı güncelle | `{name, email}` |
| `DELETE` | `/users/:id` | Kullanıcıyı sil | - |

### 📝 Postlar (`/posts`)
| Method | Endpoint | Açıklama | Request Body |
|--------|----------|----------|--------------|
| `GET` | `/posts` | Tüm postları listele | - |
| `GET` | `/posts/:id` | Belirli postu getir | - |
| `POST` | `/posts` | Yeni post oluştur | `{title, content, authorId}` |
| `PUT` | `/posts/:id` | Postu güncelle | `{title, content}` |
| `DELETE` | `/posts/:id` | Postu sil | - |
| `GET` | `/posts/user/:userId` | Kullanıcıya ait postları getir | - |

### 📊 Örnek Response
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

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
docker build -t phase2-backend ./backend

# Frontend
docker build -t phase2-frontend ./frontend
```

## 🚀 Deployment Seçenekleri

### Frontend Deployment
- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ZehraGnbz/davinci_phase2)
- **Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZehraGnbz/davinci_phase2)
- **GitHub Pages**: `npm run build` → `dist` klasörünü deploy edin

### Backend Deployment
- **Railway**: [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)
- **Render**: [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)
- **Heroku**: `git push heroku main`

## 📞 Katkıda Bulunma

1. **Fork** yapın
2. **Feature branch** oluşturun (`git checkout -b feature/amazing-feature`)
3. **Commit** yapın (`git commit -m 'Add amazing feature'`)
4. **Push** yapın (`git push origin feature/amazing-feature`)
5. **Pull Request** oluşturun

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👨‍💻 Geliştirici

**Zehra Günbüz**
- 🌐 **GitHub**: [@ZehraGnbz](https://github.com/ZehraGnbz)
- 💼 **LinkedIn**: [Zehra Günbüz](https://www.linkedin.com/in/zehragunbaz/)

---

⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

## 🎯 Proje Özeti

Bu proje, modern web geliştirme teknolojilerini kullanarak:
- ✅ **Full-stack** CRUD uygulaması
- ✅ **TypeScript** ile type safety
- ✅ **Modern UI/UX** tasarım
- ✅ **Responsive** layout
- ✅ **RESTful API** tasarımı
- ✅ **Clean code** ve best practices

**İş başvurusu için hazırlanmış profesyonel bir portföy projesidir.**

