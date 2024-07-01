package com.example.vrsziget.service;

import com.example.vrsziget.domain.*;
import com.example.vrsziget.repository.ConfirmationRepository;
import com.example.vrsziget.repository.ReservationRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationService {
    private ReservationRepository resRep;
    private ConfirmationRepository confRep;
    private ConfirmationService confServ;
    private MailSenderService mailServ;
    private MaxMemberService mmServ;

    @Autowired
    public void setMmServ(MaxMemberService mmServ) {
        this.mmServ = mmServ;
    }

    @Autowired
    public void setMailServ(MailSenderService mailServ) {
        this.mailServ = mailServ;
    }

    @Autowired
    public void setConfServ(ConfirmationService confServ) {
        this.confServ = confServ;
    }

    @Autowired
    public void setConfRep(ConfirmationRepository confRep) {
        this.confRep = confRep;
    }

    @Autowired
    public void setResRep(ReservationRepository resRep) {
        this.resRep = resRep;
    }

    @Transactional
    public List<Reservation> getAll() {
        return resRep.findAll();
    }

    @Transactional
    public Reservation getReservation(long id) {
        return resRep.findById(id);
    }

    @Transactional
    public List<Reservation> getReservations(ReservationUser user) {
        return resRep.findByResUser(user);
    }

    @Transactional
    public String saveReservation(Reservation res) {
        if (!checkPlace(res)) {
            return "out of place";
        }

        ConfCancUrl confCancUrl = confServ.createUrls();
        Confirmation conf = new Confirmation();

        conf.setCancellationCode(confCancUrl.getCancellationUrl());
        conf.setConfirmationCode(confCancUrl.getConformationUrl());
        conf.setStatus("sent");

        try {
            mailServ.sendEmail(res.getResUser().getEmail(), conf.getConfirmationCode(), conf.getCancellationCode(), res.getName());
        } catch (MessagingException e) {
            return "Email error";
        }

        confRep.save(conf);

        res.setConf(confRep.findByConfirmationCode(confCancUrl.getConformationUrl()));
        resRep.save(res);

        return "saved";
    }

    public List<Reservation> getByDateAndGtype(Timestamp date, String gType) {
        return resRep.findByDateAndGType(date, gType);
    }

    @Transactional
    public void deleteReservation(Reservation res) {
        confRep.delete(res.getConf());
        resRep.delete(res);
    }

    private boolean checkPlace(Reservation res) {
        List<Reservation> reservationsToChecking = getByDateAndGtype(res.getDate(), res.getgType());
        List<MaxMember> gTypeMaxMember = mmServ.getAll();

        int actmember = 0;
        for (Reservation r : reservationsToChecking) {
            actmember += r.getMember();
        }

        if ((res.getgType().equals("escape") && actmember + res.getMember() > gTypeMaxMember.get(0).getMaxNumber())
             || (res.getgType().equals("basic") && actmember + res.getMember() > gTypeMaxMember.get(0).getMaxNumber())
             || (res.getgType().equals("simulator") && actmember + res.getMember() > gTypeMaxMember.get(1).getMaxNumber())
             || (res.getgType().equals("katvr") && actmember + res.getMember() > gTypeMaxMember.get(2).getMaxNumber())) {
            return false;
        }

        return true;
    }
}
