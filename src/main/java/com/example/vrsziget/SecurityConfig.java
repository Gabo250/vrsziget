package com.example.vrsziget;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfiguration {

    private Environment env;

    @Autowired
    public SecurityConfig(Environment env) {
        this.env = env;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorize -> authorize
                        .anyRequest().authenticated()
                ).csrf(csrf -> csrf.disable()).httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    protected UserDetailsService userDetailsService() {
        String username = env.getProperty("endpoint.username");
        String password = env.getProperty("endpoint.password");

        UserDetails user =
                User.withDefaultPasswordEncoder()
                        .username(username)
                        .password(password)
                        .roles("USER")
                        .build();

        return new InMemoryUserDetailsManager(user);
    }
}
