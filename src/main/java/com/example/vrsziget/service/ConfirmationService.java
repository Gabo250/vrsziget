package com.example.vrsziget.service;

import com.example.vrsziget.domain.ConfCancUrl;
import com.example.vrsziget.domain.Confirmation;
import com.example.vrsziget.domain.Reservation;
import com.example.vrsziget.domain.ResponseHandler;
import com.example.vrsziget.repository.ConfirmationRepository;
import com.example.vrsziget.repository.ReservationRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
public class ConfirmationService {
    private ConfirmationRepository confRep;
    private ReservationService resServ;
    private MailSenderService mService;

    @Autowired
    public void setmService(MailSenderService mService) {
        this.mService = mService;
    }

    @Autowired
    public void setResRep(ReservationService resServ) {
        this.resServ = resServ;
    }

    @Autowired
    public void setConfRep(ConfirmationRepository confRep) {
        this.confRep = confRep;
    }

    @Transactional
    public Confirmation getConfirmationById(long cid) {
        return confRep.findById(cid);
    }

    @Transactional
    public Confirmation getConfirmationByConfCode(String confirmationCode) {
        return confRep.findByConfirmationCode(confirmationCode);
    }

    @Transactional
    public Confirmation getConfirmationByCancCode(String cancellationCode) {
        return confRep.findByCancellationCode(cancellationCode);
    }

    public ConfCancUrl createUrls() {
        String confUrl = UUID.randomUUID().toString().replace("-", "");
        String cancUrl = UUID.randomUUID().toString().replace("-", "");

        Confirmation conf = getConfirmationByConfCode(confUrl);
        Confirmation cancconf = getConfirmationByCancCode((cancUrl));
        while (conf != null || cancconf != null) {
            if (conf != null) {
                confUrl = UUID.randomUUID().toString();
                conf = getConfirmationByConfCode(confUrl);
            }

            if (cancconf != null) {
                cancUrl = UUID.randomUUID().toString();
                cancconf = getConfirmationByCancCode((cancUrl));
            }
        }

        ConfCancUrl urls = new ConfCancUrl();
        urls.setCancellationUrl(cancUrl);
        urls.setConformationUrl(confUrl);

        return urls;
    }

    public ResponseEntity<Object> confirmReservation(Confirmation confCode) {
        Confirmation conf = getConfirmationByConfCode(confCode.getConfirmationCode());

        if (conf != null) {
            Reservation res = resServ.getByCid(conf.getId());
            if (!resServ.checkPlace(res)) {
                resServ.deleteReservation(res);
                return ResponseHandler.generateResponse("Sajnos a foglalás visszaigazolásáig betelt a hely.", HttpStatus.FORBIDDEN);
            }

            conf.setStatus(confCode.getStatus());
            conf.setConfirmationCode("");
            confRep.save(conf);

            try {
                mService.sendEmailToSender(res.getName(), conf.getCancellationCode(), res.getgType(), res.getMember(), res.getEmail(), res.getDate());
                mService.sendInfoEmailToPerson(res.getName(), res.getConf().getCancellationCode(), res.getEmail(), res.getDate());
            } catch (MessagingException e) {
                throw new RuntimeException(e);
            }

            return ResponseHandler.generateResponse("Megerősítve", HttpStatus.OK);
        }

        return ResponseHandler.generateResponse("Már megerősítetted a foglalást vagy nincs ilyen foglalás!", HttpStatus.FORBIDDEN);
    }

    public ResponseEntity<Object> cancelReservation(Confirmation cancCode) {
        Confirmation conf = getConfirmationByCancCode(cancCode.getCancellationCode());

        if (conf != null) {
            Reservation res = resServ.getByCid(conf.getId());
            conf.setStatus(cancCode.getStatus());
            conf.setConfirmationCode("");
            conf.setCancellationCode("");
            confRep.save(conf);

            try {
                mService.sendCancelEmailToSender(res.getName(), conf.getCancellationCode(), res.getgType(), res.getMember(), res.getEmail(), res.getDate());
            } catch (MessagingException e) {
                throw new RuntimeException(e);
            }

            return ResponseHandler.generateResponse("Foglalás lemondva", HttpStatus.OK);
        }

        return ResponseHandler.generateResponse("Már lemondtad vagy nincs ilyen foglalás", HttpStatus.FORBIDDEN);
    }
}