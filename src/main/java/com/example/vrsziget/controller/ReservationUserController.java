package com.example.vrsziget.controller;

import com.example.vrsziget.domain.ReservationUser;
import com.example.vrsziget.service.ReservationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class ReservationUserController {
    ReservationUserService resUser;

    @Autowired
    public void setResUser(ReservationUserService resUser) {
        this.resUser = resUser;
    }

    @RequestMapping("/getusers")
    public List<ReservationUser> getAll() {
        return resUser.getEmails();
    }

    @PostMapping("/create")
    public String saveUser(@RequestBody ReservationUser us) {
        return resUser.saveUser(us);
    }
}
