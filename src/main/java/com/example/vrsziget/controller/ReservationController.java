package com.example.vrsziget.controller;

import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.domain.ReservationUser;
import com.example.vrsziget.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReservationController {
    private ReservationService rService;

    @Autowired
    public void setrService(ReservationService rService) {
        this.rService = rService;
    }

    @RequestMapping("/api/reservation/getall")
    public List<Reservation> getAllReservations() {
        return rService.getAll();
    }

    @RequestMapping("/api/reservation/getById")
    public Reservation getReservation(@RequestBody long id) {
        return rService.getReservation(id);
    }

    @RequestMapping("/api/reservation/getByEmail")
    public List<Reservation> getReservations(@RequestBody ReservationUser user) {
        return rService.getReservations(user);
    }

    @PostMapping("/api/reservation/save")
    public String saveRes(@RequestBody Reservation res) {
        System.out.println(res);
        return rService.saveReservation(res);
    }
}
