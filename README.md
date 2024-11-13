![License](https://img.shields.io/github/license/Lyle-Lyle/lettytechprep)
![Stars](https://img.shields.io/github/stars/Lyle-Lyle/lettytechprep)
![Issues](https://img.shields.io/github/issues/Lyle-Lyle/lettytechprep)

## Project Overview 📖

This project is a coding interview prep platform based on Next.js server-side rendering, Spring Boot, Redis, MySQL, and Elasticsearch. Its live version is available at <https://www.mianshiya.com> and currently only operates in China. This repository implements the platform's core features, including the ability for administrators to create question banks, questions, and solutions, and to associate multiple questions with a question bank in bulk. Users can register, log in, search questions with full-text search, practice coding problems online, and view their practice history in a calendar format.

The platform enhances performance through the use of a connection pool, hot key detection, caching, and advanced data structures. Security is bolstered by rate limiting, circuit breakers, dynamic IP black/whitelisting, conflict detection for simultaneous logins, and multi-level anti-scraping strategies.

## UI 📸

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FiDIsT1XnGEuwZ41BfQY1%2Fimage.png?alt=media&token=2ff73cfa-76b2-4ca1-9fd9-614b251680b6)

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FLdmf7LRlOlMCGhufZrEq%2Fimage.png?alt=media&token=76e42b4a-c0fc-4ff4-840f-4411ba478acc)

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FydiixQtN4zrGaHGEoeUE%2Fimage.png?alt=media&token=b4abad5d-b879-4f84-a718-74ce160baebd)

Question detail:

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FRrIN57TYR6WXN4pjbAhQ%2Fimage.png?alt=media&token=da7e26f8-e6f9-47f6-841d-1f86ee3f967c)

Sign in

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2Fca9UA6QprwYmBCGrgsg9%2Fimage.png?alt=media&token=37caf2a8-c208-4cc8-837a-fbaa0ebd830c)

Admin:

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FS6EmcKqIDKwuHKjKKnHd%2Fimage.png?alt=media&token=f6c17247-cce0-4e7f-a6ae-1ae5d9ce5efd)

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FqAXQ3Yhh9rlZqpanSv4Z%2Fimage.png?alt=media&token=ddb02f33-f05b-4f60-b84e-56bdf1353d08)

## Development Process

The project follows a step-by-step development strategy, divided into three phases:

1. In the first phase, the focus is on developing a basic coding platform using Next.js for server-side rendering and rapid development with Spring Boot applications. The main goal is to implement basic CRUD operations.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEyo6uE0juE8glqBg3D3R%2Fuploads%2FiDIsT1XnGEuwZ41BfQY1%2Fimage.png?alt=media&token=2ff73cfa-76b2-4ca1-9fd9-614b251680b6)

2）In the second phase, the project expanded its functionality by incorporating several mainstream enterprise backend technologies, such as Redis caching and advanced data structures, Elasticsearch search engine, Druid connection pool, concurrent programming, and Hotkey detection.
![image](https://github.com/user-attachments/assets/1252deae-b223-403a-ab10-c644c08ced1b)

![image](https://github.com/user-attachments/assets/94f61583-8160-43aa-a209-b8166e40ed75)

3）In the third phase, the project focused on optimizing security with implementations such as traffic control and circuit breaking using Sentinel, dynamic IP blacklisting/whitelisting with Nacos, conflict detection for simultaneous logins using Sa-Token, and multi-level anti-scraping strategies based on Redis. The final goal was to launch the project and ensure its availability.

## Technical Architecture

If using a diagram to summarize the technical architecture of this webisite, it would be presented as shown in the following image

<img width="648" alt="5a24d0c2d412d90094e7a220bf5d140e" src="https://github.com/user-attachments/assets/598c8303-ca35-4bc8-b439-8666c25447c2">

## Features

Core features of the project:

### Backend Development

- CRUD operations of all pages

### Frontend Development

- Pages Development (Login, Registration, Management Pages, Homepage, Problem-Solving Page and Search Page)

### User Functionality Expansion

- Problem-Solving History Calendar
- BitMap and Performance Optimization
- Question Full-Text Search
- Elasticsearch Data Synchronization

### Admin Functionality Expansion

- Bulk Management of Questions
- Batch Processing Optimization
- Druid Connection Pool
- Automatic Caching of Popular Question Banks
- Hotkey detection

### Traffic Security Optimization

- Introduce Sentinel
- Single Interface Rate Limiting and Circuit Breaking
- Hot Parameter Rate Limiting and Circuit Breaking
- Sentinel Rule Persistence (BloomFilter + Configuration Center)
- Introduce Nacos
- Dynamic IP Blacklisting
- Conflict Detection for Simultaneous Logins(Sa-Token)
- Anti-Scraping Solution Design
- Multi-Level Anti-Scraping Based on Redis

## Tech Stack 🚀

### Backend

Java Spring Boot + Maven mutil-module build  
MySQL + MyBatis-Plus + MyBatis X  
Redis + Caffeine
Redission (Distributed Locking) + BitMap + BloomFilter  
⭐️ Elasticsearch  
⭐️ Druid (database connection pool)  
⭐️ Sa-Token (Access control)  
⭐️ HotKey  
⭐️ Sentinel (Traffic control)  
⭐️ Nacos (configuration center)

### Frontend

React 18  
⭐️ Next.js Server-side render framwork  
⭐️ Redux (state management)  
Ant Design (UI libaray)  
⭐️ ESLint + Prettier + TypeScript

## TODO List

- [x] Using Nacos Configuration Center to Store and Manage IP Blacklists
- [ ] Custom Annotation for Hot Key Detection
- [ ] Encapsulating Rate Limiting Component as a Spring Boot Starter
- [ ] Notification for Concurrent Login Conflict

## Contributing 🤝

Contributions are welcome! Follow these steps:

- Fork this repository
- Create a new branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/your-feature)
- Open a Pull Request

## License 📄

This project is licensed under the MIT License.
