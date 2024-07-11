package com.example.vrsziget.service;

import com.example.vrsziget.domain.*;
import com.example.vrsziget.repository.ConfirmationRepository;
import com.example.vrsziget.repository.ReservationRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.List;

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
    public List<Reservation> getByDate(Timestamp date) {
        return resRep.findByDate(date);
    }

    public ResponseEntity getByDateBetween(Timestamp s, Timestamp e) {
        List<Reservation> reservations = resRep.findByDateBetween(s, e);
        if (reservations != null) {
            return ResponseHandler.generateResponse(reservations, HttpStatus.OK);
        }

        return ResponseHandler.generateResponse(reservations, HttpStatus.BAD_REQUEST);
    }

    @Transactional
    public List<Reservation> getByDateAndGtype(Timestamp date, String gType) {
        return resRep.findByDateAndGType(date, gType);
    }

    public Reservation getByCid(long cid) {
        return resRep.findByCid(cid);
    }

    @Transactional
    public ResponseEntity saveReservation(Reservation res) {
        if (!checkPlace(res)) {
            return ResponseHandler.generateResponse("A foglalás nem lehetséges, nincs már elég szabad hely.", HttpStatus.BAD_REQUEST);
        }

        ConfCancUrl confCancUrl = confServ.createUrls();
        Confirmation conf = new Confirmation();

        conf.setCancellationCode(confCancUrl.getCancellationUrl());
        conf.setConfirmationCode(confCancUrl.getConformationUrl());
        conf.setStatus("sent");

        try {
            mailServ.sendEmail(res.getResUser().getEmail(), conf.getConfirmationCode(), conf.getCancellationCode(), res.getName());
        } catch (MessagingException e) {
            return ResponseHandler.generateResponse("Email hiba.", HttpStatus.NOT_FOUND);
        }

        confRep.save(conf);

        res.setConf(confRep.findByConfirmationCode(confCancUrl.getConformationUrl()));
        resRep.save(res);

        return ResponseHandler.generateResponse("saved with this id:" + getByCid(confServ.getConfirmationByConfCode(confCancUrl.getConformationUrl()).getId()).getId(), HttpStatus.OK);
    }

    @Transactional
    public void deleteReservation(Reservation res) {
        confRep.delete(res.getConf());
        resRep.delete(res);
    }

    public boolean checkPlace(Reservation res) {
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
