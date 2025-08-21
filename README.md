# STUDENT_MANAGEMENT_APPLICATION

🔐 Auth APIs

POST /auth/register → Register new user (admin/teacher/parent)

POST /auth/login → Login & return JWT

POST /auth/logout → Logout (invalidate token)

GET /auth/profile → Get logged-in user profile

🏫 School APIs

POST /schools → Create new school

GET /schools → List all schools

GET /schools/{id} → Get school details

PUT /schools/{id} → Update school details

DELETE /schools/{id} → Delete school

🎓 Student APIs

POST /students → Add new student

GET /students → List all students

GET /students/{id} → Get student details

PUT /students/{id} → Update student details

DELETE /students/{id} → Delete student

👨‍👩‍👧 Parent APIs

POST /parents → Add parent details

GET /parents/{id} → Get parent details

PUT /parents/{id} → Update parent details

👩‍🏫 Teacher APIs

POST /teachers → Add teacher details

GET /teachers/{id} → Get teacher details

PUT /teachers/{id} → Update teacher details

📊 Progress APIs

POST /progress → Add student progress

GET /progress/student/{id} → Get student’s progress report

PUT /progress/{id} → Update progress record

DELETE /progress/{id} → Delete progress record

🗓 Attendance APIs

POST /attendance → Mark attendance

GET /attendance/student/{id} → Get student’s attendance record

GET /attendance/school/{id} → Get school-wide attendance

PUT /attendance/{id} → Update attendance

DELETE /attendance/{id} → Delete attendance record

🔔 Notifications APIs

POST /notifications → Create notification (e.g., low progress alert)

GET /notifications/student/{id} → Get student notifications

GET /notifications/parent/{id} → Get parent notifications

PUT /notifications/{id} → Update notification status

DELETE /notifications/{id} → Delete notification

💳 Subscription APIs

POST /subscriptions → Create subscription for school

GET /subscriptions/{id} → Get subscription details

PUT /subscriptions/{id} → Update subscription

DELETE /subscriptions/{id} → Cancel subscription
