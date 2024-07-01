package com.example.vrsziget.repository;

import com.example.vrsziget.domain.Confirmation;
import org.springframework.data.repository.CrudRepository;

public interface ConfirmationRepository extends CrudRepository<Confirmation, Long> {
    Confirmation findById(long cid);
    Confirmation findByConfirmationCode(String conformationCode);
    Confirmation findByCancellationCode(String cancellationCode);
}
