package com.example.vrsziget.repository;

import com.example.vrsziget.domain.ReservationUser;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReservationUserRepository extends CrudRepository<ReservationUser, Long> {

    List<ReservationUser> findAll();

    ReservationUser findByEmail(String email);
}
