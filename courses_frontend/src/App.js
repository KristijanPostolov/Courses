import React, {Component} from 'react';
import './App.css';
import {LocationProvider, Router} from "@reach/router";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import styled from "styled-components";
import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/courses/CoursesPage";
import CreateCourse from "./pages/courses/CreateCoursePage";


const Container = styled.div`
&& {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  max-width: 960px;
  padding-top: 20px;
  padding-bottom: 20px;
  }
`;


class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Header/>
                <Container>
                    <LocationProvider>
                        <Router>
                            <Dashboard path="/"/>
                            <RegisterPage path="/register"/>
                            <LoginPage path="/login"/>
                            <Courses path="/courses"/>
                            <CreateCourse path="/courses/create"/>
                        </Router>
                    </LocationProvider>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App;
