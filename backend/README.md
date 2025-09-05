# Backend - Phase 2 Management System

## 🎯 Proje Açıklaması

Bu proje, iş başvurusu için geliştirilmiş bir kullanıcı ve post yönetim sisteminin backend API'sidir. NestJS framework'ü kullanılarak TypeScript ile geliştirilmiştir.

## 🛠️ Kullanılan Teknolojiler

- **Node.js** - JavaScript runtime
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework (NestJS içinde)
- **ESLint** - Code linting
- **npm** - Package manager

## 📋 Özellikler

- ✅ **CRUD Operations** - Kullanıcı ve post yönetimi
- ✅ **RESTful API** - REST standartlarına uygun endpoint'ler
- ✅ **TypeScript** - Type safety ve gelişmiş IDE desteği
- ✅ **Modular Architecture** - NestJS modül yapısı
- ✅ **Hardcoded Data** - Veritabanı olmadan çalışır
- ✅ **ESLint** - Code quality kontrolü

## 🚀 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm (v8 veya üzeri)

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
cd backend
npm install
```

2. **Projeyi derleyin:**
```bash
npm run build
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run start:dev
```

4. **Production sunucusunu başlatın:**
```bash
npm run start:prod
```

## 📡 API Endpoints

### Kullanıcılar (Users)

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/users` | Tüm kullanıcıları listele |
| GET | `/users/:id` | Belirli kullanıcıyı getir |
| POST | `/users` | Yeni kullanıcı oluştur |
| PUT | `/users/:id` | Kullanıcıyı güncelle |
| DELETE | `/users/:id` | Kullanıcıyı sil |

### Postlar (Posts)

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/posts` | Tüm postları listele |
| GET | `/posts/:id` | Belirli postu getir |
| POST | `/posts` | Yeni post oluştur |
| PUT | `/posts/:id` | Postu güncelle |
| DELETE | `/posts/:id` | Postu sil |
| GET | `/posts/user/:userId` | Kullanıcıya ait postları getir |

## 📝 Veri Modelleri

### User
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```

### Post
```typescript
interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
}
```

## 🔧 Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm run start:dev

# Projeyi derle
npm run build

# Production sunucusunu başlat
npm run start:prod

# ESLint kontrolü
npm run lint

# Testleri çalıştır
npm run test
```

## 🌐 Sunucu Bilgileri

- **Port**: 3000
- **URL**: http://localhost:3000
- **CORS**: Frontend için etkinleştirildi

## 📁 Proje Yapısı

```
backend/
├── src/
│   ├── main.ts              # Uygulama giriş noktası
│   ├── app.module.ts        # Ana modül
│   ├── users/               # Kullanıcı modülü
│   │   ├── user.entity.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   └── users.module.ts
│   └── posts/               # Post modülü
│       ├── post.entity.ts
│       ├── posts.service.ts
│       ├── posts.controller.ts
│       └── posts.module.ts
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

## 🎨 Tema

Bu backend, modern bir yönetim sistemi için tasarlanmıştır ve frontend ile birlikte çalışacak şekilde optimize edilmiştir.

## 📞 İletişim

Proje hakkında sorularınız için lütfen GitHub issues bölümünü kullanın.

---

**Not**: Bu proje eğitim amaçlı geliştirilmiştir ve production ortamında kullanım için ek güvenlik önlemleri alınması önerilir.