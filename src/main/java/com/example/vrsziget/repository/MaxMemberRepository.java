package com.example.vrsziget.repository;

import com.example.vrsziget.domain.MaxMember;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MaxMemberRepository extends CrudRepository<MaxMember, String> {
    List<MaxMember> findAll();
    MaxMember findByGType(String gType);
}
