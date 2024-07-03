package com.example.vrsziget.controller;

import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.service.MailSenderService;
import com.example.vrsziget.service.ReservationService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mail")
public class EmailController {
    private MailSenderService mailsend;
    private ReservationService resServ;

    @Autowired
    public void setResServ(ReservationService resServ) {
        this.resServ = resServ;
    }

    @Autowired
    public void setMailsend(MailSenderService mailsend) {
        this.mailsend = mailsend;
    }

    @PostMapping("/resend")
    public String mailReSend(@RequestBody int id) {
        Reservation getRes = resServ.getReservation(id);
        if (getRes == null) {
            return "There is no such reservation";
        }


        String confCode = getRes.getConf().getConfirmationCode();
        String cancCode = getRes.getConf().getCancellationCode();
        String email = getRes.getResUser().getEmail();
        String name = getRes.getName();

        try {
            mailsend.sendEmail(email, confCode, cancCode, name);
            return "resent";
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
