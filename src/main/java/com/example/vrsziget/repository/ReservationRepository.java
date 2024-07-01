package com.example.vrsziget.repository;

import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.domain.ReservationUser;
import org.springframework.data.repository.CrudRepository;

import java.sql.Timestamp;
import java.util.List;

public interface ReservationRepository extends CrudRepository<Reservation, Long> {

    List<Reservation> findAll();
    Reservation findById(long id);
    List<Reservation> findByResUser(ReservationUser user);
    List<Reservation> findByDateAndGType(Timestamp date, String gType);
}
