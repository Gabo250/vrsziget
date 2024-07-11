package com.example.vrsziget.dto;

import javax.persistence.Entity;
import java.sql.Timestamp;

@Entity
public class DateBetweenDTO {
    private Timestamp start;
    private Timestamp end;

    public DateBetweenDTO(Timestamp start, Timestamp end) {
        this.start = start;
        this.end = end;
    }

    public DateBetweenDTO() {
    }

    public Timestamp getStart() {
        return start;
    }

    public Timestamp getEnd() {
        return end;
    }
}
