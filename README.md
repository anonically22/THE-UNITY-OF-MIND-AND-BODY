# Unity of Mind and Body

This project is a wellness platform designed to provide resources and booking for mental health services.

## Project Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Configure environment variables (see `.env.example`).
4. Run the application: `npm start`

## Phased Implementation Plan

## 📋 **Phase Overview**

| Phase | Duration | Focus | Key Deliverable |
|-------|----------|-------|----------------|
| **Phase 0** | 2-3 days | Planning & Setup | Project foundation |
| **Phase 1** | 1 week | MVP Frontend | Static prototype |
| **Phase 2** | 2 weeks | Backend Integration | Functional web app |
| **Phase 3** | 3-4 weeks | Enhancement & Polish | Production-ready platform |
| **Phase 4** | 2-3 months | Advanced Features | Scalable solution |

---

## 🚀 **Phase 0: Foundation Setup** *(Days 1-3)*

### **Objectives**
Set up development environment, finalize designs, and establish project structure.

### **Tasks & Timeline**

#### **Day 1: Project Setup**
- [X] Initialize Git repository
- [X] Set up folder structure
- [ ] Create MongoDB Atlas account
- [ ] Design UI wireframes (Figma/Canva)
- [ ] Define color scheme and branding

#### **Day 2: Technical Foundation**
- [ ] Install Node.js and npm packages
- [ ] Set up Express.js server structure
- [ ] Configure MongoDB connection
- [ ] Create basic HTML templates
- [ ] Set up CSS framework/custom styles

#### **Day 3: Content Planning**
- [ ] Write content for landing page
- [ ] Prepare mental health resources content
- [ ] Define session types and descriptions
- [ ] Create user personas and journey maps

### **Deliverables**
- Project repository with initial structure
- UI wireframes and design system
- Development environment ready
- Content strategy document

### **Team Allocation**
- **Frontend Developer**: UI wireframes, HTML/CSS setup
- **Backend Developer**: Node.js setup, database configuration
- **Content Creator**: Resource content, copy writing
- **Project Manager**: Timeline coordination, task tracking

---

## 🎨 **Phase 1: MVP Frontend** *(Week 1)*

### **Objectives**
Create a fully functional frontend with static content and form validation.

### **Tasks & Timeline**

#### **Days 1-2: Core Pages**
- [X] Landing page with hero section and features overview
- [X] About page with mission and team information
- [X] Resources page with mental health articles/tips
- [X] Contact/Feedback page

#### **Days 3-4: User Interface**
- [X] Registration page with form validation
- [X] Login page with basic styling
- [X] User dashboard mockup (static)
- [X] Session booking form with date/time pickers

#### **Days 5-7: Responsive Design**
- [X] Mobile-first responsive design
- [X] Cross-browser compatibility testing
- [X] Accessibility improvements (ARIA labels, keyboard navigation)
- [X] Performance optimization (image compression, CSS minification)

### **Technical Stack**
```
Frontend: HTML5, CSS3, Vanilla JavaScript
Styling: Custom CSS with Flexbox/Grid
Forms: Client-side validation with JS
Icons: Font Awesome or Lucide icons
```

### **Deliverables**
- Fully responsive static website
- All forms with client-side validation
- Professional UI/UX design
- Cross-device compatibility

### **Success Metrics**
- All pages load under 3 seconds
- Mobile responsiveness score >90%
- Form validation working correctly
- No JavaScript errors in console

---

## ⚙️ **Phase 2: Backend Integration** *(Weeks 2-3)*

### **Objectives**
Build robust backend with user authentication, database operations, and API endpoints.

### **Week 1 Tasks**

#### **Days 1-3: Authentication System**
- [ ] Set up Express.js routes
- [ ] Implement bcrypt password hashing
- [ ] Create user registration endpoint
- [ ] Build login/logout functionality
- [ ] Set up session management (express-session or JWT)

#### **Days 4-7: Database Operations**
- [ ] Design and implement MongoDB schemas
- [ ] Create CRUD operations for users
- [ ] Build booking system backend
- [ ] Implement feedback storage system
- [ ] Add basic error handling and validation

### **Week 2 Tasks**

#### **Days 1-4: Frontend-Backend Integration**
- [ ] Connect registration form to backend
- [ ] Implement login functionality
- [ ] Build dynamic user dashboard
- [ ] Create functional booking system
- [ ] Add feedback submission feature

#### **Days 5-7: Admin Features & Testing**
- [ ] Build admin dashboard for viewing bookings
- [ ] Add admin authentication
- [ ] Implement feedback viewing system
- [ ] Comprehensive testing and bug fixes
- [ ] Prepare for deployment

