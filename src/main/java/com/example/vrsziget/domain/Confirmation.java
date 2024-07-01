package com.example.vrsziget.domain;

import jakarta.persistence.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "confirmation")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Confirmation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cid")
    private long id;

    @Column(name = "status")
    private String status;

    @Column(name = "confirmationcode")
    private String confirmationCode;

    @Column(name = "cancellationcode")
    private String cancellationCode;

    public Confirmation() {
    }

    public Confirmation(long id, String status, String confirmationCode, String cancellationCode) {
        this.id = id;
        this.status = status;
        this.confirmationCode = confirmationCode;
        this.cancellationCode = cancellationCode;
    }

    public void setId(long cid) {
        this.id = cid;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setConfirmationCode(String confirmationCode) {
        this.confirmationCode = confirmationCode;
    }

    public void setCancellationCode(String cancellationCode) {
        this.cancellationCode = cancellationCode;
    }

    public long getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public String getConfirmationCode() {
        return confirmationCode;
    }

    public String getCancellationCode() {
        return cancellationCode;
    }
}
