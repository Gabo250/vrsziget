package com.example.vrsziget.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "reservation")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Reservation {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private long id;

    @OneToOne
    @JoinColumn(name = "cid", referencedColumnName = "cid")
    private Confirmation conf;

    @ManyToOne
    @JoinColumn(name = "email", referencedColumnName = "email")
    private ReservationUser resUser;

    @Column(name = "name")
    private String name;

    @Column(name = "gtype")
    private String gType;

    @Column(name = "member")
    private int member;

    @Column(name = "date")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Timestamp date;

    @Column(name = "bookdate")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Timestamp bookDate;

    public Reservation() {
    }

    public Reservation(long id, Confirmation conf, ReservationUser resUser, int member, String name, Timestamp date, Timestamp bookDate, String gType) {
        this.id = id;
        this.conf = conf;
        this.resUser = resUser;
        this.name = name;
        this.date = date;
        this.bookDate = bookDate;
        this.gType = gType;
        this.member = member;
    }

    public void setBookDate(Timestamp bookDate) {
        this.bookDate = bookDate;
    }

    public void setResUser(ReservationUser resUser) {
        this.resUser = resUser;
    }

    public void setMember(int member) {
        this.member = member;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(ReservationUser resUser) {
        this.resUser = resUser;
    }

    public void setConf(Confirmation conf) {
        this.conf = conf;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ReservationUser getResUser() {
        return resUser;
    }

    public int getMember() {
        return member;
    }

    public Timestamp getBookDate() {
        return bookDate;
    }

    public Timestamp getDate() {
        return date;
    }

    public String getName() {
        return name;
    }

    public void setgType(String gType) {
        this.gType = gType;
    }

    public String getgType() {
        return gType;
    }

    public Confirmation getConf() {
        return conf;
    }

    public long getId() {
        return id;
    }
}
