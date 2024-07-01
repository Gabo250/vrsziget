package com.example.vrsziget.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "membernum")
public class MaxMember {
    @Id
    @Column(name = "gtype")
    private String gType;

    @Column(name = "maxmember")
    private int maxNumber;

    public MaxMember() {
    }

    public MaxMember(String gType, int maxNumber) {
        this.gType = gType;
        this.maxNumber = maxNumber;
    }

    public void setgType(String gType) {
        this.gType = gType;
    }

    public void setMaxNumber(int maxNumber) {
        this.maxNumber = maxNumber;
    }

    public String getgType() {
        return gType;
    }

    public int getMaxNumber() {
        return maxNumber;
    }
}