### **Technical Stack**
```
Backend: Node.js + Express.js
Database: MongoDB Atlas
Authentication: bcrypt + express-session
Validation: express-validator
Environment: dotenv for configuration
```

### **API Endpoints**
```
POST /api/auth/register - User registration
POST /api/auth/login - User login
POST /api/auth/logout - User logout
GET /api/user/dashboard - User dashboard data
POST /api/bookings - Create booking
GET /api/bookings - Get user bookings
POST /api/feedback - Submit feedback
GET /api/admin/bookings - Admin view bookings
```

### **Database Schema Implementation**
```javascript
// Users Schema
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (default: 'user'),
  createdAt: Date
}

// Bookings Schema
{
  userId: ObjectId (ref: Users),
  therapyType: String (required),
  date: Date (required),
  time: String (required),
  status: String (default: 'pending'),
  notes: String,
  createdAt: Date
}
```

### **Deliverables**
- Fully functional backend API
- User authentication system
- Database with proper schemas
- Admin dashboard (basic)
- Integrated frontend-backend application

---

## 🎯 **Phase 3: Enhancement & Polish** *(Weeks 4-7)*

### **Objectives**
Enhance user experience, add advanced features, and prepare for production deployment.

### **Week 1: UI/UX Enhancements**
- [ ] Advanced dashboard with booking history
- [ ] Real-time form validation feedback
- [ ] Loading states and success/error messages
- [ ] Email notifications for bookings (using nodemailer)
- [ ] User profile management

### **Week 2: Advanced Features**
- [ ] Calendar integration for booking visualization
- [ ] Resource categorization and search
- [ ] Booking cancellation and rescheduling
- [ ] Basic analytics dashboard for admin
- [ ] PDF generation for booking confirmations

### **Week 3: Security & Performance**
- [ ] Input sanitization and SQL injection prevention
- [ ] Rate limiting for API endpoints
- [ ] HTTPS implementation
- [ ] Database backup and recovery procedures
- [ ] Performance monitoring and optimization

### **Week 4: Testing & Deployment**
- [ ] Unit testing for backend functions
- [ ] Integration testing for API endpoints
- [ ] User acceptance testing with target audience
- [ ] Production deployment setup
- [ ] Documentation and user guides

### **Additional Features**
```
- Email verification for new users
- Password reset functionality
- Advanced booking filters
- Resource favorites system
- Basic reporting for administrators
```

### **Deliverables**
- Production-ready application
- Comprehensive testing suite
- Deployed application on cloud platform
- User documentation and admin guides
- Performance monitoring dashboard

---

## 🚀 **Phase 4: Advanced Features** *(Months 2-3)*

### **Objectives**
Scale the platform with advanced features and prepare for multi-campus expansion.

### **Month 1: Advanced Integrations**
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Video session booking with calendar sync
- [ ] SMS notifications for appointment reminders
- [ ] Advanced admin analytics and reporting
- [ ] Multi-role user system (student, faculty, counselor)

### **Month 2: AI and Automation**
- [ ] Basic chatbot for FAQ handling
- [ ] Automated booking confirmations
- [ ] Personalized resource recommendations
- [ ] Mood tracking integration
- [ ] Anonymous crisis support chat

### **Month 3: Scalability & Expansion**
- [ ] Multi-campus support
- [ ] API for mobile app integration
- [ ] Advanced reporting and analytics
- [ ] Integration with campus management systems
- [ ] Wearable device data integration planning

### **Advanced Technical Stack**
```
Payments: Stripe API
Video: Zoom/Google Meet API integration
Notifications: Twilio SMS + Nodemailer
Analytics: Google Analytics + Custom dashboard
Chatbot: Dialogflow or custom NLP
Mobile: React Native or Flutter planning
```

---

## 📊 **Resource Allocation & Team Structure**

### **Core Team (4-5 people)**
- **Full-Stack Developer** (40% backend, 20% frontend)
- **Frontend Developer** (60% UI/UX, 20% integration)
- **Content Strategist** (50% content, 30% user research)
- **Project Manager** (100% coordination, planning)
- **QA Tester** (Part-time from Phase 2)

### **Budget Considerations**
```
Development Tools: $0-50/month (free tiers)
MongoDB Atlas: $0-25/month (cluster size)
Deployment: $0-20/month (Render/Railway)
Domain & SSL: $15-30/year
External APIs: $0-100/month (usage-based)
```

---

## 🎯 **Success Metrics by Phase**

