package com.example.vrsziget.controller;

import com.example.vrsziget.domain.Confirmation;
import com.example.vrsziget.service.ConfirmationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/confirmation")
public class ConfirmationController {
    private ConfirmationService confService;

    @Autowired
    public void setConfService(ConfirmationService confService) {
        this.confService = confService;
    }

    @PostMapping(value = "/confirm", consumes = "application/json")
    public Confirmation confirmRes(@RequestBody Confirmation confCode) {
        System.out.println(confCode);
        return confService.confirmReservation(confCode);
    }

    @PostMapping(value = "/cancel", consumes = "application/json")
    public Confirmation cancelRes(@RequestBody Confirmation cancCode) {
        return confService.cancelReservation(cancCode);
    }
}
