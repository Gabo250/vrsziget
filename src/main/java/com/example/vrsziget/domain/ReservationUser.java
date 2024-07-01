package com.example.vrsziget.domain;

import jakarta.persistence.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.context.annotation.Primary;

import java.util.List;

@Entity
@Table(name = "person")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ReservationUser {
    @Id
    @Column(name = "email")
    private String email;

    @OneToMany(mappedBy = "resUser")
    private List<Reservation> reservations;

    public ReservationUser(String email) {
        this.email = email;
    }

    public ReservationUser() {
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
