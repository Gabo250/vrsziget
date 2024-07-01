package com.example.vrsziget.service;

import com.example.vrsziget.domain.ReservationUser;
import com.example.vrsziget.repository.ReservationUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ReservationUserService {
    private ReservationUserRepository rUserRepo;

    @Autowired
    public void setrUserRepo(ReservationUserRepository rUserRepo) {
        this.rUserRepo = rUserRepo;
    }

    @Transactional
    public List<ReservationUser> getEmails() {
        return rUserRepo.findAll();
    }

    @Transactional
    public ReservationUser getEmail(String email) {
        return rUserRepo.findByEmail(email);
    }

    @Transactional
    public String saveUser(ReservationUser rUser) {
        if (getEmail(rUser.getEmail()) == null) {
            rUserRepo.save(rUser);
            return "user is saved";
        }

        return "user is already exists";
    }
}
