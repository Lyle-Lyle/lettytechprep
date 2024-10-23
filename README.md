# LyleCoupon

![License](https://img.shields.io/github/license/Lyle-Lyle/lettytechprep)
![Stars](https://img.shields.io/github/stars/Lyle-Lyle/lettytechprep)
![Issues](https://img.shields.io/github/issues/Lyle-Lyle/lettytechprep)


## Project Overview 📖
This project is a coding interview prep platform based on Next.js server-side rendering, Spring Boot, Redis, MySQL, and Elasticsearch. Its live version is available at https://www.mianshiya.com and currently only operates in China. This repository implements the platform's core features, including the ability for administrators to create question banks, questions, and solutions, and to associate multiple questions with a question bank in bulk. Users can register, log in, search questions with full-text search, practice coding problems online, and view their practice history in a calendar format.

The platform enhances performance through the use of a connection pool, hot key detection, caching, and advanced data structures. Security is bolstered by rate limiting, circuit breakers, dynamic IP black/whitelisting, conflict detection for simultaneous logins, and multi-level anti-scraping strategies.


UI:
![image](https://github.com/user-attachments/assets/fbf1c8cd-868c-4cb9-a79b-4f6dce533cdf)



## Development Process
The project follows a step-by-step development strategy, divided into three phases:

1) In the first phase, the focus is on developing a basic coding platform using Next.js for server-side rendering and rapid development with Spring Boot applications. The main goal is to implement basic CRUD operations.

![image](https://github.com/user-attachments/assets/049d6150-19b6-4c85-b86b-751d0af07029)

2）In the second phase, the project expanded its functionality by incorporating several mainstream enterprise backend technologies, such as Redis caching and advanced data structures, Elasticsearch search engine, Druid connection pool, concurrent programming, and hot key detection.

3）In the third phase, the project focused on optimizing security with implementations such as traffic control and circuit breaking using Sentinel, dynamic IP blacklisting/whitelisting with Nacos, conflict detection for simultaneous logins using Sa-Token, and multi-level anti-scraping strategies based on Redis. The final goal was to launch the project and ensure its availability.
![image](https://github.com/user-attachments/assets/dd4328bf-1595-4c8a-8341-34fb7adf969d)





## Technical Architecture

If using a diagram to summarize the technical architecture of LyleCoupon, it would be presented as shown in the following image

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






## Pages Screenshots 📸
This project involves over 10 pages implemented using server-side rendering (SSR) technology! Some of these pages have already been showcased earlier.

Question Search Page:：

Question Bank Details Page:

Question Management Page with Batch Operations and Dynamic Modal Development：



## Tech Stack 🚀

### Backend
Java Spring Boot  + Maven mutil-module build
MySQL + MyBatis-Plus + MyBatis X
Redis + Caffeine
Redission（Distributed Locking） + BitMap + BloomFilter
⭐️ Elasticsearch 
⭐️ Druid（database connection pool)
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




## Contributing 🤝
Contributions are welcome! Follow these steps:

- Fork this repository
- Create a new branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/your-feature)
- Open a Pull Request



## License 📄
This project is licensed under the MIT License.






