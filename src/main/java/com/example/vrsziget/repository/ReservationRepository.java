package com.example.vrsziget.repository;

import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.domain.ReservationUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.util.List;

public interface ReservationRepository extends CrudRepository<Reservation, Long> {

    List<Reservation> findAll();
    Reservation findById(long id);
    @Query("FROM Reservation r WHERE r.conf.id = :confId")
    Reservation findByCid(@Param("confId") long cid);
    List<Reservation> findByResUser(ReservationUser user);
    List<Reservation> findByDateAndGType(Timestamp date, String gType);
    List<Reservation> findByDate(Timestamp date);
    List<Reservation> findByDateBetween(Timestamp start, Timestamp end);
}
