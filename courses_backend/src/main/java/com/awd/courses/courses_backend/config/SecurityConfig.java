package com.awd.courses.courses_backend.config;

import com.awd.courses.courses_backend.service.StudentService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
public class SecurityConfig {

    @Configuration
    public static class StudentSecurityConfig extends WebSecurityConfigurerAdapter {

        private final AuthenticationSuccessHandler successHandler;
        private final AuthenticationFailureHandler failureHandler;
        private final LogoutSuccessHandler logoutSuccessHandler;
        private final AuthenticationEntryPoint authenticationEntryPoint;
        private final PasswordEncoder passwordEncoder;
        private final StudentService studentService;

        public StudentSecurityConfig(AuthenticationSuccessHandler successHandler,
                                     AuthenticationFailureHandler failureHandler,
                                     LogoutSuccessHandler logoutSuccessHandler,
                                     AuthenticationEntryPoint authenticationEntryPoint,
                                     PasswordEncoder passwordEncoder, StudentService studentService) {
            this.successHandler = successHandler;
            this.failureHandler = failureHandler;
            this.logoutSuccessHandler = logoutSuccessHandler;
            this.authenticationEntryPoint = authenticationEntryPoint;
            this.passwordEncoder = passwordEncoder;
            this.studentService = studentService;
        }

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(studentService).passwordEncoder(passwordEncoder);
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable()
                    .httpBasic().disable()
                    .exceptionHandling()
                    .authenticationEntryPoint(authenticationEntryPoint);

            http.authorizeRequests()
                    .antMatchers(HttpMethod.POST, "/api/courses").hasAuthority("STUDENT")
                    .antMatchers(HttpMethod.POST, "/api/comments").hasAuthority("STUDENT")
                    .antMatchers(HttpMethod.POST, "/api/courseFiles").hasAuthority("STUDENT")
                    .antMatchers("/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .formLogin()
                    .loginProcessingUrl("/api/students/login")
                    .successHandler(successHandler)
                    .failureHandler(failureHandler)
                    .usernameParameter("username")
                    .passwordParameter("password")
                    .permitAll()
                    .and()
                    .logout()
                    .logoutUrl("/api/students/logout")
                    .logoutSuccessHandler(logoutSuccessHandler)
                    .deleteCookies("JSESSIONID")
                    .permitAll()
                    .and()
                    .headers().frameOptions().disable();
        }
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationSuccessHandler getSuccessHandler() {
        return (request, response, authentication) -> response.setStatus(HttpStatus.OK.value());
    }

    @Bean
    public AuthenticationFailureHandler failureHandler() {
        return (request, response, exception) -> response.setStatus(HttpStatus.UNAUTHORIZED.value());
    }

    @Bean
    public LogoutSuccessHandler logoutSuccessHandler() {
        return (request, response, authentication) ->
                response.setStatus(HttpStatus.OK.value());
    }

    @Bean
    public AuthenticationEntryPoint authenticationEntryPoint() {
        return new AuthenticationEntryPoint() {
            /**
             * Always returns a 401 error code to the client.
             */
            @Override
            public void commence(HttpServletRequest request,
                                 HttpServletResponse response,
                                 AuthenticationException authenticationException) throws IOException {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Access Denied");
            }
        };
    }
}
