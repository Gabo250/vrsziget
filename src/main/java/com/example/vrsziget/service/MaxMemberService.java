package com.example.vrsziget.service;

import com.example.vrsziget.domain.MaxMember;
import com.example.vrsziget.repository.MaxMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaxMemberService {
    private MaxMemberRepository mmRepo;

    @Autowired
    public void setMmRepo(MaxMemberRepository mmRepo) {
        this.mmRepo = mmRepo;
    }

    public List<MaxMember> getAll() {
        return mmRepo.findAll();
    }

    public MaxMember getByGtype(String gType) {
        return mmRepo.findByGType(gType);
    }

    public String save(MaxMember mm) {
        mmRepo.save(mm);
        return "Saved";
    }
}
