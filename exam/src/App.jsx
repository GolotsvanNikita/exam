import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, UserContext } from './UserContext';
import { useContext } from 'react';
import { RegForm } from './components/RegForm';
import { FormFloatingBasicExample } from './components/LoginForm';
import { MainPage } from './components/MainPage';
import { AuthorPage } from './components/AuthorPage';
import { Layout } from './components/Layout';
import { VideoAndComments } from './components/VideoAndComments';
import './App.css';

function ProtectedRoute({ children })
{
    const { isLoggedIn } = useContext(UserContext);
    return isLoggedIn ? children : <Navigate to="/login" />;
}

function App()
{
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<RegForm />} />
                    <Route path="/login" element={<FormFloatingBasicExample />} />
                    <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                        <Route index element={<MainPage />} />
                        <Route path="video" element={<VideoAndComments />} />
                        <Route path="author" element={<AuthorPage />} />
                    </Route>
                    <Route path="/" element={<Navigate to="/register" />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;