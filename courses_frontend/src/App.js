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
import CourseDetails from "./pages/courses/CourseDetailsPage";


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
    constructor(props) {
        super(props);
        this.state= {
            loginData: undefined
        };
       this.setLoginStatus = this.setLoginStatus.bind(this);
    }

    setLoginStatus(data) {
        this.setState({loginData: data});
        console.log(this.state.loginData);
    }


    render() {

        console.log("Testing", this.state.loginData);
        return (
            <div className="main-container">
                <Header value={this.state.loginData} logout={this.setLoginStatus} />
                <Container>
                    <LocationProvider>
                        <Router>
                            <Dashboard value={this.state.loginData} path="/"/>
                            <RegisterPage path="/register"/>
                            <LoginPage login={this.setLoginStatus} path="/login"/>
                            <Courses value={this.state.loginData} path="/courses"/>
                            <CourseDetails value={this.state.loginData} path="/courses/:courseId"/>
                            <CreateCourse value={this.state.loginData}  path="/courses/create"/>
                        </Router>
                    </LocationProvider>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App;
