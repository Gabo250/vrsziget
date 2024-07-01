package com.example.vrsziget.controller;

import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.service.ConfirmationService;
import com.example.vrsziget.service.MailSenderService;
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

    @Autowired
    public void setMailsend(MailSenderService mailsend) {
        this.mailsend = mailsend;
    }

    @PostMapping(name = "/resend")
    public void mailReSend(@RequestBody Reservation res) {
        String confCode = res.getConf().getConfirmationCode();
        String cancCode = res.getConf().getCancellationCode();
        String email = res.getResUser().getEmail();
        String name = res.getName();

        try {
            mailsend.sendEmail(email, confCode, cancCode, name);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
