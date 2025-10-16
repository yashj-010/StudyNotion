# StudyNotion Online Education Platform (MERN App) 
[Website Link](https://studynotion-frontend.vercel.app/)

![Main Page](images/mainpage.png)

## Project Description

StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack: ReactJS, NodeJS, MongoDB, and ExpressJS.

StudyNotion aims to provide:
- A seamless and interactive learning experience for students, making education more accessible and engaging.
- A platform for instructors to showcase their expertise and connect with learners globally.

### Sections Covered:
1. System Architecture
2. Front-end Architecture
3. Back-end Architecture
4. API Design
5. Deployment
6. Testing
7. Future Enhancements

---

## System Architecture

The StudyNotion platform consists of three main components: front end, back end, and database. It follows a client-server architecture.

### Front-end
- Built with ReactJS for dynamic and responsive UIs.
- Communicates with back-end via RESTful API calls.
- Styling done using CSS3 and Tailwind CSS.
- State management handled with Redux.

### Back-end
- Built with NodeJS and ExpressJS.
- Handles user authentication, course creation, consumption, and data management.

### Database
- MongoDB as a NoSQL database.
- Stores course content, user data, and other platform-related info.


---

## Front End

### For Students:
- Homepage, Course List, Wishlist, Cart Checkout, Course Content, User Details, User Edit Details

### For Instructors:
- Dashboard, Insights, Course Management Pages, View/Edit Profile

### For Admin (Future Scope):
- Dashboard, Insights, Instructor Management, User Management, Course Management

---

## Back End

- Monolithic architecture using Node.js and Express.js
- Features: Authentication (OTP, Forgot Password), Course CRUD, Payment Integration (Razorpay), Cloud Media Management (Cloudinary), Markdown formatting for course content.

### Frameworks, Libraries, Tools
- Node.js, Express.js, MongoDB, JWT, Bcrypt, Mongoose

### Data Models / Schemas
- Student schema
- Instructor schema
- Course schema

![Database Schema](images/schema.png)

---

## API Design

RESTful API using Node.js and Express.js. JSON used for data exchange.  
Sample Endpoints:
1. `/api/auth/signup` - Create user
2. `/api/auth/login` - Login and get JWT
3. `/api/auth/verify-otp` - OTP verification
4. `/api/auth/forgot-password` - Reset password
5. `/api/courses` (GET, POST) - List/Create courses
6. `/api/courses/:id` (GET, PUT, DELETE) - Read/Update/Delete specific course
7. `/api/courses/:id/rate` (POST) - Add rating to course

---

## Conclusion
StudyNotion provides a seamless learning experience for students and a platform for instructors to showcase expertise. Its MERN stack architecture ensures scalability, responsiveness, and maintainability.

