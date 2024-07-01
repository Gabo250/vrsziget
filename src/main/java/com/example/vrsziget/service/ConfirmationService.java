package com.example.vrsziget.service;

import com.example.vrsziget.domain.ConfCancUrl;
import com.example.vrsziget.domain.Confirmation;
import com.example.vrsziget.repository.ConfirmationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
public class ConfirmationService {
    private ConfirmationRepository confRep;

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
        String confUrl = UUID.randomUUID().toString();
        String cancUrl = UUID.randomUUID().toString();

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

    @Transactional
    public Confirmation confirmReservation(Confirmation confCode) {
        Confirmation conf = getConfirmationByConfCode(confCode.getConfirmationCode());

        if (conf != null) {
            conf.setStatus(confCode.getStatus());
            confRep.save(conf);
            return conf;
        }

        return null;
    }

    @Transactional
    public Confirmation cancelReservation(Confirmation cancCode) {
        Confirmation conf = getConfirmationByCancCode(cancCode.getCancellationCode());

        if (conf != null) {
            conf.setStatus(cancCode.getStatus());
            confRep.save(conf);
            return conf;
        }

        return null;
    }
}