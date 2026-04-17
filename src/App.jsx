import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import ParentDashboard from './pages/Parent/ParentDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <Routes>
          <Route 
            path="/" 
            element={
              user ? (
                <Navigate to={`/dashboard/${user.role}`} replace />
              ) : (
                <LandingPage onLogin={handleLogin} />
              )
            } 
          />
          
          <Route 
            path="/dashboard/admin" 
            element={
              user?.role === 'admin' ? (
                <DashboardLayout role="admin" user={user} onLogout={handleLogout}>
                  <AdminDashboard />
                </DashboardLayout>
              ) : <Navigate to="/" replace />
            } 
          />

          <Route 
            path="/dashboard/teacher" 
            element={
              user?.role === 'teacher' ? (
                <DashboardLayout role="teacher" user={user} onLogout={handleLogout}>
                  <TeacherDashboard />
                </DashboardLayout>
              ) : <Navigate to="/" replace />
            } 
          />

          <Route 
            path="/dashboard/parent" 
            element={
              user?.role === 'parent' ? (
                <DashboardLayout role="parent" user={user} onLogout={handleLogout}>
                  <ParentDashboard />
                </DashboardLayout>
              ) : <Navigate to="/" replace />
            } 
          />

          <Route 
            path="/dashboard/student" 
            element={
              user?.role === 'student' ? (
                <DashboardLayout role="student" user={user} onLogout={handleLogout}>
                  <StudentDashboard />
                </DashboardLayout>
              ) : <Navigate to="/" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