### **Phase 1 Metrics**
- 5 responsive pages completed
- 100% mobile compatibility
- 0 console errors
- <3 second page load times

### **Phase 2 Metrics**
- User registration/login working
- Booking system functional
- Admin dashboard operational
- Database properly configured

### **Phase 3 Metrics**
- 99% uptime after deployment
- <500ms API response times
- Security audit passed
- User acceptance testing completed

### **Phase 4 Metrics**
- Payment processing functional
- Video integration working
- Multi-campus support ready
- Scalability testing passed

---

## 🚨 **Risk Management**

### **Technical Risks**
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Database performance issues | Medium | High | Implement indexing, query optimization |
| Security vulnerabilities | Medium | Critical | Regular security audits, input validation |
| Third-party API failures | Low | Medium | Fallback systems, error handling |
| Scalability bottlenecks | Medium | High | Load testing, horizontal scaling planning |

### **Timeline Risks**
- **Scope creep**: Weekly sprint reviews to maintain focus
- **Technical complexity**: Proof-of-concept for complex features first
- **Team availability**: Buffer time built into each phase
- **External dependencies**: Early integration testing

---

## 📅 **Weekly Sprint Structure**

### **Sprint Planning (Every Monday)**
- Review previous sprint deliverables
- Plan current week's tasks
- Identify blockers and dependencies
- Assign tasks to team members

### **Daily Standups (15 minutes)**
- What did you complete yesterday?
- What will you work on today?
- Any blockers or help needed?

### **Sprint Review (Every Friday)**
- Demo completed features
- Gather feedback from stakeholders
- Update project timeline if needed
- Plan next sprint priorities

---

## 🎉 **Final Deliverables**

By the end of all phases, you'll have:

1. **Fully functional wellness platform** with user authentication
2. **Admin dashboard** for managing bookings and content
3. **Responsive design** working across all devices
4. **Secure backend** with proper data validation
5. **Deployed application** accessible via custom domain
6. **Documentation** for users and administrators
7. **Scalable architecture** ready for future enhancements
8. **Analytics tracking** for usage insights

This plan balances rapid MVP development with long-term scalability, ensuring you can demonstrate value quickly while building toward a comprehensive solution.

---
## ✨ UI/UX Enhancements (Post-Phase 1)

Following the completion of the initial Phase 1 MVP Frontend, a dedicated effort was made to enhance the UI/UX based on a detailed design prompt. The key improvements include:

*   **Modern Design Language**:
    *   **Color Palette**: Implemented a calming and welcoming palette featuring pastel blues (`#A0D2DB`), peach (`#F4B8A9`), and pastel greens (`#82C09A`), with supporting neutral tones for text and backgrounds.
    *   **Typography**: Standardized on a clean, readable sans-serif font stack (`'Nunito Sans', 'Helvetica Neue', Arial, sans-serif`).
    *   **Rounded Elements & Shadows**: Applied consistent `border-radius` to UI elements like buttons, cards, and form inputs, along with subtle `box-shadows` to create depth and a modern feel.
*   **Homepage Overhaul**:
    *   Redesigned hero section with a clearer mission statement and more inviting Call-to-Action (CTA) buttons.
    *   Added an "Introduction" section and a "Services Overview" using a card-based layout to better showcase platform offerings.
*   **Resources Page**:
    *   Transformed the articles list into a responsive `card-grid` layout.
    *   Included placeholders for future image/infographics within each resource card.
    *   Added a placeholder UI for category-based filtering.
*   **Improved Forms**:
    *   Ensured all forms (Register, Login, Contact, Booking, Feedback) utilize a consistent `.form-container` style for a cohesive look and feel.
    *   Form elements (`input`, `select`, `textarea`) and buttons are styled according to the new design language.
*   **Dashboard Enhancements**:
    *   Redesigned the user dashboard with a welcoming header and card-based layouts for "Upcoming Sessions" and "Recommended Resources".
    *   Introduced new button styles (`.btn-small`, `.btn-outline`) for varied actions within the dashboard.
*   **Navigation & Footer**:
    *   Updated the main navigation across all pages to include a "Feedback" link and styled the "Book a Session" link as a prominent button.
    *   Standardized the footer to include "About Us", "Contact", "Feedback", and "Privacy Policy" links. Created placeholder pages for "Feedback" and "Privacy Policy".
*   **Prominent CTAs**:
    *   Ensured all primary and secondary Call-to-Action buttons are visually distinct, using the new color palette and button styles for better user guidance.

These enhancements aim to create a more visually appealing, user-friendly, and trustworthy experience, aligning with the goal of reducing mental health stigma and making wellness resources more accessible to students and faculty.