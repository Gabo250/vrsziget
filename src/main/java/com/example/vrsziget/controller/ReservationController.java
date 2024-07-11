package com.example.vrsziget.controller;

import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.domain.ReservationUser;
import com.example.vrsziget.dto.DateBetweenDTO;
import com.example.vrsziget.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/api/reservation")
public class ReservationController {
    private ReservationService rService;

    @Autowired
    public void setrService(ReservationService rService) {
        this.rService = rService;
    }

    @RequestMapping("/getall")
    public List<Reservation> getAllReservations() {
        return rService.getAll();
    }

    @PostMapping("/getById")
    public Reservation getReservation(@RequestBody long id) {
        return rService.getReservation(id);
    }

    @PostMapping("/getByEmail")
    public List<Reservation> getReservations(@RequestBody ReservationUser user) {
        return rService.getReservations(user);
    }

    @PostMapping("/getbydate")
    public List<Reservation> getResByDate(@RequestBody Timestamp date) {
        return rService.getByDate(date);
    }

    @PostMapping("/getbetweendate")
    public ResponseEntity getResBetweenDate(@RequestBody DateBetweenDTO dbetween){
        return rService.getByDateBetween(dbetween.getStart(), dbetween.getEnd());
    }

    @PostMapping("/save")
    public ResponseEntity saveRes(@RequestBody Reservation res) {
        return rService.saveReservation(res);
    }
}