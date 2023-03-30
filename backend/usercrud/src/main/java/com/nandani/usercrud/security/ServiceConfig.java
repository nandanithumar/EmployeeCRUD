///*
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
// */
//package com.nandani.usercrud.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
///**
// *
// * @author nandani
// */
//@Configuration
//public class ServiceConfig {
//
//    @Bean
//    public InMemoryUserDetailsManager userDetailManager() {
//        UserDetails argusadmin = User.builder()
//                .username("argusadmin")
//                .password("{noop}argusadmin")
//                .roles("MANAGER")
//                .build();
//        return new InMemoryUserDetailsManager(argusadmin);
//    }
//
//    @Bean
//    public SecurityFilterChain filterchain(HttpSecurity http) throws Exception {
//        http.authorizeHttpRequests(configurer-> 
//                configurer
//                .requestMatchers(HttpMethod.POST, "api/user").hasRole("MANAGER")
//                .requestMatchers(HttpMethod.GET, "api/user").hasRole("MANAGER")
//                .requestMatchers(HttpMethod.GET, "api/user/**").hasRole("MANAGER")
//                .requestMatchers(HttpMethod.PATCH, "api/user/**").hasRole("MANAGER")
//                .requestMatchers(HttpMethod.DELETE, "api/user/**").hasRole("MANAGER")
//
//);
//         http.httpBasic();
//         http.csrf().disable();
//         
//         return http.build();
//    }
//
//    
//}
