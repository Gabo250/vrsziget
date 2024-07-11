package com.example.vrsziget.domain;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseHandler {
    public static ResponseEntity<Object> generateResponse(Object message, HttpStatus status) {
        Map<Object, Object> map = new HashMap<Object, Object>();
        map.put("message", message);
        map.put("status", status);

        return new ResponseEntity<Object>(map, status);
    }
}
